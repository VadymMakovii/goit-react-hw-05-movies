import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSearchMovies } from 'services/movie-api';
import toast from 'react-hot-toast';
import { List } from './SearchMovies.styled';
import { SearchMovieItem } from 'components/SearchMovieItem/SearchMovieItem';
import { SearcMoviesLoader } from 'components/Loader/Loader';
import { Box } from 'components/Box/Box';

const SearchMovies = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchMovies() {
      try {
        const response = await getSearchMovies(query);
        response.results.length < 1 &&
          toast.error(
            'Sorry, there are no movies matching your search query. Please try again.'
          );

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
  }, [query]);

  return (
    <Box pt={3}>
      {movies && (
        <List>
          {movies.map(({ id, title }) => (
            <SearchMovieItem key={id} id={id} description={title} />
          ))}
        </List>
      )}
      {isLoading && <SearcMoviesLoader />}
    </Box>
  );
};

SearchMovies.propTypes = {
  query: PropTypes.string.isRequired,
};


export default SearchMovies;