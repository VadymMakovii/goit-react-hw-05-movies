import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/movie-api';
import toast from 'react-hot-toast';
import { List } from './TrendingList.styled';
import { TrendingItem } from 'components/TrendingItem/TrendingItem';
import { MovieListLoader } from 'components/Loader/Loader';

export const TrendingList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchMovies() {
      try {
        const response = await getTrendingMovies();
        const results = response.results.map(({ id, title }) => ({
          id: id.toString(),
          title,
        }));
        setMovies(results);
      } catch (error) {
        toast.error(`${error.massage}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      {movies && (
        <List>
          {movies.map(({ id, title }) => (
            <TrendingItem key={id} id={id} description={title} />
          ))}
        </List>
      )}
      {isLoading && <MovieListLoader />}
    </>
  );
};
