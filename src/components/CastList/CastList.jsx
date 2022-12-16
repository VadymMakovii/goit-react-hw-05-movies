import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/movie-api';
import { CastItem } from 'components/CastItem/CastItem';
import { List } from './CastList.styled';
import { CastLoader } from 'components/Loader/Loader';
import { Box } from 'components/Box/Box';

const CastList = () => {
  const { movieId } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    async function fetchInfo() {
      try {
        const response = await getMovieCredits(movieId, {
          signal: controller.signal,
        });

        const results = response.cast.map(
          ({ id, name, character, profile_path }) => ({
            id,
            name,
            character,
            photo: profile_path
              ? `https://image.tmdb.org/t/p/w300/${profile_path}`
              : 'https://image.tmdb.org/t/p/w300/hVv5NHtoCvIPX7V4eYTj78cEzdF.jpg',
          })
        );
        setData(results);
      } catch (error) {
        toast.error(`${error.massage}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchInfo();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  if (data?.length < 1) {
    return (
      <Box as="p" pl={4} m={0}>
        We don't have cast for this movie
      </Box>
    );
  }

  return (
    <Box pl={4}>
      {data && (
        <List>
          {data.map(({ id, name, character, photo }) => (
            <CastItem
              key={id}
              photo={photo}
              name={name}
              character={character}
            />
          ))}
        </List>
      )}
      {isLoading && <CastLoader />}
    </Box>
  );
};

export default CastList;
