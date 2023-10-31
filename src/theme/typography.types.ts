import type { HeadingSizesTypes as HeadingSizes } from '../components/typographyLegacy/Heading/Heading.types';

export interface Family {
  base: string;
  mono: string;
}

export interface Size {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  lg: string;
  md: string;
  sm: string;
}

export interface Weight {
  light: number;
  regular: number;
  medium: number;
  semibold: number;
  bold: number;
}

export interface LineHeight {
  xxl: string;
  xl: string;
  lg: string;
  md: string;
  h4: string;
}

type MarginValue = {
  vertical?: string;
  horizontal?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

export interface Margin {
  heading: Record<HeadingSizes, MarginValue>;
  paragraph: MarginValue;
}

export interface LinkColors {
  color: string;
  hoverColor: string;
  activeColor: string;
  focusBgColor: string;
  decoration: string;
}
export interface Links {
  primary: LinkColors;
  secondary: LinkColors;
}

export interface Typography {
  family: Family;
  size: Size;
  weight: Weight;
  lineHeight: LineHeight;
  margin: Margin;
  links: Links;
}
