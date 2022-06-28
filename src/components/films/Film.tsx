import React from 'react';
import { Wrapper } from './Film.styles';
import type { FilmType } from '../../types';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../lib/config';

const Film: React.FC<FilmType> = ({ title, poster_path, vote_average }) => {
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
      </div>
    </Wrapper>
  );
};

export default Film;
