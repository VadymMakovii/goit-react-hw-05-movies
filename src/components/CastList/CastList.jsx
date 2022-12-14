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
    async function fetchInfo() {
      try {
        const response = await getMovieCredits(movieId);

        const results = response.cast.map(
          ({ id, name, character, profile_path }) => ({
            id,
            name,
            character,
            photo: profile_path
              ? `https://image.tmdb.org/t/p/w300/${profile_path}`
              : 'https://stuki-druki.com/biofoto4/alexey-arestovich-01.jpg',
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
  }, [movieId]);

  return (
    <Box pl={4}>
      {data && (
        <List>
          {data.map(({ id, name, character, photo }) => (
            <CastItem key={id} photo={photo} name={name} character={character} />
          ))}
        </List>
      )}
      {isLoading && (<CastLoader />)}
    </Box>
  );
};

export default CastList;

