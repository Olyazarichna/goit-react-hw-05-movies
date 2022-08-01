import { useState } from 'react';

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movie"
          name="search"
          value={search}
          onChange={handleChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};
export default Movies;
