import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from '../apiServises/apiServises'
import { Loader } from '../components/Loader/Loader';

const Movies = () => {

  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [page, setPage] = useState(1);
  // const [totalPage, setTotalPage] = useState(0);
  const queryName = searchParams.get('query') ?? '';


  useEffect(() => {
    if (queryName === '') return;
    console.log(queryName);
      setIsMoviesLoading(true);
      async function fetchData() {
        const response = await fetchMoviesByName(page, queryName);
        console.log(response);
        setMovies(s => [...response.movies]);
        // setTotalPage(response.totalPage);
        console.log(response.movies);
        setIsMoviesLoading(false);
    
      //   setTotalPage(response.totalPage);
      //   if (page === response.totalPage && response.totalPage > 1)
      //     toast(`this is the last page`);
      }
      fetchData();
    }, [queryName, page]);

  const handleFormSubmit = (queryName) => {
    console.log(queryName);
    if (queryName === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: queryName.toLowerCase() });
  };


  return (
    <div>
      <SearchForm onSubmit={handleFormSubmit} query={queryName}/>
      {isMoviesLoading && <Loader />}
      <ul>
        {movies.map(movie => {
          return (
            <li key={`${movie.id}`}> 
              <Link
                to={`${movie.id}`}
                state={{ from: location }}
              >{movie.original_title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Movies;
