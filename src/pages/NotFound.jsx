import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <h2>
      Page not found
      <br />
      <Link to="/">Homepage</Link>
    </h2>
  );
};
export default NotFound;
