import MoviesForm from '../components/MoviesForm/MoviesForm';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as fetchMoviesAPI from '../components/services/API';

export const Movies = () => {
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

      <ul>
        {search.map(movie => {
          return (
            <li key={movie.id}>
              <NavLink to={`${movie.id}`}>
                <p>{movie.title}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <p></p>
    </>
  );
};
