import { useLocation } from 'react-router-dom';
import { AditionalWrapper, SecondaryTitle, List, Item, Link } from './AditionalInfo.styled';

export const AditionalInfo = () => {
  const location = useLocation();
  return (
    <AditionalWrapper>
      <SecondaryTitle>Aditional information</SecondaryTitle>
      <List>
        <Item>
          <Link to="cast" state={location.state}>Cast</Link>
        </Item>
        <Item>
          <Link to="reviews"state={location.state}>Reviews</Link>
        </Item>
      </List>
    </AditionalWrapper>
  );
};
