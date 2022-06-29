import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FilmDetails from '../components/Films/FilmDetails';
import { useAppSelector } from '../hooks/use-redux';
import { fetchFilmDetails } from '../lib/filmsApi';
import { addFilmToWatchList } from '../lib/dbApi';
import { FilmType } from '../types';

export default function FilmDetailsPage() {
  const { filmId } = useParams();
  const [film, setFilm] = useState<FilmType | null>(null);

  const authToken = useAppSelector((state) => state.auth.token);
  const userId = useAppSelector((state) => state.auth.userId);

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
        onAddToWatchList={addFilmToWatchList.bind(
          null,
          userId,
          authToken,
          film
        )}
      />
    )
  );
}
