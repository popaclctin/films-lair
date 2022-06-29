import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchFilms } from '../lib/filmsApi';
import { FilmsType } from '../types';

type State = {
  films: FilmsType;
  searchTerm: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: State = {
  films: {
    page: 0,
    results: [],
    total_pages: 1,
    total_results: 0,
  },
  searchTerm: '',
  status: 'idle',
  error: null,
};

// Thunk action creators
export const fetchFilmsThunk = createAsyncThunk(
  'films/fetchFilmsThunk',
  async (args: { page: number; searchTerm: string }) => {
    const filmsData = await fetchFilms(args.page, args.searchTerm);
    return filmsData;
  }
);

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    searchTermChanged(state, action) {
      state.searchTerm = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFilmsThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload.page === 1) {
          state.films = action.payload;
        } else {
          state.films = {
            ...action.payload,
            results: [...state.films.results, ...action.payload.results],
          };
        }
      })
      .addCase(fetchFilmsThunk.rejected, (state, action) => {
        state.status = 'failed';
        if (action.error instanceof Error) state.error = action.error.message;
        else state.error = String(action.error);
      });
  },
});

export const { searchTermChanged } = filmsSlice.actions;

export default filmsSlice.reducer;
