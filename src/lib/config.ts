//Films api config
const FILMS_API_URL = 'https://api.themoviedb.org/3/';
const FILMS_API_KEY = process.env.REACT_APP_FILMS_API_KEY;

export const SEARCH_BASE_URL = `${FILMS_API_URL}search/movie?api_key=${FILMS_API_KEY}&language=en-US&query=`;
export const NOW_PLAYING_BASE_URL = `${FILMS_API_URL}movie/now_playing?api_key=${FILMS_API_KEY}&language=en-US`;
export const GET_FILM_DETAILS_BASE_URL = (movieId: number) =>
  `${FILMS_API_URL}movie/${movieId}?api_key=${FILMS_API_KEY}&language=en-US`;
export const GET_FILM_CREDITS_BASE_URL = (movieId: number) =>
  `${FILMS_API_URL}movie/${movieId}/credits?api_key=${FILMS_API_KEY}&language=en-US`;

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
export const POSTER_SIZE = 'w500';
export const PROFILE_SIZE = 'w185';

//Auth api config
const AUTH_API_KEY = process.env.REACT_APP_AUTH_API_KEY;
export const SIGNIN_BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${AUTH_API_KEY}`;
export const SIGNUP_BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${AUTH_API_KEY}`;

//Watch List api config
export const FIREBASE_DB_URL = `https://films-lair-default-rtdb.europe-west1.firebasedatabase.app/`;
