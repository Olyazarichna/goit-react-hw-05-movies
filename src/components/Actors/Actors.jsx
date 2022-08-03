import PropTypes from 'prop-types';
import css from './Actors.module.css';

const Actors = ({ cast }) => {
  return (
    <>
      <ul className={css.list}>
        {cast.map(actor => (
          <li key={actor.id} className={css.listItems}>
            {actor.profile_path ? (
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt="actor"
                width="200"
              />
            ) : (
              <img
                className={css.img}
                src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
                alt=""
                width="200"
              />
            )}
            <p className={css.name}>{actor.name}</p>
            <p className={css.text}>
              <span>Character:</span> {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Actors;
Actors.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
