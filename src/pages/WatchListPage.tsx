import React, { useEffect, useState } from 'react';
import WatchListFilm from '../components/Films/WatchListFilm';
import { useAppSelector } from '../hooks/use-redux';
import { fetchWatchList, removeFilmFromWatchList } from '../lib/dbApi';
import { FilmType } from '../types';

const WatchListPage: React.FC = () => {
  const [watchList, setWatchList] = useState<FilmType[]>([]);

  const userId = useAppSelector((state) => state.auth.userId) || '';
  const authToken = useAppSelector((state) => state.auth.token) || '';

  const removeFilmHandler = async (
    userId: string,
    authToken: string,
    filmId: number
  ) => {
    try {
      await removeFilmFromWatchList(userId, authToken, filmId);
      setWatchList((prevState) =>
        prevState.filter((film) => film.id !== filmId)
      );
    } catch (error) {
      let message;
      if (error instanceof Error) {
        message = error.message;
      } else message = String(error);
      console.log(message);
    }
  };

  useEffect(() => {
    fetchWatchList(userId, authToken)
      .then((data) => setWatchList(data))
      .catch((error) => console.log(error.message));
  }, [authToken, userId]);

  return (
    <ul>
      {watchList.map((film) => (
        <li>
          <WatchListFilm
            film={film}
            onRemoveHandler={removeFilmHandler.bind(
              null,
              userId,
              authToken,
              film.id
            )}
          />
        </li>
      ))}
    </ul>
  );
};

export default WatchListPage;
