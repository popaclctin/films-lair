import React, { useCallback, useEffect } from 'react';
import { fetchFilms, fetchGenres } from '../lib/api';
import useHttp from '../hooks/use-http';
import { useAppDispatch, useAppSelector } from '../hooks/use-redux';
import { filmsActions } from '../store/films-slice';
import FilmsList from '../components/films/FilmsList';

export default function AllFilms(): JSX.Element {
  const dispatch = useAppDispatch();
  // const films = useAppSelector((state) => state.films.films);
  const fetchLatestFilms = useCallback(async () => fetchFilms(1, ''), []);
  const {
    data: fetchedfilms,
    isLoading,
    error,
    sendRequest: fetchLatestFilmsRequest,
  } = useHttp(fetchLatestFilms);

  const { data: genres, sendRequest: fetchGenresRequest } =
    useHttp(fetchGenres);

  useEffect(() => {
    fetchLatestFilmsRequest();
    fetchGenresRequest();
  }, [fetchLatestFilmsRequest, fetchGenresRequest]);

  dispatch(filmsActions.replaceFilms(fetchedfilms));

  return (
    <section>
      {isLoading ?? <p>Fetching films...</p>}
      {!error ?? <p>Something went wrong...</p>}
      {fetchedfilms && <FilmsList films={fetchedfilms.results} />}
    </section>
  );
}
