import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/use-redux';
import FilmsList from '../components/Films/FilmsList';
import {
  fetchLatestFilmsAction,
  fetchGenresAction,
} from '../store/films-actions';

const AllFilms: React.FC = () => {
  const dispatch = useAppDispatch();

  const films = useAppSelector((state) => state.films.films);
  const error = useAppSelector((state) => state.films.error);
  const isLoading = useAppSelector((state) => state.films.isLoading);

  // const genres = useAppSelector((state) => state.films.genres);

  useEffect(() => {
    dispatch(fetchLatestFilmsAction());
    dispatch(fetchGenresAction());
  }, [dispatch]);

  return (
    <section>
      {isLoading && <p>Fetching films...</p>}
      {error && <p>{error}</p>}
      {films.results.length !== 0 && <FilmsList films={films.results} />}
    </section>
  );
};

export default AllFilms;
