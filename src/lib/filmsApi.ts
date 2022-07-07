import {
  SEARCH_BASE_URL,
  NOW_PLAYING_BASE_URL,
  GET_FILM_DETAILS_BASE_URL,
} from './config';

export async function fetchFilms(page: number = 1, searchTerm: string = '') {
  const endpoint = searchTerm
    ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
    : `${NOW_PLAYING_BASE_URL}&page=${page}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.status_message);
  }
  return data;
}

export async function fetchFilmDetails(movieId: number) {
  const endpoint = GET_FILM_DETAILS_BASE_URL(movieId);
  const response = await fetch(endpoint);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`${data.status_code}: ${data.status_message}`);
  }
  return data;
}
