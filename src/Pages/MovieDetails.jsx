import {  useEffect, useState, Suspense} from 'react';
import {  Outlet, useParams, useLocation } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';
import { fetchMoviesById } from '../apiServises/apiServises';
import { Container } from '../components/Container/Container';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const [isMoviesLoading, setIsMoviesLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  // const backLinkLocationRef = useRef(location?.state?.from ?? '/movies');
  const { movieId } = useParams();
  // console.log(backLinkLocationRef.current);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchMoviesById(movieId);
      console.log(response.movie);
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
      {/* {isMoviesLoading && <Loader />} */}
      <Container>
        <MovieInfo movie={movie} location={location}/>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default MovieDetails;

