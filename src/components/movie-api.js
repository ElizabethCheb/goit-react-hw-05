import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'ddfcfa905ee1776e8ee8ae68b48577c8',
  },
});

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

async function fetchData(url = '') {
  const response = await axiosInstance.get(url);
  return response.data;
}

export function fetchTrendingMovies() {
  return fetchData(`/trending/movie/day?language=en-US`).then(
    data => data.results
  );
}

export function fetchMovieSearch(query) {
  return fetchData(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  ).then(data => data.results);
}

export function fetchMoviesId(movieId) {
  return fetchData(`/movie/${movieId}?language=en-US`);
}

export function fetchMovieCast(movieId) {
  return fetchData(`/movie/${movieId}/credits?language=en-US`).then(
    data => data.cast
  );
}

export function fetchMovieReviews(movieId) {
  return fetchData(`/movie/${movieId}/reviews?language=en-US&page=1`).then(
    data => data.results
  );
}
