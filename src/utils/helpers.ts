import type {
  Family as FontFamily,
  Size as FontSize,
  Weight as FontWeight,
  LineHeight,
} from '../theme/typography.types';
import type { Color } from '../theme/colors.types';
import type { Forms } from '../theme/forms.types';
import type { SpacingSizeValue } from '../types/spacing.types';
import type { Depths } from '../theme/depths.types';
import type { SpaceSize } from '../theme/space.types';
import type { createRadii } from '../theme/radii';
import type { DefaultTheme } from 'styled-components';
import type { createTokens } from '../theme/tokens';

import { css } from 'styled-components';
import numeral from 'numeral';
import { ensureArray, isString, list } from 'ramda-adjunct';
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

import { BASE_FONT_SIZE } from '../theme/constants';
import { ColorTypes } from '../theme/colors.enums';

export type ThemeType = {
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
type GetColor = {
  (color: Color, { theme }: ThemeType): string;
  (color: Color): ({ theme }: ThemeType) => string;
};
export const getColor: GetColor = curry(
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
export const getFontFamily = curry(
  (family: keyof FontFamily, { theme }: ThemeType): string =>
    path(['typography', 'family', family], theme),
);

// getFontWeight :: Weight -> Props -> number
// Weight - any key of 'weight' (src/theme/typography.ts)
// Props - styled-components props object
export const getFontWeight = curry(
  (weight: keyof FontWeight, { theme }: ThemeType): string =>
    path(['typography', 'weight', weight], theme),
);

// getFontSize :: Size -> Props -> string
// Size - any key of 'size' (src/theme/typography.ts)
// Props - styled-components props object
export const getFontSize = curry(
  (size: keyof FontSize, { theme }: ThemeType): string =>
    path(['typography', 'size', size], theme),
);

// getLineHeight :: Size -> Props -> string
// Size - any key of 'lineHeight' (src/theme/typography.ts)
// Props - styled-components props object
export const getLineHeight = curry(
  (size: keyof LineHeight, { theme }: ThemeType): string =>
    path(['typography', 'lineHeight', size], theme),
);

// getRadii :: Type -> Props -> string
// Type - any key of 'radii' (src/theme/radii.ts)
// Props - styled-components props object
export const getRadii = curry(
  (type: keyof ReturnType<typeof createRadii>, { theme }: ThemeType): string =>
    path(['radii', type], theme),
);

// getFormStyle :: Property -> Props -> string
// Property - any key of 'forms' (src/theme/forms.ts)
// Props - styled-components props object
export const getFormStyle = curry((property: keyof Forms, { theme }): string =>
  path(['forms', property], theme),
);

// getDepth :: Element -> Props -> string
// Element - any key of 'depth' (src/theme/depths.ts)
// Props - styled-components props object
export const getDepth = curry(
  (element: keyof Depths, { theme }: ThemeType): string =>
    path(['depths', element], theme),
);

// getSpace:: Size -> Props -> string
// Size - any key of 'space' (src/theme/space.ts)
// Props - styled-components props object
export const getSpace = curry((size: SpaceSize, { theme }: ThemeType): string =>
  pipe(path(['space', size]), pxToRem)(theme),
);

// getNegativeSpace:: Size -> Props -> string
// Size - any key of 'space' (src/theme/space.ts)
// Props - styled-components props object
export const getNegativeSpace = curry(
  (size: SpaceSize, { theme }: ThemeType): string =>
    pipe(path(['space', size]), negate, pxToRem)(theme),
);

// getToken:: String -> Token
export const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

type Tokens = keyof ReturnType<typeof createTokens>;
type GetToken = {
  (name: Tokens, { theme }: ThemeType): string;
  (name: Tokens): ({ theme }: ThemeType) => string;
};
export const getToken: GetToken = curry((name, { theme }: ThemeType): string =>
  path(['tokens', name])(theme),
);

export const abbreviateNumber = (value: number): string =>
  numeral(value).format('0.[00]a').toUpperCase();

export const getShadow = () => 'box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.07);';

const getBreakpointQuery = (value) => `@media screen and (min-width: ${value})`;

const getBreakpoint = (i, theme) => getBreakpointQuery(theme.breakpoints[i]);

export const parseResponsiveStylesArrayNotation = (
  cssProperty,
  responsiveProperty,
  parser,
  props,
) => {
  const { theme } = props;
  const sx = ensureArray(props[responsiveProperty]).map((value, i) => {
    if (value === null) return undefined;
    if (i === 0) {
      return css`
        ${cssProperty}: ${parser(value, props)};
      `;
    }
    return css`
      ${getBreakpoint(i - 1, theme)} {
        ${cssProperty}: ${parser(value, props)};
      }
    `;
  });
  return sx;
};

export const parseResponsiveStylesObjectNotation = (
  cssProperty,
  responsiveProperty,
  parser,
  props,
) => {
  const { theme } = props;
  const value = props[responsiveProperty];
  const keys = Object.keys(value);
  return keys.map((key) => {
    const index = theme.breakpointsKeys.indexOf(key);
    return css`
      ${getBreakpointQuery(theme.breakpoints[index])} {
        ${cssProperty}: ${parser(value[key], props)};
      }
    `;
  });
};

export const parseResponsiveStyles =
  (cssProperty, responsiveProperty, parser) => (props) => {
    const value = props[responsiveProperty];
    return typeof value === 'object' && !Array.isArray(value)
      ? parseResponsiveStylesObjectNotation(
          cssProperty,
          responsiveProperty,
          parser,
          props,
        )
      : parseResponsiveStylesArrayNotation(
          cssProperty,
          responsiveProperty,
          parser,
          props,
        );
  };
