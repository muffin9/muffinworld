import { Theme } from '@emotion/react';

const calcRem = (size: number): string => `${size / 16}rem`;

const colors = {};

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
