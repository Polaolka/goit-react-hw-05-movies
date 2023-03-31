
import { useState, useEffect } from 'react';
import {  useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from '../apiServises/apiServises';

import { Container } from '../components/Container/Container';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const queryName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryName === '') setMovies([]);
    setIsMoviesLoading(true);
    async function fetchData() {
      const response = await fetchMoviesByName(queryName);
      setMovies(s => [...response.movies]);
      setIsMoviesLoading(false);
    }
    fetchData();
  }, [queryName]);

  const handleFormSubmit = queryName => {
    if (queryName === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: queryName.toLowerCase() });
  };

  return (
    <Container>
      <MoviesList isMoviesLoading={isMoviesLoading}
      movies={movies}
      location={location}
      handleFormSubmit={handleFormSubmit}
       />
    </Container>
  );
};
export default Movies;
