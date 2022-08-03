import { NavLink, Outlet } from 'react-router-dom';
import { nanoid } from 'nanoid';
import css from './NavigationList.module.css';

const NavigationList = () => {
  return (
    <>
      <h3 className={css.title}>Additional information</h3>
      <ul>
        <li key={nanoid()} className={css.listItems}>
          <NavLink to={'cast'} className={css.link}>
            Cast
          </NavLink>
        </li>
        <li key={nanoid()} className={css.listItems}>
          <NavLink to={'reviews'} className={css.link}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default NavigationList;
