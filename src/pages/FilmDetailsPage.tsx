import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FilmDetails from '../components/Films/FilmDetails';
import { useAppSelector } from '../hooks/use-redux';
import { fetchFilmDetails } from '../lib/filmsApi';
import { addFilmToWatchList } from '../lib/dbApi';
import { FilmType } from '../types';

export default function FilmDetailsPage() {
  const { filmId } = useParams();
  const [film, setFilm] = useState<FilmType | null>(null);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const authToken = useAppSelector((state) => state.auth.token) || '';
  const userId = useAppSelector((state) => state.auth.userId) || '';
  const navigate = useNavigate();

  const addToWatchListHandler = async (film: FilmType) => {
    if (isLoggedIn) {
      try {
        await addFilmToWatchList(userId, authToken, film);
        navigate('/watchlist');
      } catch (error) {
        let message;
        if (error instanceof Error) {
          message = error.message;
        } else message = String(error);
        console.log(message);
      }
    } else {
      navigate('/auth');
    }
  };

  useEffect(() => {
    fetchFilmDetails(+filmId!) //convert to number and ignore null type warning
      .then((data) => {
        setFilm(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [filmId]);

  return (
    film && (
      <FilmDetails
        film={film}
        onAddToWatchList={addToWatchListHandler.bind(null, film)}
      />
    )
  );
}
