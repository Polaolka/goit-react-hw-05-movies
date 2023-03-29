import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from 'Pages/Home';
import MovieDetails from 'Pages/MovieDetails';
import Movies from 'Pages/Movies';
import { Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import Layout from './Layout/Layout';
import Rewiews from './Reviews/Reviews';
import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

// import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Rewiews />} />
          </Route>
        </Route>
      </Routes>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <ToastContainer autoClose={2500} />
    </QueryClientProvider>
  );
};
