
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return (
    <>
    <button>&#8592; Go back</button>
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