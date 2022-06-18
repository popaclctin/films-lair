import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import FilmDetails from './pages/FilmDetails';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie' element={<FilmDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
