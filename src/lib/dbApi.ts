import { FilmType } from '../types';
import { FIREBASE_DB_URL } from './config';

export async function fetchWatchList(userId: string, authToken: string) {
  const endpoint = `${FIREBASE_DB_URL}/watchList/${userId}.json?auth=${authToken}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`${data.status_code}: ${data.status_message}`);
  }
  const watchList = [];
  for (const key in data) {
    watchList.push(data[key]);
  }
  console.log(watchList);
  return watchList;
}

export async function addFilmToWatchList(
  userId: string,
  authToken: string,
  film: FilmType
) {
  const endpoint = `${FIREBASE_DB_URL}/watchList/${userId}/${film.id}.json?auth=${authToken}`;
  const response = await fetch(endpoint, {
    method: 'PUT',
    body: JSON.stringify(film),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`${data.status_code}: ${data.status_message}`);
  }
  return data;
}

export async function removeFilmFromWatchList(
  userId: string,
  authToken: string,
  filmId: number
) {
  const endpoint = `${FIREBASE_DB_URL}/watchList/${userId}/${filmId}.json?auth=${authToken}`;
  const response = await fetch(endpoint, {
    method: 'DELETE',
    body: null,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`${data.status_code}: ${data.status_message}`);
  }
  return data;
}
