import {
  SEARCH_BASE_URL,
  NOW_PLAYING_BASE_URL,
  GENRES_BASE_URL,
} from './config';

export async function fetchFilms(page: number, searchTerm: string = '') {
  const endpoint: string = searchTerm
    ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
    : `${NOW_PLAYING_BASE_URL}&page=${page}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`${data.status_code}: ${data.status_message}`);
  }
  return data;
}

export async function fetchGenres() {
  const response = await fetch(GENRES_BASE_URL);
  if (!response.ok) {
    throw new Error('Could not fetch genres!');
  }
  const genres = await response.json();
  return genres;
}
