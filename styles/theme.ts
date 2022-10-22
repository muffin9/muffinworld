import { Theme } from '@emotion/react';

const calcRem = (size: number): string => `${size / 16}rem`;

const colors = {
  blue: '#55B2D4',
  yellow: '#FFC900',
  pink: '#EE3E61',
  red: '#FF0000',
  darkGray: '#666666',
  gray: '#999999',
  lightGray: '#D7DEE2',
  sliver: '#DDDDDD',
  lightSliver: '#D9D9D9',
};

const fontSize = {
  xs: calcRem(12),
  sm: calcRem(16),
  md: calcRem(18),
  lg: calcRem(24),
  display: calcRem(32),
};

const theme: Theme = {
  colors,
  fontSize,
};

export default theme;
