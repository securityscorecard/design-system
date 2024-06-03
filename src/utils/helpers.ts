import { DefaultTheme } from 'styled-components';
import {
  curry,
  either,
  identity,
  join,
  map,
  memoizeWith,
  negate,
  path,
  pipe,
  split,
  unless,
  useWith,
} from 'ramda';
import { isString, list } from 'ramda-adjunct';
import numeral from 'numeral';

import { BASE_FONT_SIZE } from '../theme/constants';
import { Color } from '../theme/colors.types';
import { Forms } from '../theme/forms.types';
import { SpacingSizeValue } from '../types/spacing.types';
import { Depths } from '../theme/depths.types';
import { SpaceSize } from '../theme/space.types';
import { ColorTypes } from '../theme/colors.enums';
import { createRadii } from '../theme/radii';
import { createTokens } from '../theme/tokens';
import { createTypography } from '../theme/typography';

export type ThemeType = {
  theme?: DefaultTheme;
  margin?: SpacingSizeValue;
  padding?: SpacingSizeValue;
};

type HelperFn<Input, ReturnType = string> = {
  (input: Input, { theme }: ThemeType): ReturnType;
  (input: Input): ({ theme }: ThemeType) => ReturnType;
};

const convertValueToRem = memoizeWith(
  identity,
  unless(isString, (px) => `${px / BASE_FONT_SIZE}rem`),
);

// pxToRem :: (number | string)... -> string
export const pxToRem: (...px: Array<number | string>) => string = pipe(
  list,
  map(convertValueToRem),
  join(' '),
);

// https://github.com/ramda/ramda/wiki/Cookbook#derivative-of-rprops-for-deep-fields
// This useWith is not hook :D
// eslint-disable-next-line react-hooks/rules-of-hooks
const dotPath = useWith(path, [split('.')]);
// getColor :: Color -> Props -> string
// Color - any key of 'ColorTypes' (src/theme/colors.enums.ts)
// Props - styled-components props object
export const getColor: HelperFn<Color> = curry(
  (color: Color, { theme }: ThemeType): string => {
    return either(
      dotPath(`colors.${color}`),
      dotPath(`colors.${ColorTypes[color]}`),
    )(theme);
  },
);

// getFontFamily :: Family -> Props -> string
// Family - any key of 'family' (src/theme/typography.ts)
// Props - styled-components props object
type FontFamily = keyof ReturnType<typeof createTypography>['family'];
export const getFontFamily: HelperFn<FontFamily> = curry(
  (family: FontFamily, { theme }: ThemeType): string =>
    path(['typography', 'family', family], theme),
);

// getFontWeight :: Weight -> Props -> number
// Weight - any key of 'weight' (src/theme/typography.ts)
// Props - styled-components props object
type FontWeight = keyof ReturnType<typeof createTypography>['weight'];
export const getFontWeight: HelperFn<FontWeight> = curry(
  (weight: FontWeight, { theme }: ThemeType): string =>
    path(['typography', 'weight', weight], theme),
);

// getFontSize :: Size -> Props -> string
// Size - any key of 'size' (src/theme/typography.ts)
// Props - styled-components props object
type FontSize = keyof ReturnType<typeof createTypography>['size'];
export const getFontSize: HelperFn<FontSize> = curry(
  (size: FontSize, { theme }: ThemeType): string =>
    path(['typography', 'size', size], theme),
);

// getLineHeight :: Size -> Props -> string
// Size - any key of 'lineHeight' (src/theme/typography.ts)
// Props - styled-components props object
type LineHeight = keyof ReturnType<typeof createTypography>['lineHeight'];
export const getLineHeight: HelperFn<LineHeight> = curry(
  (size: LineHeight, { theme }: ThemeType): string =>
    path(['typography', 'lineHeight', size], theme),
);

export type Radii = keyof ReturnType<typeof createRadii>;
// getRadii :: Type -> Props -> string
// Type - any key of 'radii' (src/theme/radii.ts)
// Props - styled-components props object
export const getRadii: HelperFn<Radii> = curry(
  (type: Radii, { theme }: ThemeType): string => path(['radii', type], theme),
);

// getFormStyle :: Property -> Props -> string
// Property - any key of 'forms' (src/theme/forms.ts)
// Props - styled-components props object
export const getFormStyle: HelperFn<keyof Forms> = curry(
  (property: keyof Forms, { theme }): string =>
    path(['forms', property], theme),
);

// getDepth :: Element -> Props -> number
// Element - any key of 'depth' (src/theme/depths.ts)
// Props - styled-components props object
export const getDepth: HelperFn<keyof Depths, number> = curry(
  (element: keyof Depths, { theme }: ThemeType): number =>
    path(['depths', element], theme),
);

// getSpace:: Size -> Props -> number
// Size - any key of 'space' (src/theme/space.ts)
// Props - styled-components props object
export const getSpace: HelperFn<SpaceSize, number> = curry(
  (size: SpaceSize, { theme }: ThemeType): number =>
    pipe(path(['space', size]), pxToRem)(theme),
);

// getNegativeSpace:: Size -> Props -> number
// Size - any key of 'space' (src/theme/space.ts)
// Props - styled-components props object
export const getNegativeSpace: HelperFn<SpaceSize, number> = curry(
  (size: SpaceSize, { theme }: ThemeType): number =>
    pipe(path(['space', size]), negate, pxToRem)(theme),
);

// getToken:: String -> Token
export const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

type Tokens = keyof ReturnType<typeof createTokens>;
export const getToken: HelperFn<Tokens> = curry(
  (name, { theme }: ThemeType): string => path(['tokens', name])(theme),
);

export const abbreviateNumber = (value: number): string =>
  numeral(value).format('0.[00]a').toUpperCase();

export const getShadow = () => 'box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.07);';
