import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';
import css from './MovieList.module.css';
const MovieList = ({ search }) => {
  const location = useLocation();

  return (
    <>
      <ul className={css.list}>
        {search.map(movie => {
          const { id, title } = movie;
          return (
            <li key={id} className={css.listItem}>
              <Link
                to={`${id}`}
                state={{ from: location }}
                className={css.link}
              >
                <p className={css.movieTitle}>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default MovieList;
MovieList.propTypes = {
  search: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
