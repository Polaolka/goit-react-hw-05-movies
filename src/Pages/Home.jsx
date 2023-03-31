import { useState, useEffect } from 'react';
import { Loader } from '../components/Loader/Loader';
import { Gallery } from '../components/Gallery/Gallery';
import { fetchTrendingMoviesDay } from '../apiServises/apiServises';
import { fetchTrendingMoviesWeek } from '../apiServises/apiServises';
import { toast } from 'react-toastify';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import HomeSubheader from 'components/HomeSubheader/HomeSubheader';

const Home = () => {
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [movies, setMovies] = useState([]);
  const [isDayFetch, setIsDayFetch] = useState(true);

  useEffect(() => {
    setIsMoviesLoading(true);
    async function fetchData() {
      const response = isDayFetch? await fetchTrendingMoviesDay(page): await fetchTrendingMoviesWeek(page);
      if (page === 1) {
        setMovies(s => [...response.movies]);
      } else setMovies(s => [...s, ...response.movies]);
      setTotalPage(response.totalPage);
      setIsMoviesLoading(false);
      setTotalPage(response.totalPage);
      if (page === response.totalPage && response.totalPage > 1)
        toast(`this is the last page`);
    }
    fetchData();
  }, [page, isDayFetch]);
  const getDayData = () => {
    setIsDayFetch(true);
  };
  const getWeekData = () => {
    setIsDayFetch(false);
  };

  const handleLoadMore = () => {
    setPage(s => (s += 1));
  };
  return (
    <div>
      <HomeSubheader getDayData={getDayData} getWeekData={getWeekData} isDayFetch={isDayFetch}/>
      {totalPage > 0 && <Gallery movies={movies} />}
      {isMoviesLoading && <Loader />}
      {totalPage > 0 && page < totalPage && (
        <LoadMoreBtn onloadMore={handleLoadMore} />
      )}
    </div>
  );
};
export default Home;
