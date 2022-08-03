import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Review from 'components/Review/Review';

import * as fetchMoviesAPI from '../components/services/API';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesAPI.fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      <Review reviews={reviews} />
    </>
  );
};
export default Reviews;
