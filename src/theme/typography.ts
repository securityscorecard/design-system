import type { colors } from './colors';
import type {
  Family,
  LineHeight,
  Links,
  Margin,
  Size,
  Typography,
  Weight,
} from './typography.types';

import { pxToRem } from '../utils';
import { BASE_FONT_SIZE, BASE_LINE_HEIGHT } from './constants';

const family: Family = {
  base: "Inter, Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif",
  mono: "'Space Mono', 'Courier New', Courier, monospace",
};

const size: Size = {
  h1: pxToRem(BASE_FONT_SIZE * 2), // 32px
  h2: pxToRem(BASE_FONT_SIZE * 1.75), // 28px
  h3: pxToRem(BASE_FONT_SIZE * 1.5), // 24px
  h4: pxToRem(BASE_FONT_SIZE * 1.25), // 20px
  h5: pxToRem(BASE_FONT_SIZE * 1.125), // 18px
  lg: pxToRem(BASE_FONT_SIZE), // 16px
  md: pxToRem(BASE_FONT_SIZE * 0.875), // 14px
  sm: pxToRem(BASE_FONT_SIZE * 0.75), // 12px, TO BE DEPRECATED
};

const weight: Weight = {
  light: 400,
  regular: 400,
  medium: 500,
  semibold: 500,
  bold: 700,
};

const lineHeight: LineHeight = {
  xxl: '1.25',
  xl: '1.25',
  lg: '1.5',
  md: '1.5',
  h4: '1.25',
};

const margin: Margin = {
  heading: {
    h1: {
      top: pxToRem(BASE_LINE_HEIGHT * 5), // 100px
      bottom: pxToRem(BASE_LINE_HEIGHT * 2.5), // 50px
    },
    h2: {
      top: pxToRem(BASE_LINE_HEIGHT * 4), // 80px
      bottom: pxToRem(BASE_LINE_HEIGHT * 2), // 40px
    },
    h3: {
      top: pxToRem(BASE_LINE_HEIGHT * 3), // 60px
      bottom: pxToRem(BASE_LINE_HEIGHT * 1.5), // 30px
    },
    h4: {
      top: pxToRem(BASE_LINE_HEIGHT * 2), // 40px
      bottom: pxToRem(BASE_LINE_HEIGHT), // 20px
    },
    h5: {
      top: pxToRem(BASE_LINE_HEIGHT * 2), // 40px
      bottom: pxToRem(BASE_LINE_HEIGHT), // 20px
    },
  },
  paragraph: {
    bottom: pxToRem(BASE_LINE_HEIGHT * 0.5), // 10px
  },
};

const createLinks = (themeColors: typeof colors): Links => ({
  primary: {
    color: themeColors.primary[600],
    hoverColor: themeColors.primary[800],
    activeColor: themeColors.primary[600],
    focusBgColor: themeColors.primary[50],
    decoration: 'underline',
  },
  secondary: {
    color: themeColors.neutral[1000],
    hoverColor: themeColors.neutral[800],
    activeColor: themeColors.neutral[1000],
    focusBgColor: themeColors.neutral[200],
    decoration: 'underline',
  },
});

export const createTypography = (themeColors: typeof colors): Typography => ({
  family,
  size,
  weight,
  lineHeight,
  margin,
  links: createLinks(themeColors),
});
