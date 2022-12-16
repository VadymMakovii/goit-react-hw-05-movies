import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Item, ItemLink } from './TrendingItem.styled';

export const TrendingItem = ({ id, description }) => {
  const location = useLocation();
  return (
    <Item>
      <ItemLink to={`/movies/${id}`} state={{from: location}}>{description}</ItemLink>
    </Item>
  );
};

TrendingItem.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
