import { Route, Routes, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './components/Auth/ProtectedRoute';
import Layout from './components/Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import AllFilms from './pages/AllFilmsPage';
import { AuthPage } from './pages/AuthPage';
import FilmDetails from './pages/FilmDetailsPage';
import NotFound from './pages/NotFoundPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate to='/films' replace />} />
        <Route path='/films' element={<AllFilms />} />
        <Route path='/films/:filmId' element={<FilmDetails />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Layout>
  );
}

export default App;
