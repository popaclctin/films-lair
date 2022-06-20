import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilmType, FilmsType } from '../types';

interface FilmsState {
  films: FilmsType;
  favourites: FilmType[];
}

const initialState: FilmsState = {
  films: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  favourites: [],
};

const filmsSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    replaceFilms(state, action: PayloadAction<FilmsType>) {
      state.films = action.payload;
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
