import React from 'react';
import { FilmType } from '../../types';
import { Wrapper } from './Watchlist.style';
import WatchListFilm from './WatchListFilm';

type Props = {
  films: FilmType[];
  onRemove: (filmId: number) => Promise<void>;
};

const Watchlist = ({ films, onRemove }: Props) => {
  return (
    <Wrapper>
      <h1>My Watchlist</h1>
      {films.length !== 0 ? (
        <ul>
          {films.map((film) => (
            <li key={film.id}>
              <WatchListFilm
                film={film}
                onRemoveHandler={() => onRemove(film.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no films</p>
      )}
    </Wrapper>
  );
};

export default Watchlist;
