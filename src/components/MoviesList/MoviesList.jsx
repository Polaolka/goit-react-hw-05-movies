import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Loader } from '../Loader/Loader';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { LiFilm, Ol } from './MovieList.styled';

const StyledLink = styled(NavLink)`
  font-size: 20px;
  color: rgb(196, 175, 175);
  text-decoration: none;
  line-height: 1.5;
  &:hover {
    cursor: pointer;
    color: #ffffff;
  }
  &.active {
    color: #ffffff;
    
  }
`;

const MoviesList = ({ handleFormSubmit, queryName, isMoviesLoading, movies, location }) => {
  return (
    <div>
      <SearchForm onSubmit={handleFormSubmit} query={queryName} />
      {isMoviesLoading && <Loader />}
      <Ol>
        {movies.map(movie => {
          return (
            <LiFilm key={`${movie.id}`}>
              <StyledLink to={`${movie.id}`} state={{ from: location }}>
                {movie.original_title}
              </StyledLink>
            </LiFilm>
          );
        })}
      </Ol>
    </div>
  );
};
export default MoviesList;