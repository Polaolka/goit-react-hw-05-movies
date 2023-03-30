import { useState, useEffect } from 'react';
import { Loader } from '../components/Loader/Loader';
import { Gallery } from '../components/Gallery/Gallery';
import { fetchTrendingMovies } from '../apiServises/apiServises';
import { toast } from 'react-toastify';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';

const Home = () => {
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setIsMoviesLoading(true);
    async function fetchData() {
      window.scrollTo(0, 0);
      const response = await fetchTrendingMovies(page);
      console.log(response);
      setMovies(s => [...response.movies]);
      setTotalPage(response.totalPage);
      console.log(response.movies);
      setIsMoviesLoading(false);
      setTotalPage(response.totalPage);
      if (page === response.totalPage && response.totalPage > 1)
        toast(`this is the last page`);
    }
    fetchData();
  }, [page]);

  // HTTP запит у useEffect, []
  const handleLoadMore = () => {
    setPage(s => (s += 1));
  };
  return (
    <div>
      {totalPage > 0 && <Gallery movies={movies} />}
      {isMoviesLoading && <Loader />}
      {totalPage > 0 && page < totalPage && (
          <LoadMoreBtn onloadMore={handleLoadMore} />
        )}
    </div>
  );
};
export default Home;
