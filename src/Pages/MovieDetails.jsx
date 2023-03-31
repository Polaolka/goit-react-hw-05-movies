import { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';
import { fetchMoviesById } from '../apiServises/apiServises';
import { Container } from '../components/Container/Container';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const [isMoviesLoading, setIsMoviesLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchData() {
      const response = await fetchMoviesById(movieId);
      setMovie(response.movie);
      setIsMoviesLoading(false);
    }
    fetchData();
  }, [movieId]);
  if (isMoviesLoading) {
    return <Loader />;
  }
  return (
    <>
      <Container>
        
        <MovieInfo movie={movie} location={location} />

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default MovieDetails;
