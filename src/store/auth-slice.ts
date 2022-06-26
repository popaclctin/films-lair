import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { login, signup } from '../lib/authApi';

type State = {
  token: string;
  isLoggedIn: boolean;
  email: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: State = {
  token: '',
  isLoggedIn: false,
  email: '',
  status: 'idle',
  error: null,
};

export const signInUser = createAsyncThunk(
  'auth/signInUser',
  async (args: { email: string; password: string }) => {
    const data = await login(args.email, args.password);
    return data;
  }
);

export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (args: { email: string; password: string }) => {
    const data = await signup(args.email, args.password);
    return data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLoggedOut(state) {
      state.email = '';
      state.isLoggedIn = false;
      state.token = '';
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
          state.isLoggedIn = true;
          state.email = action.payload.email;
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
