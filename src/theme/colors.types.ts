import { ColorTypes, DeprecatedColorTypes } from './colors.enums';

export type DeprecatedColor = typeof DeprecatedColorTypes[number];

export type Color =
  | DeprecatedColor
  | typeof ColorTypes[keyof typeof ColorTypes];
export type Colors = Record<Color, string>;
