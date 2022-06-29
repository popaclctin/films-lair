import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../lib/config';
import { FilmType } from '../../types';

type Props = {
  film: FilmType;
  onAddToWatchList: () => void;
};

const FilmDetails = ({ film, onAddToWatchList }: Props) => {
  return (
    <article>
      <div>
        <img
          src={
            film.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${film.poster_path}`
              : undefined
          }
          alt={film.title}
        />
      </div>
      <div>
        <h1>{film.title}</h1>
        <ul>
          <li>{film.release_date}</li>
          <li>{film.runtime}</li>
        </ul>
        <ul>
          {film.genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        <p>{film.tagline}</p>
        <p>{film.overview}</p>
        <p>Rating: {film.vote_average}</p>
      </div>
      <button onClick={onAddToWatchList}>Add to watchlist</button>
    </article>
  );
};

export default FilmDetails;
