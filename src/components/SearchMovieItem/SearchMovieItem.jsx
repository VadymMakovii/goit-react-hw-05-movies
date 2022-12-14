import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Item, ItemLink } from './SearchMovieItem.styled';

export const SearchMovieItem = ({ id, description }) => {
 const location = useLocation();
  return (
    <Item>
      <ItemLink to={`/movies/${id}`} state={ {from: location}}>{description}</ItemLink>
    </Item>
  );
};

SearchMovieItem.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};