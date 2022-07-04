import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../lib/config';
import { FilmType } from '../../types';
import { Wrapper } from './FilmDetails.styles';
import { formatReleaseDate, formatRuntime } from '../../lib/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { PrimaryBtn } from '../UI/PrimaryBtn.style';

type Props = {
  film: FilmType;
  onAddToWatchList: () => void;
};

let dollarUSLocale = Intl.NumberFormat('en-US');

const FilmDetails = ({ film, onAddToWatchList }: Props) => {
  return (
    <Wrapper>
      <div className='film_poster'>
        <img
          src={
            film.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${film.poster_path}`
              : undefined
          }
          alt={film.title}
        />
      </div>
      <h1>{film.title}</h1>
      <p>{film.tagline}</p>
      <div className='film_details'>
        {film.vote_average ? (
          <div className='film_details__rating'>
            <FontAwesomeIcon
              icon={faStar}
              className='film_details__rating_star'
              size='4x'
            />
            <p>{film.vote_average}</p>
          </div>
        ) : null}
        <p>
          <span className='label'>Release date:</span>
          <span>{formatReleaseDate(film.release_date)}</span>
        </p>
        <p>
          <span className='label'>Runtime:</span>
          <span>{formatRuntime(film.runtime)}</span>
        </p>
        <div className='film_details__genres'>
          <span className='label'>Genres:</span>
          <p>
            {film.genres.map(({ id, name }) => (
              <span key={id}>{name}</span>
            ))}
          </p>
        </div>
        <p>
          <span className='label'>Budget:</span>
          <span>
            {film.budget
              ? `$${dollarUSLocale.format(film.budget)}`
              : 'Not available'}
          </span>
        </p>
        <p>
          <span className='label'>Revenue:</span>
          <span>
            {film.revenue
              ? `$${dollarUSLocale.format(film.revenue)}`
              : 'Not available'}
          </span>
        </p>

        <p className='film_details__overview'>{film.overview}</p>
        <PrimaryBtn onClick={onAddToWatchList}>Add to watchlist</PrimaryBtn>
      </div>
    </Wrapper>
  );
};

export default FilmDetails;
