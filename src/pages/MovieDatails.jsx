import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as fetchMoviesAPI from '../components/services/API';
import DetailInfo from 'components/DetailInfo/DetailInfo';
import NavigationList from 'components/NavigationList/NavigationList';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesAPI.fetchDetailsInfo(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <DetailInfo movie={movie} />
      <NavigationList />
    </>
  );
};
export default MovieDetails;
