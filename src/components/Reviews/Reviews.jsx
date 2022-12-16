import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/movie-api';
import { toast } from 'react-hot-toast';
import { ReviewItem } from 'components/ReviewItem/ReviewItem';
import { Box } from 'components/Box/Box';
import { ReviewLoader } from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    async function fetchInfo() {
      try {
        const response = await getMovieReviews(movieId, {
          signal: controller.signal,
        });
        const results = response.results.map(({ id, author, content }) => ({
          id,
          author,
          content,
        }));

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
        We don't have any reviews for this movie
      </Box>
    );
  }

  return (
    <Box pl={4}>
      {data && (
        <Box as="ul" display="grid" gridGap={4} m={0} p={0}>
          {data.map(({ id, author, content }) => (
            <ReviewItem key={id} author={author} content={content} />
          ))}
        </Box>
      )}
      {isLoading && <ReviewLoader />}
    </Box>
  );
};

export default Reviews;
