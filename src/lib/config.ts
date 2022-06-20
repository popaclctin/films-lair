const API_URL: string = 'https://api.themoviedb.org/3/';
const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;

const SEARCH_BASE_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const NOW_PLAYING_BASE_URL: string = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US`;

export { SEARCH_BASE_URL, NOW_PLAYING_BASE_URL };
