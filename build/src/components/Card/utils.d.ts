import { CardWrapperPropsWithTheme } from './Card.types';
export declare const getCommonMargin: ({ $direction, paddingSize, theme, }: CardWrapperPropsWithTheme) => string;
export declare const getMarginFrom: (origin: 'start' | 'end') => ({ $direction, paddingSize, theme }: CardWrapperPropsWithTheme) => string;
