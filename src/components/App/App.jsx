import { CastList } from 'components/CastList/CastList';
import { Reviews } from 'components/Reviews/Reviews';
import { Home } from 'Pages/Home/Home';
import { MoviePage } from 'Pages/MoviePage/MoviePage';
import { Movies } from 'Pages/Movies/Movies';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Box } from 'components/Box/Box';

export const App = () => {
  
  return (
    <Box display="grid" gridGap={3}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home/>} />
          <Route path="movies" element={<Movies/>} />
          <Route path='movies/:movieId' element={<MoviePage />}>
            <Route path="cast" element={<CastList/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
        </Route>
      </Routes>
      <Toaster position="top-center" />
   </Box>
  );
};

