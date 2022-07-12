import React from 'react';
import { Wrapper } from './Film.styles';
import type { FilmType } from '../../types';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../lib/config';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import noPoster from '../../images/no-poster.png';
import { formatReleaseDate } from '../../lib/helpers';

const Film: React.FC<FilmType> = ({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
}) => {
  const filmUrl = `/films/${id}`;

  return (
    <Wrapper>
      <div className='film_poster'>
        <Link to={filmUrl}>
          <img
            src={
              poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`
                : noPoster
            }
            alt={title}
            width='500'
            height='750'
          />
        </Link>
      </div>
      <div className='film_details'>
        {vote_average ? (
          <div className='film_details__rating'>
            <FontAwesomeIcon
              icon={faStar}
              className='film_details__rating_star'
            />
            <p>{vote_average}</p>
          </div>
        ) : null}
        <Link to={filmUrl}>
          <h1 className='film_details__title'>{title}</h1>
        </Link>
        <p className='film_details__release_date'>
          <span>Release date:</span>
          {formatReleaseDate(release_date)}
        </p>
      </div>
    </Wrapper>
  );
};

export default Film;
