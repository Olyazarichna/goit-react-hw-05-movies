import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as fetchMoviesAPI from '../components/services/API';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const movieId = useParams();
  console.log(movieId);

  useEffect(() => {
    fetchMoviesAPI.searchMovieById(movieId).then(setMovie);
  }, [movieId]);
  return (
    <div>
      <p>{movie}</p>
    </div>
  );
};

export default MovieDetails;
