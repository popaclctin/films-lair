import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import AllFilms from './pages/AllFilms';
import FilmDetails from './pages/FilmDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate to='/films' replace />} />
        <Route path='/films' element={<AllFilms />} />
        <Route path='/films/:filmId' element={<FilmDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Layout>
  );
}

export default App;
