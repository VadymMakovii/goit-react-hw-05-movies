import PropTypes from 'prop-types';
import { Item, ItemLink } from './SearchMovieItem.styled';

export const SearchMovieItem = ({ id, description }) => {
  return (
    <Item>
      <ItemLink to={`/movies/${id}`}>{description}</ItemLink>
    </Item>
  );
};

SearchMovieItem.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
