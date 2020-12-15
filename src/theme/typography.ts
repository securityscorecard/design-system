import colors from './colors';
import { pxToRem } from '../utils/helpers';
import {
  Family,
  LineHeight,
  Links,
  Margin,
  Size,
  Typography,
  Weight,
} from './typography.types';
import { BASE_FONT_SIZE, BASE_LINE_HEIGHT } from './constants';

const family: Family = {
  base:
    "'proxima-nova', 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif",
  mono: "'space-mono', 'Courier New', Courier, monospace",
};

const size: Size = {
  h0: pxToRem(BASE_FONT_SIZE * 2.625), // 42px
  h1: pxToRem(BASE_FONT_SIZE * 2.25), // 36px
  h2: pxToRem(BASE_FONT_SIZE * 1.875), // 30px
  h3: pxToRem(BASE_FONT_SIZE * 1.5), // 24px
  h4: pxToRem(BASE_FONT_SIZE * 1.125), // 18px
  lg: pxToRem(BASE_FONT_SIZE * 0.9375), // 15px
  md: pxToRem(BASE_FONT_SIZE * 0.8125), // 13px
  sm: pxToRem(BASE_FONT_SIZE * 0.6875), // 11px
  xs: pxToRem(BASE_FONT_SIZE * 0.625), // 10px
};

const weight: Weight = {
  light: 200,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const lineHeight: LineHeight = {
  xxxl: pxToRem(BASE_LINE_HEIGHT * 2.5), // 50px
  xxl: pxToRem(BASE_LINE_HEIGHT * 2), // 40px
  xl: pxToRem(BASE_LINE_HEIGHT * 1.5), // 30px
  lg: pxToRem(BASE_LINE_HEIGHT), // 20px
  md: pxToRem(BASE_LINE_HEIGHT * 0.75), // 15px
  sm: pxToRem(BASE_LINE_HEIGHT * 0.5), // 10px
};

const margin: Margin = {
  heading: {
    h0: {
      top: pxToRem(BASE_LINE_HEIGHT * 6), // 120px
      bottom: pxToRem(BASE_LINE_HEIGHT * 3), // 60px
    },
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
  },
  paragraph: {
    bottom: pxToRem(BASE_LINE_HEIGHT * 0.5), // 10px
  },
};

const links: Links = {
  primary: {
    color: colors.blueberryClassic,
    hoverColor: colors.radiantBlueberry,
    activeColor: colors.dietBlueberry,
    decoration: 'none',
  },
  danger: {
    color: colors.cherry,
    hoverColor: colors.strawberry,
    activeColor: colors.pumpkin,
    decoration: 'none',
  },
  secondary: {
    color: colors.graphite2B,
    hoverColor: colors.radiantBlueberry,
    activeColor: colors.dietBlueberry,
    decoration: 'underline',
  },
};

const typography: Typography = {
  family,
  size,
  weight,
  lineHeight,
  margin,
  links,
};

export default typography;
