import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Home } from 'Pages/Home/Home';
import { Box } from 'components/Box/Box';

const Movies = lazy(() => import('../../Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../../Pages/MovieDetails/MovieDetails'));
const CastList = lazy(() => import('../CastList/CastList'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <Box display="grid" gridGap={2} pb={3}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastList />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Toaster position="top-center" />
    </Box>
  );
};
