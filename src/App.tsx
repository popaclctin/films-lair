import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
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
    </Layout>
  );
}

export default App;
