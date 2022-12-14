import { AditionalWrapper, SecondaryTitle, List, Item, Link } from './AditionalInfo.styled';

export const AditionalInfo = () => {
  return (
    <AditionalWrapper>
      <SecondaryTitle>Aditional information</SecondaryTitle>
      <List>
        <Item>
          <Link to="cast">Cast</Link>
        </Item>
        <Item>
          <Link to="reviews">Reviews</Link>
        </Item>
      </List>
    </AditionalWrapper>
  );
};
