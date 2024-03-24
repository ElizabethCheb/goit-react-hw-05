import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import css from './MovieCast.module.css';

const API_KEY = 'ddfcfa905ee1776e8ee8ae68b48577c8';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      setLoading(true);
      setError(null);
      
      try {
        if (!movieId) return;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
          params: {
            api_key: API_KEY,
          },
        });
        setCast(response.data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div >
      <h2>Cast</h2>
      <ul className={css.actor}>
        {cast.map(actor => (
          <li key={actor.id}>
            <div>
              {actor.profile_path ? (
                <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} style={{ width: 350, height: 500 }} />
              ) : (
                <div>No image available</div>
              )}
              <span className={css.span}>{actor.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
