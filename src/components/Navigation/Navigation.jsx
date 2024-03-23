import { Link } from 'react-router-dom';
import css from './Navigation.module.css'; // Підключаємо модуль CSS

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
      <hr className={css.separator} /> {/* Лінія-роздільник */}
    </nav>
  );
};

export default Navigation;
