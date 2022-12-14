import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  list-style: inside;
  padding-left: ${p => p.theme.space[1]}px;
`;

export const ItemLink = styled(Link)`
  color: ${p => p.theme.colors.primary};

  &:hover,
  &:focus-visible {
    text-decoration: none;
    color: ${p => p.theme.colors.accent};
  }
`;
