import PropTypes from 'prop-types';
import css from './Review.module.css';

const Review = ({ reviews }) => {
  return (
    <div>
      {reviews.length > 0 ? (
        <>
          <ul className={css.list}>
            {reviews.map(review => {
              return (
                <li key={review.id}>
                  <p className={css.name}>Author: {review.author}</p>
                  <p className={css.text}>{review.content}</p>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p className={css.review}>
          We don't have any reviews for this movie. You can be first.
        </p>
      )}
    </div>
  );
};

export default Review;

Review.propTypes = {
  review: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
