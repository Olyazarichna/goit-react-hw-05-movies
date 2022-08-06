import PropTypes from 'prop-types';
import css from './DetailInfo.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
const DetailInfo = ({ movie }) => {
  const location = useLocation();
  const [goBack] = useState(location?.state?.from ?? '/');

  return (
    <>
      <Link to={goBack} className={css.btn}>
        Go back
      </Link>
      <div className={css.wrapper}>
        {movie && (
          <>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="poster"
              />
            ) : (
              <img
                src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
                alt="poster"
                width={400}
              />
            )}

            <div className={css.container}>
              <p className={css.title}>{movie.title}</p>
              <p>Popularity: {movie.popularity} %</p>
              <p>Overview: {movie.overview}</p>
              {movie.genres ?? <p>Genres: {movie.genres.join(', ')}</p>}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DetailInfo;
DetailInfo.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    popularity: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    genres: PropTypes.array.isRequired,
  }),
};
