import axios from 'axios';

const API_KEY = 'f907ec6f235cb6bab9021d7ee76a1e81';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const URL_BY_ID = 'https://api.themoviedb.org/3/movie/';
const URL_BY_NAME = 'https://api.themoviedb.org/3/search/movie';

export async function fetchTrendingMovies(page) {
  const url = `${BASE_URL}?api_key=${API_KEY}&page=${page}`;
  try {
    const response = await axios.get(`${url}`);
    const movies = response.data.results;
    const totalPage = response.data.total_pages;
    return { movies, totalPage };

  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMoviesByName(query) {
  const url = `${URL_BY_NAME}?api_key=${API_KEY}&query=${query}&language=en-US`;
  try {
    const response = await axios.get(`${url}`);
    const movies = response.data.results;
    return { movies };
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMoviesById(movie_id) {
  const url = `${URL_BY_ID}${movie_id}?api_key=${API_KEY}&language=en-US`;
  try {
    const response = await axios.get(`${url}`);
    const movie = response.data;
    return { movie };
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieReviews(movie_id) {
  const url = `${URL_BY_ID}${movie_id}/reviews?api_key=${API_KEY}&language=en-US`;
  try {
    const response = await axios.get(`${url}`);
    const review = response.data.results;

    return review;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieCasts(movie_id) {
  const url = `${URL_BY_ID}${movie_id}/credits?api_key=${API_KEY}&language=en-US`;
  try {
    const response = await axios.get(`${url}`);
    const casts = response.data.cast;
    return casts;
  } catch (error) {
    console.log(error.message);
  }
}
