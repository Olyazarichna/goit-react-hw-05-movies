import MoviesForm from '../components/MoviesForm/MoviesForm';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as fetchMoviesAPI from '../components/services/API';
export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get('name');
  console.log(name);
  const [search, setSearch] = useState([]);
  console.log(search);

  const formSubmit = name => {
    setSearchParams({ name });
    console.log(name);
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
              {movie.title}
              {/* <NavLink to={`${movie.id}`}>{movie.title}</NavLink> */}
            </li>
          );
        })}
      </ul>
      <p></p>
    </>
  );
};
