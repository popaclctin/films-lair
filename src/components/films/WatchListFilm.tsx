import React, { Fragment } from 'react';
import { FilmType } from '../../types';
import Film from './Film';

type Props = {
  film: FilmType;
  onRemoveHandler: () => void;
};

export const WatchListFilm = ({ film, onRemoveHandler }: Props) => {
  return (
    <Fragment>
      <Film {...film} />
      <button onClick={onRemoveHandler}>Remove</button>
    </Fragment>
  );
};

export default WatchListFilm;
