import React from 'react';
import type { FilmType } from '../../types';
import Film from './Film';
import { Wrapper } from './FilmsList.styles';

type Props = {
  films: FilmType[];
};

const FilmsList: React.FC<Props> = (props) => {
  const films = props.films;
  return (
    <Wrapper>
      {films.map((film) => (
        <Film {...film} key={film.id} />
      ))}
    </Wrapper>
  );
};

export default FilmsList;
