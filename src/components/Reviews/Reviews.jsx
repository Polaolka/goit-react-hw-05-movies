import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { fetchMovieReviews } from '../../apiServises/apiServises';
import { Container } from '../Container/Container';
import {  BoldText,  Text, ListItem, NoInfo } from './Reviews.styled';

const Rewiews = () => {
  const { movieId } = useParams();
  const [isMoviesLoading, setIsMoviesLoading] = useState(true);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
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
  if (reviews.length === 0) { return <NoInfo>There is no information</NoInfo>}
  return (
    <Container>
      <ul>
        {reviews.map(review => {
          return (
            <ListItem key={`${review.id}`}>
              <BoldText>{review.author}</BoldText>
              <Text>{review.content}</Text>
              <Text>{review.created_at}</Text>
            </ListItem>
          );
        })}
      </ul>
    </Container>
  );
};

export default Rewiews;
