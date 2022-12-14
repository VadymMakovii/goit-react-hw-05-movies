import styled from 'styled-components';

export const Card = styled.div`
  display: grid;
  grid-gap: ${p => p.theme.space[3]}px;
`;

export const Photo = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const Name = styled.h3`
  margin: ${p => p.theme.space[0]}px;
`;

export const Character = styled.p`
  margin: ${p => p.theme.space[0]}px;
`;
