import type { ColorTypes } from './colors.enums';

export type Color = typeof ColorTypes[keyof typeof ColorTypes];
export type Colors = Record<Color, string>;
