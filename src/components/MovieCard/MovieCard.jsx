import PropTypes from 'prop-types';
import {
  ContentWrapper,
  Poster,
  DescriptionWrapper,
  MovieTitle,
  Content,
  SecondaryTitle,
} from './MovieCard.styled';

export const MovieCard = ({
  poster,
  description,
  title,
  score,
  overview,
  genres,
}) => {
  return (
    <ContentWrapper>
      <Poster src={poster} alt={description} />
      <DescriptionWrapper>
        <MovieTitle>{title}</MovieTitle>
        <Content>{`User score: ${score}`}</Content>
        <SecondaryTitle>Overview</SecondaryTitle>
        <Content>{overview}</Content>
        <SecondaryTitle>Genres</SecondaryTitle>
        <Content>{genres}</Content>
      </DescriptionWrapper>
    </ContentWrapper>
  );
};

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
};
