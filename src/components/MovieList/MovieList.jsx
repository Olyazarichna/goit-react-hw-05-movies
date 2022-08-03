import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieList.module.css';
export const MovieList = ({ search }) => {
  return (
    <>
      <ul className={css.list}>
        {search.map(movie => {
          const { id, title } = movie;
          return (
            <li key={id} className={css.listItem}>
              <NavLink to={`${id}`}>
                <p className={css.movieTitle}>{title}</p>
              </NavLink>
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
