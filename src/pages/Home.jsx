import { useState, useEffect } from 'react';
import HomePage from 'components/HomePage/HomePage';
import * as fetchMoviesAPI from '../components/services/API';

export const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchMoviesAPI.fetchTrendingMovies().then(setMovies);
  }, []);
  return (
    <>
      <HomePage movies={movies} />
    </>
  );
};

export default Home;
