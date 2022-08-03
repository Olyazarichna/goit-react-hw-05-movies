import { NavLink, Outlet } from 'react-router-dom';
import { nanoid } from 'nanoid';
import css from './NavigationList.module.css';

export const NavigationList = () => {
  return (
    <>
      <h3 className={css.title}>Additional information</h3>
      <ul>
        <li key={nanoid()}>
          <NavLink to={'cast'}>Cast</NavLink>
        </li>
        <li key={nanoid()}>
          <NavLink to={'reviews'}>Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default NavigationList;
