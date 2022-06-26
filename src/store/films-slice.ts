import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFilms, fetchGenres } from '../lib/filmsApi';
import { FilmType, FilmsType, GenresType } from '../types';

type State = {
  films: FilmsType;
  favourites: FilmType[];
  genres: GenresType;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: State = {
  films: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0,
  },
  favourites: [],
  genres: [],
  status: 'idle',
  error: null,
};

// Thunk action creators
export const fetchLatestFilms = createAsyncThunk(
  'films/fetchLatestFilms',
  async (page: number) => {
    const filmsData = await fetchFilms(page);
    return filmsData;
  }
);

export const fetchAllGenres = createAsyncThunk(
  'films/fetchGenres',
  async () => {
    const genresData = await fetchGenres();
    return genresData.genres;
  }
);

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    filmsUpdated(state, action: PayloadAction<FilmsType>) {
      const newFilmsState = {
        ...action.payload,
        results: [...state.films.results, ...action.payload.results],
      };
      state.films = newFilmsState;
    },
    genresReplaced(state, action: PayloadAction<GenresType>) {
      state.genres = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLatestFilms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLatestFilms.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.films = {
          ...action.payload,
          results: [...state.films.results, ...action.payload.results],
        };
      })
      .addCase(fetchLatestFilms.rejected, (state, action) => {
        state.status = 'failed';
        if (action.error instanceof Error) state.error = action.error.message;
        else state.error = String(action.error);
      })
      .addCase(fetchAllGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
      });
  },
});

export const filmsActions = filmsSlice.actions;

export default filmsSlice.reducer;
