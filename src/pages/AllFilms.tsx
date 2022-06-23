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
  // const genres = useAppSelector((state) => state.films.genres);

  useEffect(() => {
    dispatch(fetchLatestFilmsAction());
    dispatch(fetchGenresAction());
  }, [dispatch]);

  return (
    <section>
      {/* {isLoading ?? <p>Fetching films...</p>}
      {!error ?? <p>Something went wrong...</p>} */}
      {films && <FilmsList films={films.results} />}
    </section>
  );
};

export default AllFilms;
