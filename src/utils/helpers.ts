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
import {
  Family as FontFamily,
  Size as FontSize,
  Weight as FontWeight,
  LineHeight,
} from '../theme/typography.types';
import { Color } from '../theme/colors.types';
import { Forms } from '../theme/forms.types';
import { SpacingSizeValue } from '../types/spacing.types';
import { Depths } from '../theme/depths.types';
import { SpaceSize } from '../theme/space.types';
import { Buttons } from '../theme/buttons.types';
import { ColorTypes } from '../theme/colors.enums';
import { createRadii } from '../theme/radii';
import { createTokens } from '../theme/tokens';

export type Theme = {
  theme?: DefaultTheme;
  margin?: SpacingSizeValue;
  padding?: SpacingSizeValue;
};

const convertValueToRem = memoizeWith(
  identity,
  unless(isString, (px) => `${px / BASE_FONT_SIZE}rem`),
);

// pxToRem :: (number | string)... -> string
export const pxToRem = pipe(list, map(convertValueToRem), join(' '));

// https://github.com/ramda/ramda/wiki/Cookbook#derivative-of-rprops-for-deep-fields
// This useWith is not hook :D
// eslint-disable-next-line react-hooks/rules-of-hooks
const dotPath = useWith(path, [split('.')]);
// getColor :: Color -> Props -> string
// Color - any key of 'ColorTypes' (src/theme/colors.enums.ts)
// Props - styled-components props object
export const getColor = curry((color: Color, { theme }: Theme): string => {
  return either(
    dotPath(`colors.${color}`),
    dotPath(`colors.${ColorTypes[color]}`),
  )(theme);
});

// getFontFamily :: Family -> Props -> string
// Family - any key of 'family' (src/theme/typography.ts)
// Props - styled-components props object
export const getFontFamily = curry(
  (family: keyof FontFamily, { theme }: Theme): string =>
    path(['typography', 'family', family], theme),
);

// getFontWeight :: Weight -> Props -> number
// Weight - any key of 'weight' (src/theme/typography.ts)
// Props - styled-components props object
export const getFontWeight = curry(
  (weight: keyof FontWeight, { theme }: Theme): string =>
    path(['typography', 'weight', weight], theme),
);

// getFontSize :: Size -> Props -> string
// Size - any key of 'size' (src/theme/typography.ts)
// Props - styled-components props object
export const getFontSize = curry(
  (size: keyof FontSize, { theme }: Theme): string =>
    path(['typography', 'size', size], theme),
);

// getLineHeight :: Size -> Props -> string
// Size - any key of 'lineHeight' (src/theme/typography.ts)
// Props - styled-components props object
export const getLineHeight = curry(
  (size: keyof LineHeight, { theme }: Theme): string =>
    path(['typography', 'lineHeight', size], theme),
);

// getRadii :: Type -> Props -> string
// Type - any key of 'radii' (src/theme/radii.ts)
// Props - styled-components props object
export const getRadii = curry(
  (type: keyof ReturnType<typeof createRadii>, { theme }: Theme): string =>
    path(['radii', type], theme),
);

// getFormStyle :: Property -> Props -> string
// Property - any key of 'forms' (src/theme/forms.ts)
// Props - styled-components props object
export const getFormStyle = curry((property: keyof Forms, { theme }): string =>
  path(['forms', property], theme),
);

// getButtonHeight :: Size -> Props -> string
// Size - any key of 'heights' (src/theme/buttons.ts)
// Props - styled-components props object
export const getButtonHeight = curry(
  (size: keyof Buttons['heights'], { theme }: Theme) =>
    path(['buttons', 'heights', size], theme),
);

// getDepth :: Element -> Props -> string
// Element - any key of 'depth' (src/theme/depths.ts)
// Props - styled-components props object
export const getDepth = curry(
  (element: keyof Depths, { theme }: Theme): string =>
    path(['depths', element], theme),
);

// getSpace:: Size -> Props -> string
// Size - any key of 'space' (src/theme/space.ts)
// Props - styled-components props object
export const getSpace = curry((size: SpaceSize, { theme }: Theme): string =>
  pipe(path(['space', size]), pxToRem)(theme),
);

// getNegativeSpace:: Size -> Props -> string
// Size - any key of 'space' (src/theme/space.ts)
// Props - styled-components props object
export const getNegativeSpace = curry(
  (size: SpaceSize, { theme }: Theme): string =>
    pipe(path(['space', size]), negate, pxToRem)(theme),
);

// getToken:: String -> Token
export const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const getToken = curry(
  (name: keyof ReturnType<typeof createTokens>, { theme }: Theme): string =>
    path(['tokens', name])(theme),
);

export const abbreviateNumber = (value: number): string =>
  numeral(value).format('0.[00]a').toUpperCase();

export const getShadow = () => 'box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.07);';
