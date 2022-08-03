import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={css.linklist}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${css.link}` + (isActive ? ` ${css.active}` : '')
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          `${css.link}` + (isActive ? ` ${css.active}` : '')
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};
