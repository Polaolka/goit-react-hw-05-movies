import Home from 'Pages/Home';
import MovieDetails from 'Pages/MovieDetails';
import Movies from 'Pages/Movies';
import { Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import Layout from './Layout/Layout';
import Rewiews from './Reviews/Reviews';


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:moviesId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Rewiews/>} />
        </Route>
      </Route>
    </Routes>
  );
};
