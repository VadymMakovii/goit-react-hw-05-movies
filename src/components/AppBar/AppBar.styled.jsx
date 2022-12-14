import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AppNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
`;

export const NavItem = styled(NavLink)`
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;

  &.active {
    color: ${p => p.theme.colors.accent};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    text-decoration: underline;
  }
`;
