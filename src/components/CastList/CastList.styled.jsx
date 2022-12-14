import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  gap: ${p => p.theme.space[4]}px;
  list-style: none;
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
`;
