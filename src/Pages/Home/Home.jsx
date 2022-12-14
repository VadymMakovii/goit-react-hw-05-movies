
import { TrendingList } from 'components/TrendingList/TrendingList';
import { Box } from 'components/Box/Box';

export const Home = () => {
  return (
    <Box display="grid" gridGap={3} pl={3}>
      <Box as="h1" m={0} fontSize="xxl" fontWeight="bold">Trendig today</Box>
      <TrendingList />
    </Box>
  );
};
