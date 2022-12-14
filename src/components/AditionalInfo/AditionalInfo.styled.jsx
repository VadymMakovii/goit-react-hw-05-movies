import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SecondaryTitle = styled.h2`
  margin: ${p => p.theme.space[0]}px;
  font-size: ${p => p.theme.fontSizes.l};
`;

export const AditionalWrapper = styled.div`
  display: block;
  box-shadow: ${p => p.theme.shadows.bottom};
  padding-left: ${p => p.theme.space[4]}px;
`;

export const List = styled.ul`
  display: grid;
  gap: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[0]}px;
`;

export const Item = styled.li`
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Link = styled(NavLink)`
  color: ${p => p.theme.colors.primary};

  &.active {
    color: ${p => p.theme.colors.accent};
    text-decoration: none;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    text-decoration: none;
  }
`;
