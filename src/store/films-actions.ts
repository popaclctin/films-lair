import { AppDispatch } from '.';
import { fetchFilms, fetchGenres } from '../lib/api';
import { filmsActions } from './films-slice';

export function fetchLatestFilmsAction() {
  return async (dispatch: AppDispatch) => {
    try {
      const filmsData = await fetchFilms(1);
      dispatch(filmsActions.replaceFilms(filmsData));
    } catch (error) {
      //TODO: implement error handling
      console.log(error);
    }
  };
}

export function fetchGenresAction() {
  return async (dispatch: AppDispatch) => {
    try {
      const genresData = await fetchGenres();
      dispatch(filmsActions.replaceGenres(genresData.genres));
    } catch (error) {
      //TODO: implement error handling
      console.log(error);
    }
  };
}
