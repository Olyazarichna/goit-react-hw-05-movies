import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as fetchMoviesAPI from '../components/services/API';
import { nanoid } from 'nanoid';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  //   const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  useEffect(() => {
    fetchMoviesAPI.fetchDetailsInfo(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <button>Go back</button>
      <div>
        {movie && (
          <>
            <img src="{imageUrl}" alt="poster" />
            <p>{movie.title}</p>
            <p>Popularity: {movie.popularity}</p>
            <p>Overview: {movie.overview}</p>
            <p>Genres: {movie.genres.join(', ')}</p>
            <h3>Additional information</h3>

            <ul>
              <li key={nanoid()}>
                <NavLink to={'cast'}>Cast</NavLink>
              </li>
              <li key={nanoid()}>
                <NavLink to={'reviews'}>Reviews</NavLink>
              </li>
            </ul>
            <Outlet />
          </>
        )}
      </div>
    </>
  );
};
export default MovieDetails;
