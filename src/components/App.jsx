import { Routes, Route, Outlet } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { AppBar } from './AppBar/AppBar';
import { NotFound } from 'pages/NotFound';
import { MovieDetails } from 'pages/MovieDatails';
import { Cast } from 'pages/Cast';
import { Reviews } from 'pages/Reviews';

export const App = () => {
  return (
    <div>
      <div>
        <AppBar />
        <Outlet />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
