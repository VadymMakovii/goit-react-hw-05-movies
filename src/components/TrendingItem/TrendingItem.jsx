import PropTypes from 'prop-types';
import { Item, ItemLink } from './TrendingItem.styled';

export const TrendingItem = ({ id, description }) => {
  return (
    <Item>
      <ItemLink to={`/movies/${id}`}>{description}</ItemLink>
    </Item>
  );
};

TrendingItem.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
