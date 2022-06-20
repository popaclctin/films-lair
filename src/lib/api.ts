import { FilmsType } from '../types';
import { SEARCH_BASE_URL, NOW_PLAYING_BASE_URL } from './config';

export async function fetchFilms(
  page: number,
  searchTerm: string
): Promise<FilmsType> {
  const endpoint: string = searchTerm
    ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
    : `${NOW_PLAYING_BASE_URL}&page=${page}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    //TODO: check the structure of a returned error
    throw new Error('Could not fetch films!');
  }
  const data = await response.json();
  return data;
}
