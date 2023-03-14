import { DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';
import { Theme } from './helpers';
import { PaddingTypes } from '../components/layout/Padbox/Padbox.enums';
import { SpaceSize } from '../theme/space.types';
export declare type PaddingType = typeof PaddingTypes[keyof typeof PaddingTypes];
declare type PaddingSpaceProps = {
    paddingType: PaddingType;
    paddingSize: SpaceSize;
};
declare type GetPaddingSpaceArgs = PaddingSpaceProps & {
    theme: DefaultTheme;
};
export declare const getPaddingSpace: ({ paddingSize, paddingType, theme, }: GetPaddingSpaceArgs) => [number, number] | [number];
export declare const createPadding: any;
export declare const createSpacing: any;
export declare const createMarginSpacing: any;
export declare const createPaddingSpacing: any;
export declare const createSpacings: ({ margin, padding, }: Theme) => FlattenSimpleInterpolation;
export {};
