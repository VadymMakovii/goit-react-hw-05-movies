import { lazy, Suspense } from 'react';
import { toast } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { SearchForm } from 'components/SearchForm/SearchForm';

const SearchMovies = lazy(() => import('components/SearchMovies/SearchMovies'));

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const request = searchParams.get('query') ?? '';

  const formSubmitHandler = query => {
    if (request === query) {
      return toast('You make the same requests. Please enter a new request!');
    }
    setSearchParams({ query });
  };

  return (
    <Box pl={3}>
      <SearchForm onSubmit={formSubmitHandler} />
      {request && (
        <Suspense fallback={null}>
          <SearchMovies query={request} />
        </Suspense>
      )}
    </Box>
  );
};

export default Movies;
