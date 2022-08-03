import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './HomePage.module.css';

export const HomePage = ({ movies }) => {
  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      {movies && (
        <ul className={css.list}>
          {movies.map(movie => (
            <li key={movie.id} className={css.listItems}>
              <NavLink to={`/movies/${movie.id}`} className={css.link}>
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default HomePage;
HomePage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
