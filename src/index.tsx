import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { fetchAllGenres, fetchLatestFilms } from './store/films-slice';

// fecth latest films and genres for the first time
store.dispatch(fetchAllGenres());
store.dispatch(fetchLatestFilms(1));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
