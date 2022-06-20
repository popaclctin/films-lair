import React, { useCallback, useEffect } from 'react';
import FilmsList from '../components/films/FilmsList';
import useHttp from '../hooks/use-http';
import { fetchFilms } from '../lib/api';

export default function AllFilms(): JSX.Element {
  const fetchLatestFilms = useCallback(async () => fetchFilms(1, ''), []);
  const { data, isLoading, error, sendRequest } = useHttp(fetchLatestFilms);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  console.log(data);

  return (
    <section>
      {isLoading ?? <p>Fetching films...</p>}
      {!error ?? <p>Something went wrong...</p>}
      {data && <FilmsList films={data.results} />}
    </section>
  );
}
