import React from 'react';
import { FilmType } from '../../types';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../lib/config';

export default function Film({ title, poster_path, vote_average }: FilmType) {
  return (
    <div>
      <div>
        <img
          src={
            poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`
              : undefined
          }
          alt={title}
        />
      </div>
      <div>
        <p>{vote_average}</p>
        <h1>{title}</h1>
      </div>
    </div>
  );
}
