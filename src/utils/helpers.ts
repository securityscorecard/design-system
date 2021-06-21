import { DefaultTheme } from 'styled-components';
import {
  curry,
  identity,
  join,
  map,
  memoizeWith,
  path,
  pipe,
  unless,
} from 'ramda';
import { hasPath, isString, list } from 'ramda-adjunct';
import numeral from 'numeral';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { BASE_FONT_SIZE } from '../theme/constants';
import {
  Family as FontFamily,
  Size as FontSize,
  Weight as FontWeight,
  LineHeight,
} from '../theme/typography.types';
import { Colors } from '../theme/colors.types';
import { Forms } from '../theme/forms.types';
import { SpacingSizeValue } from '../types/spacing.types';
import { Depths } from '../theme/depths.types';
import space from '../theme/space';

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

// getColor :: Color -> Props -> string
// Color - any key of 'ColorTypes' (src/theme/colors.enums.ts)
// Props - styled-components props object
export const getColor = curry((color: keyof Colors, { theme }: Theme): string =>
  path(['colors', color], theme),
);

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

// getBorderRadius :: Props -> string
// Props - styled-components props object
export const getBorderRadius = pipe(
  path(['theme', 'borderRadius']),
  (radius) => `${radius}px`,
);

// getFormStyle :: Property -> Props -> string
// Property - any key of 'forms' (src/theme/forms.ts)
// Props - styled-components props object
export const getFormStyle = curry((property: keyof Forms, { theme }): string =>
  path(['forms', property], theme),
);

// getButtonColor :: Type -> Props -> string
// Type - type of color (src/theme/buttons.ts)
// Props - styled-components props object
export const getButtonColor = curry((type, { variant, color, theme }) => {
  if (hasPath(['buttons', variant, color], theme)) {
    return path(['buttons', variant, color, type], theme);
  }
  // eslint-disable-next-line no-console
  console.warn(
    `Desired color variant (variant: "${variant}", color: "${color}") is not currently implemented. Using "primary" color instead.`,
  );
  return path(['buttons', variant, 'primary', type], theme);
});

// getLinkStyle :: Type -> Props -> string
// Type - type of color / decoration
// Props - styled-components props object
export const getLinkStyle = curry((type, { color, theme }) => {
  if (hasPath(['typography', 'links', color], theme)) {
    return path(['typography', 'links', color, type], theme);
  }
  // eslint-disable-next-line no-console
  console.warn(
    `Desired color variant (color: "${color}") is not currently implemented. Using "primary" color instead.`,
  );
  return path(['typography', 'links', 'primary', type], theme);
});

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
export const getSpace = curry(
  (size: keyof typeof space, { theme }: Theme): string =>
    pipe(path(['space', size]), pxToRem)(theme),
);

export const abbreviateNumber = (value: number): string =>
  numeral(value).format('0.[00]a').toUpperCase();

export const timeDuration = (value: string): string => {
  dayjs.extend(relativeTime);
  const date = dayjs(value);
  const now = dayjs();

  // value is today
  if (date.isSame(now, 'day')) return 'Today';
  // value is in last 7 days
  if (date.isAfter(now.subtract(7, 'day'))) return date.format('dddd');
  return date.from(now, true);
};
