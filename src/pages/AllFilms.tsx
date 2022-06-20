import React, { useCallback, useEffect } from 'react';
import useHttp from '../hooks/use-http';
import { fetchFilms } from '../lib/api';

export default function AllFilms(): JSX.Element {
  const fetchLatestFilms = useCallback(async () => fetchFilms(1, ''), []);
  const { data, sendRequest } = useHttp(fetchLatestFilms);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  console.log('Datele din comp AllFilms ', data);

  return <div>All Films</div>;
}
