import * as fetchMoviesAPI from '../components/services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Actors from 'components/Actors/Actors';
export const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesAPI.fetchCastInfo(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      <Actors cast={cast} />
    </>
  );
};
