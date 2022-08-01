import { useState, useEffect } from 'react';
import { useLocation, NavLink, Outlet } from 'react-router-dom';
import * as fetchMoviesAPI from '../components/services/API';

export const Home = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    fetchMoviesAPI.fetchTrendingMovies().then(setMovies);
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`${movie.id}`}>{movie.title}</NavLink>
            </li>
          ))}
        </ul>
      )}
      {/* <Outlet /> */}
    </>
  );
};

export default Home;
