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

  if (status === 'failed') {
    return <p>{error}</p>;
  } else {
    return (
      <Fragment>
        {films.total_results > 0 ? (
          <FilmsList films={films.results} />
        ) : (
          <p>There are no films!</p>
        )}
        <LoadMoreBtn
          isLoading={status === 'loading'}
          onClick={loadMoreFilmsHandler}
        />
      </Fragment>
    );
  }
};

export default AllFilms;
