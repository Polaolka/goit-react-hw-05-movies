// import { Suspense, useRef } from 'react';
import { useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location?.state?.from ?? '/movies');
  const { movieId } = useParams();
  console.log(movieId);

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])
  
  return (
    <>
    <Link to={backLinkLocationRef.current}
    >&#8592; Go back</Link>
      <h1>MovieDetails: {movieId}</h1>
      <ul>
        <li>
          <Link to="cast">Actors</Link>
        </li>
        <li>
          <Link to="reviews">Review</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;