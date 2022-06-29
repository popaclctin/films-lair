import React, { Fragment, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/use-redux';
import FilmsList from '../components/Films/FilmsList';
import { LoadingSpinner } from '../components/UI/LoadingSpinner';
import { LoadMoreBtn } from '../components/UI/LoadMoreBtn';
import { fetchFilmsThunk } from '../store/films-slice';

const AllFilms: React.FC = () => {
  const dispatch = useAppDispatch();

  const films = useAppSelector((state) => state.films.films);
  const searchTerm = useAppSelector((state) => state.films.searchTerm);
  const status = useAppSelector((state) => state.films.status);
  const error = useAppSelector((state) => state.films.error);

  const loadMoreFilmsHandler = () => {
    dispatch(fetchFilmsThunk({ page: films.page + 1, searchTerm }));
  };

  useEffect(() => {
    dispatch(fetchFilmsThunk({ page: 1, searchTerm }));
  }, [dispatch, searchTerm]);

  let content = null;

  if (status === 'loading') {
    content = <LoadingSpinner />;
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  } else if (status === 'succeeded') {
    content =
      films.results.length !== 0 ? (
        <Fragment>
          <FilmsList films={films.results} />
          <LoadMoreBtn isLoading={false} onClick={loadMoreFilmsHandler} />
        </Fragment>
      ) : (
        <p>There are no films!</p>
      );
  }

  return content;
};

export default AllFilms;
