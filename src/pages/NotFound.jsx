import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <h2>
      Page not found
      <br />
      <Link to="/">Homepage</Link>
    </h2>
  );
};
