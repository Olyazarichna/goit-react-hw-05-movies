import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as fetchMoviesAPI from '../components/services/API';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchMoviesAPI.fetchReviews(id).then(setReviews);
  }, [id]);

  return (
    <>
      <div>
        {reviews.length > 0 ? (
          <>
            <ul>
              {reviews.map(review => {
                return (
                  <li key={review.id}>
                    <p>Author: {review.author}</p>
                    <p>{review.content}</p>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </div>
    </>
  );
};
export default Reviews;
