import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilmType, FilmsType, GenresType } from '../types';

type FilmsState = {
  films: FilmsType;
  favourites: FilmType[];
  genres: GenresType;
  isLoading: boolean;
  error: string;
};

const initialState: FilmsState = {
  films: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  favourites: [],
  genres: [],
  isLoading: false,
  error: '',
};

const filmsSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    replaceFilms(state, action: PayloadAction<FilmsType>) {
      state.films = action.payload;
    },
    replaceGenres(state, action: PayloadAction<GenresType>) {
      state.genres = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    addFilmToFavourites(state, action: PayloadAction<FilmType>) {
      const newFilm = action.payload;
      const existingFilm = state.favourites.find(
        (film) => film.id === newFilm.id
      );
      if (!existingFilm) {
        state.favourites.push(newFilm);
      }
    },
  },
});

export const filmsActions = filmsSlice.actions;

export default filmsSlice.reducer;
