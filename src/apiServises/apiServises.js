import axios from 'axios';

const API_KEY = 'f907ec6f235cb6bab9021d7ee76a1e81';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';

const URL_BY_NAME = 'https://api.themoviedb.org/3/search/movie';
// const PARAMS = {
//   media_type: 'movie',
//   time_window: 'week',
// };
// &page=${page}

export async function fetchTrendingMovies (page) {
  const url = `${BASE_URL}?api_key=${API_KEY}&page=${page}`;
  try {
    const response = await axios.get(`${url}`);
    // console.log(response);
    // const totalMovie = response.data.totalHits;
    const movies = response.data.results;
    const totalPage = response.data.total_pages;
    return { movies, totalPage };
    // return response.data;
    
  } catch (error) {console.log(error.message);}
}

export async function fetchMoviesByName (page, query) {
  const url = `${URL_BY_NAME}?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}`;
  try {
    const response = await axios.get(`${url}`);
    // console.log(response);
    // const totalMovie = response.data.totalHits;
    const movies = response.data.results;
    const totalPage = response.data.total_pages;
    return { movies, totalPage };
    // return response.data;
    
  } catch (error) {console.log(error.message);}
}

// export const fetchTrendingMovies = async () => {
//     const { data } = await axios.get(`trending/movie/day`, params);

//   return data;
// }

// {page: 1, results: Array(20), total_pages: 1000, total_results: 20000}