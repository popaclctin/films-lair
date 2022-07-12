import React, { Fragment, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/use-redux';
import FilmsList from '../components/Films/FilmsList';
import { LoadMoreBtn } from '../components/UI/LoadMoreBtn';
import { fetchFilmsThunk } from '../store/films-slice';

const AllFilms: React.FC = () => {
  const dispatch = useAppDispatch();

  const films = useAppSelector((state) => state.films.films);
  const searchTerm = useAppSelector((state) => state.films.searchTerm);
  const status = useAppSelector((state) => state.films.status);
  const error = useAppSelector((state) => state.films.error);

  const loadMoreFilmsHandler = () => {
    const nextPage = films.page + 1;
    if (nextPage <= films.total_pages) {
      dispatch(fetchFilmsThunk({ page: nextPage, searchTerm }));
    }
  };

  useEffect(() => {
    dispatch(fetchFilmsThunk({ page: 1, searchTerm }));
  }, [dispatch, searchTerm]);

  useEffect(() => {
    document.title = 'Films Lair';
  }, []);

  if (status === 'failed') {
    return <p style={{ color: 'red' }}>{error}</p>;
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
          isDisabled={films.page === films.total_pages}
        />
      </Fragment>
    );
  }
};

export default AllFilms;
