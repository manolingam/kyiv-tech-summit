import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  base: '320px',
  md: '620px',
  lg: '1020px'
});

const colors = {};

const fonts = {
  figTree: "'Figtree', sans-serif",
  openSans: "'Open Sans', sans-serif"
};

export const theme = extendTheme({
  colors,
  fonts,
  breakpoints
});
