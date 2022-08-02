import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as fetchMoviesAPI from '../components/services/API';

export const Home = () => {
  const [movies, setMovies] = useState(null);

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
              <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
