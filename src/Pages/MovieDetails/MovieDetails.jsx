
import { AditionalInfo } from 'components/AditionalInfo/AditionalInfo';
import { Box } from 'components/Box/Box';
import { MovieCardLoader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useState, useEffect, Suspense } from 'react';
import { toast } from 'react-hot-toast';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/movie-api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchMovies() {
      try {
        const response = await getMovieDetails(movieId);
        const {
          id,
          title,
          overview,
          poster_path,
          vote_average,
          genres,
          release_date,
        } = response;

        const results = {
          id: id.toString(),
          title: `${title} (${new Date(release_date).getFullYear()})`,
          overview,
          poster: `https://image.tmdb.org/t/p/w300/${poster_path}`,
          poster_alt: `Poster of movie ${title}`,
          score: `${(vote_average * 10).toFixed(0)}%`,
          genres: genres.map(genre => genre.name).join(', '),
        };

        setMovie(results);
      } catch (error) {
        toast.error(`${error.massage}`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [movieId]);

  return (
    <>
      {movie && (
        <Box display="grid" gridGap={3}>
          <MovieCard
            poster={movie.poster}
            description={movie.poster_alt}
            title={movie.title}
            score={movie.score}
            overview={movie.overview}
            genres={movie.genres}
          />
          <AditionalInfo />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Box>
      )}
      {isLoading && <MovieCardLoader />}
    </>
  );
};

export default MovieDetails;
