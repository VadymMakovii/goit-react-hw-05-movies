import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import {Card, Photo, Name, Character} from './CastItem.styled'

export const CastItem = ({ photo, name, character }) => {
  return (
    <Box as="li">
      <Card>
        <Photo src={photo} alt={name} />
        <Name>{name}</Name>
        <Character>{`Character: ${character}`}</Character>
      </Card>
    </Box>
  );
};

CastItem.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};