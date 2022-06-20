import React, { useCallback, useEffect } from 'react';
import FilmsList from '../components/films/FilmsList';
import useHttp from '../hooks/use-http';
import { fetchFilms, fetchGenres } from '../lib/api';

export default function AllFilms(): JSX.Element {
  const fetchLatestFilms = useCallback(async () => fetchFilms(1, ''), []);
  const {
    data: films,
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

  console.log(genres);

  return (
    <section>
      {isLoading ?? <p>Fetching films...</p>}
      {!error ?? <p>Something went wrong...</p>}
      {films && <FilmsList films={films.results} />}
    </section>
  );
}
