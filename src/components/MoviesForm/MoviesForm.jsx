import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './MoviesForm.module.css';

export const Movies = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      alert('Please, enter movie you want to find.');
      return;
    }
    onSubmit(search);
    setSearch('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          placeholder="Search movie"
          name="search"
          value={search}
          onChange={handleChange}
          className={css.formInput}
        />
        <button type="submit" className={css.btnForm}>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};
export default Movies;
Movies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
