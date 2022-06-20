import React from 'react';
import { FilmType } from '../../types';
import Film from './Film';

type Props = {
  films: FilmType[];
};

export default function FilmsList(props: Props) {
  const films = props.films;
  return (
    <ul>
      {films.map((film) => (
        <li key={film.id}>
          <Film {...film} />
        </li>
      ))}
    </ul>
  );
}
