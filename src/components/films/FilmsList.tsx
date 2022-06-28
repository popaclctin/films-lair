import React from 'react';
import type { FilmType } from '../../types';
import Film from './Film';
import { Link } from 'react-router-dom';
import { Wrapper } from './FilmsList.styles';

type Props = {
  films: FilmType[];
};

const FilmsList: React.FC<Props> = (props) => {
  const films = props.films;
  return (
    <Wrapper>
      {films.map((film) => (
        <li key={film.id}>
          <Link to={`/films/${film.id}`}>
            <Film {...film} />
          </Link>
        </li>
      ))}
    </Wrapper>
  );
};

export default FilmsList;
