import React from 'react';
import { FilmType } from '../../types';
import { PrimaryBtn } from '../UI/PrimaryBtn.style';
import Film from './Film';
import { Wrapper } from './WatchListFilm.style';

type Props = {
  film: FilmType;
  onRemoveHandler: () => void;
};

export const WatchListFilm = ({ film, onRemoveHandler }: Props) => {
  return (
    <Wrapper>
      <Film {...film} />
      <PrimaryBtn onClick={onRemoveHandler}>Remove</PrimaryBtn>
    </Wrapper>
  );
};

export default WatchListFilm;
