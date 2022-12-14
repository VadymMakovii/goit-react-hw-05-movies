import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: grid;
  grid-template:
    'link link'
    'poster description' / auto 1fr;
  gap: ${p => p.theme.space[3]}px;
  box-shadow: ${p => p.theme.shadows.bottom};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
`;

export const DescriptionWrapper = styled.div`
  grid-area: description;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const GoBackLink = styled(Link)`
  grid-area: link;
  color: ${p => p.theme.colors.primary};

  &:hover,
  &:focus-visible {
    text-decoration: none;
    color: ${p => p.theme.colors.accent};
  }
`;

export const Poster = styled.img`
  grid-area: poster;
  display: block;
  max-width: 100%;
  height: auto;
`;

export const MovieTitle = styled.h1`
  margin: ${p => p.theme.space[0]}px;
  font-size: ${p => p.theme.fontSizes.xxl};
`;

export const SecondaryTitle = styled.h2`
  margin: ${p => p.theme.space[0]}px;
  font-size: ${p => p.theme.fontSizes.l};
`;

export const Content = styled.p`
  margin: ${p => p.theme.space[0]}px;
`;
