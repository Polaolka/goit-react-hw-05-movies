import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { fetchMovieReviews } from '../../apiServises/apiServises';
import { Container } from '../Container/Container';
const Rewiews = () => {
  const { movieId } = useParams();
  const [isMoviesLoading, setIsMoviesLoading] = useState(true);
  const [reviews, setReviews] = useState(null);
  // const location = useLocation();
  // const backLinkLocationRef = useRef(location?.state?.from ?? '/movies')

  useEffect(() => {
    // setIsMoviesLoading(true);
    console.log(Number(movieId));
    async function fetchData() {
      const response = await fetchMovieReviews(movieId);
      setReviews(response);
      setIsMoviesLoading(false);
    }
    fetchData();
  }, [movieId]);
  if (isMoviesLoading) {
    return <Loader />;
  }
  console.log(reviews);
  // const { author, content, created_at, id } = reviews;
  return (
    <Container>
      <ul>
        {reviews.map(review => {
          return (
            <li key={`${review.id}`}>
              <div>{review.author}</div>
              <div>{review.content}</div>
              <div>{review.created_at}</div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Rewiews;
