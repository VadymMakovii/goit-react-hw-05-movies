import { Box } from 'components/Box/Box';
import { AppNav, NavItem } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <Box as="header" p={3} fontSize="l" boxShadow="bottom">
      <AppNav>
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </AppNav>
    </Box>
  );
};
