import React, { useEffect, useState } from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../lib/config';
import { CreditsType, FilmType } from '../../types';
import { Wrapper } from './FilmDetails.styles';
import { formatReleaseDate, formatRuntime } from '../../lib/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { PrimaryBtn } from '../UI/PrimaryBtn.style';
import ActorsList from '../Actors/ActorsList';
import { fetchFilmCredits } from '../../lib/filmsApi';

type Props = {
  film: FilmType;
  onAddToWatchList: () => void;
};

let dollarUSLocale = Intl.NumberFormat('en-US');

const FilmDetails = ({ film, onAddToWatchList }: Props) => {
  const [credits, setCredits] = useState<CreditsType | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFilmCredits(film.id)
      .then((data) => setCredits(data))
      .catch((error) => setError(error));
  }, [film.id]);

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
      <div className='film_details'>
        <h1 className='film_details__title'>{film.title}</h1>
        <p className='film_details__tagline'>{film.tagline}</p>
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
        <PrimaryBtn onClick={onAddToWatchList} className='film_details__addBtn'>
          Add to watchlist
        </PrimaryBtn>
      </div>
      {credits && <ActorsList actors={credits.cast} />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Wrapper>
  );
};

export default FilmDetails;
