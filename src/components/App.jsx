import { Routes, Route, Outlet } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { AppBar } from './AppBar/AppBar';
import { NotFound } from 'pages/NotFound';
import { MovieDetails } from 'pages/MovieDatails';

export const App = () => {
  return (
    <div>
      <div>
        <AppBar />
        <Outlet />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
{
  /* по кліку на фільм відображається детальна інформація про фільм  (пошук йде по ід) + кнопка го бек + додаткова інформація  з силками на Cast (відкриває акторів) Review (якщо немає то інфа ми не маємо вдгуків) якщо є то рендерить відгуки*/
}

{
  /* рендерить форму для пошуку, якщо є то рендерить список фільмів по кліку
        на кожен з яких рендериться детальна інфа(пошук йде по назві) з силками на Cast (відкриває
        акторів) Review */
}
