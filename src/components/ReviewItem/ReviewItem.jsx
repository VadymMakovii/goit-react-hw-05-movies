import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';

export const ReviewItem = ({ author, content }) => {
  return (
    <Box as="li">
      <Box display="grid" gridGap={3}>
        <Box as="h3" m={0}>{`Author: ${author}`}</Box>
        <Box as="p" m={0}>
          {content}
        </Box>
      </Box>
    </Box>
  );
};

ReviewItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
