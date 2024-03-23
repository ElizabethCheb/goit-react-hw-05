import css from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function MovieList({ movies }) {
  const location = useLocation();
  console.log(location);

  return (
    <ul className={css.list}>
      {movies.map(({ id, original_title, poster_path }) => (
        <li className={css.listli} key={id}>
          <Link to={`/movies/${id}`} state={location}>
            <div>
              {poster_path && (
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />
              )}
              <h3>{original_title}</h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
