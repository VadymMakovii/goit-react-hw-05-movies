import { Box } from 'components/Box/Box';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { toast } from 'react-hot-toast';
import { Outlet, useSearchParams } from 'react-router-dom';

export const Movies = () => {
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
      {request  && <SearchMovies query={request} />}
      <Outlet />
    </Box>
  );
};
