import { useEffect, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { fetchMoviesById } from '../../apiServises/apiServises';
import { LinkStyled, Wrapper, Line } from './MovieInfo.styled';

const MovieInfo = ({ movie, location }) => {
    console.log(movie);

    const backLinkLocationRef = useRef(location?.state?.from ?? '/');
     console.log(backLinkLocationRef.current);

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
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              alt={original_title}
            />
          </div>
          <div>
            <h2>{original_title}</h2>
            <div>{`Runtime: ${runtime}`}</div>
            <div>{`User score: ${vote_average}`}</div>
            <div>{`release date: ${release_date}`}</div>
            <div>{`Tagline: ${tagline}`}</div>
            <div>
              genres
              <ul>
                {genres.map(genre => {
                  return <li key={`${genre.id}`}>{genre.name}</li>;
                })}
              </ul>
            </div>
          </div>
          <div>
            Overwiew:
            <span>{overview}</span>
          </div>
        </Wrapper>
        <Line></Line>
        <ul>
          <li>
            <Link to="cast">Actors</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Line></Line>


      </>
    );
  };
  
  export default MovieInfo;