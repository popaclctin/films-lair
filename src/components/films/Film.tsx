import React from 'react';
import { Wrapper } from './Film.styles';
import type { FilmType } from '../../types';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../lib/config';
import { useAppSelector } from '../../hooks/use-redux';
import { getGenreName } from '../../lib/helpers';

const Film: React.FC<FilmType> = ({
  title,
  poster_path,
  vote_average,
  genre_ids,
}) => {
  const genres = useAppSelector((state) => state.films.genres);

  return (
    <Wrapper>
      <div className='film_poster'>
        <img
          src={
            poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`
              : undefined
          }
          alt={title}
        />
      </div>
      <div className='film_details'>
        <p>{vote_average}</p>
        <h1>{title}</h1>
        <ul>
          {genre_ids.map((genre_id) => (
            <li key={genre_id}>{getGenreName(genres, genre_id)}</li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Film;
