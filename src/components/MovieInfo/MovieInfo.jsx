import { useRef } from 'react';
import {
  LinkStyled,
  Wrapper,
  Line,
  Img,
  BoldText,
  Ul,
  LinkAddInfo,
  Text,
} from './MovieInfo.styled';
import defaultImage from '../../Img/defaultImage.png';

const MovieInfo = ({ movie, location }) => {
  const backLinkLocationRef = useRef(location?.state?.from ?? '/');
  const {
    original_title,
    overview,
    vote_average,
    release_date,
    tagline,
    backdrop_path,
    genres,
    runtime,
  } = movie;
  return (
    <>
      <LinkStyled to={backLinkLocationRef.current}>&#8592; Go back</LinkStyled>
      <Wrapper>
        <Img
          src={
            backdrop_path !== null
              ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
              : defaultImage
          }
          alt={original_title}
        />
        <div>
          <h2>{original_title}</h2>
          <div>
            <BoldText>Runtime:</BoldText> {runtime}
          </div>
          <div>
            <BoldText>User score:</BoldText> {vote_average}
          </div>
          <div>
            <BoldText>Release date:</BoldText> {release_date}
          </div>
          <div>
            <BoldText>Tagline:</BoldText> {tagline}
          </div>
          <div>
            <BoldText>Genres:</BoldText>

            {genres.map(genre => {
              return <Text key={`${genre.id}`}>{genre.name}</Text>;
            })}
          </div>
          <div>
            <BoldText>Overwiew:</BoldText>
            {overview}
          </div>
        </div>
      </Wrapper>
      <Line></Line>
      <Ul>
        <li>
          <LinkAddInfo to="cast">Actors</LinkAddInfo>
        </li>
        <li>
          <LinkAddInfo to="reviews">Reviews</LinkAddInfo>
        </li>
      </Ul>
      <Line></Line>
    </>
  );
};

export default MovieInfo;
