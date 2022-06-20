const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY;

export const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
export const NOW_PLAYING_BASE_URL = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US`;
export const GENRES_BASE_URL = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;

export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
export const POSTER_SIZE = 'w500';
