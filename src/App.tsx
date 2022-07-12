import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { GlobalStyle } from './styles/Global.styled';
import AllFilms from './pages/AllFilmsPage';
import { AuthPage } from './pages/AuthPage';
import NotFound from './pages/NotFoundPage';
import FilmDetailsPage from './pages/FilmDetailsPage';
import WatchListPage from './pages/WatchListPage';
import ProtectedRoute from './components/Auth/ProtectedRoute';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate to='/films' replace />} />
        <Route path='/films' element={<AllFilms />} />
        <Route path='/films/:filmId' element={<FilmDetailsPage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route
          path='/watchlist'
          element={
            <ProtectedRoute>
              <WatchListPage />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Layout>
  );
}

export default App;
