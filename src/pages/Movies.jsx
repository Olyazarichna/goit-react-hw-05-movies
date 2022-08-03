import MoviesForm from '../components/MoviesForm/MoviesForm';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as fetchMoviesAPI from '../components/services/API';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get('name');

  const [search, setSearch] = useState([]);

  const formSubmit = name => {
    setSearchParams({ name });
  };

  useEffect(() => {
    if (!name) {
      return;
    }
    fetchMoviesAPI.searchMovieByName(name).then(setSearch);
  }, [name]);
  return (
    <>
      <MoviesForm onSubmit={formSubmit} />
      <MovieList search={search} />
    </>
  );
};

export default Movies;
