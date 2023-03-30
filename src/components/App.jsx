import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('../Pages/Home'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const Movies = lazy(() => import('../Pages/Movies'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Layout = lazy(() => import('../components/Layout/Layout'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={2500} />
    </>
  );
};
