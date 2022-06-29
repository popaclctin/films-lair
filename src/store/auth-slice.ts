import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { login, signup } from '../lib/authApi';

let logoutTimer: ReturnType<typeof setTimeout>;

const calculateRemainingTime = (expirationTime: string) => {
  const currentTime = Date.now();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;
  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationDate = localStorage.getItem('expirationTime');

  const remainingTime = storedExpirationDate
    ? calculateRemainingTime(storedExpirationDate)
    : 0;

  if (remainingTime <= 3600) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    return null;
  }

  return storedToken;
};

type State = {
  token: string | null;
  isLoggedIn: boolean;
  email: string | null;
  userId: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: State = {
  token: retrieveStoredToken(),
  isLoggedIn: !!localStorage.getItem('token'),
  email: localStorage.getItem('email'),
  userId: localStorage.getItem('userId'),
  status: 'idle',
  error: null,
};

export const signInUser = createAsyncThunk(
  'auth/signInUser',
  async (args: { email: string; password: string }, { dispatch }) => {
    const data = await login(args.email, args.password);
    logoutTimer = setTimeout(
      () => dispatch(authSlice.actions.isLoggedOut),
      data.expiresIn
    );
    return data;
  }
);

export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (args: { email: string; password: string }, { dispatch }) => {
    const data = await signup(args.email, args.password);
    logoutTimer = setTimeout(
      () => dispatch(authSlice.actions.isLoggedOut),
      data.expiresIn
    );
    return data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLoggedOut(state) {
      state.token = null;
      localStorage.removeItem('token');
      state.email = null;
      localStorage.removeItem('email');
      state.userId = null;
      localStorage.removeItem('userId');
      state.isLoggedIn = false;
      localStorage.removeItem('expirationTime');
      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }
    },
    statusChanged(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(signInUser.fulfilled, signUpUser.fulfilled),
        (state, action) => {
          state.status = 'succeeded';
          state.token = action.payload.idToken;
          localStorage.setItem('token', action.payload.idToken);
          state.email = action.payload.email;
          localStorage.setItem('email', action.payload.email);
          state.userId = action.payload.localId;
          localStorage.setItem('userId', action.payload.localId);
          state.isLoggedIn = true;
          const expirationTime = new Date(
            Date.now() + action.payload.expiresIn * 1000
          );
          localStorage.setItem('expirationTime', expirationTime.toISOString());
        }
      )
      .addMatcher(isAnyOf(signInUser.pending, signUpUser.pending), (state) => {
        state.status = 'loading';
      })
      .addMatcher(
        isAnyOf(signInUser.rejected, signUpUser.rejected),
        (state, action) => {
          state.status = 'failed';
          if (action.error instanceof Error) state.error = action.error.message;
          else state.error = String(action.error);
        }
      );
  },
});

export const { isLoggedOut, statusChanged } = authSlice.actions;

export default authSlice.reducer;
