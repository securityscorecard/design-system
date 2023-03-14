import { ColorTypes } from './colors.enums';
export declare type Color = typeof ColorTypes[keyof typeof ColorTypes];
export declare type Colors = Record<Color, string>;
