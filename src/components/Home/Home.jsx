import { useState, useEffect } from 'react';
import * as fetchMoviesAPI from '../services/API';
// import { fetchTrendingMovies } from 'components/services/API';

export const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchMoviesAPI.fetchTrendingMovies().then(setMovies);
  }, []);
  return (
    <>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
