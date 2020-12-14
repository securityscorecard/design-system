import {
  DefaultTheme,
  FlattenSimpleInterpolation,
  css,
} from 'styled-components';
import {
  any,
  anyPass,
  curry,
  equals,
  isEmpty,
  join,
  map,
  path,
  pipe,
  unless,
} from 'ramda';
import {
  hasPath,
  isNotUndefined,
  isNumber,
  isString,
  list,
} from 'ramda-adjunct';

import { BASE_FONT_SIZE, BASE_LINE_HEIGHT } from '../theme/constants';
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
import { FullscreenModalProps } from '../components/FullscreenModal/FullscreenModal.types';

type Theme = {
  theme?: DefaultTheme;
  margin?: SpacingSizeValue;
  padding?: SpacingSizeValue;
};

const converValueToRem = unless(
  anyPass([equals(0), isString]),
  (px) => `${px / BASE_FONT_SIZE}rem`,
);

// pxToRem :: (number | string)... -> string
export const pxToRem = pipe(list, map(converValueToRem), join(' '));

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
export const getFormStyle = (property: keyof Forms): string =>
  path(['theme', 'forms', property]);

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

// getModalSize :: Props -> string
// Props - styled-components props object
export const getModalSize = curry(
  ({ size, theme }: Theme & FullscreenModalProps): string =>
    pipe(path(['modals', 'size', size]), pxToRem)(theme),
);

type SpacingKind = 'padding' | 'margin';

const calculateSpacingValue = (direction: number, generic: number) =>
  pxToRem(BASE_LINE_HEIGHT * (isNumber(direction) ? direction : generic));

// createSpacing :: Kind -> Value -> string | string[]
// Kind - 'margin' or 'padding'
// Value - number or 'none' or object
export const createSpacing = curry(
  (kind: SpacingKind, value: SpacingSizeValue): string | string[] => {
    if (value === undefined || isEmpty(value)) {
      return undefined;
    }

    if (value === 'none') {
      return `${kind}: 0;`;
    }

    if (isNumber(value)) {
      return `${kind}: ${pxToRem(BASE_LINE_HEIGHT * value)};`;
    }

    const { vertical, horizontal, top, right, bottom, left } = value;
    const result = [];

    if (any(isNotUndefined, [vertical, top])) {
      result.push(`${kind}-top: ${calculateSpacingValue(top, vertical)};`);
    }
    if (any(isNotUndefined, [vertical, bottom])) {
      result.push(
        `${kind}-bottom: ${calculateSpacingValue(bottom, vertical)};`,
      );
    }
    if (any(isNotUndefined, [horizontal, left])) {
      result.push(`${kind}-left: ${calculateSpacingValue(left, horizontal)};`);
    }
    if (any(isNotUndefined, [horizontal, right])) {
      result.push(
        `${kind}-right: ${calculateSpacingValue(right, horizontal)};`,
      );
    }

    return result;
  },
);

// createMarginSpacing :: Value -> string | string[]
// Value - number or 'none' or object
export const createMarginSpacing = createSpacing('margin');

// createPaddingSpacing :: Value -> string | string[]
// Value - number or 'none' or object
export const createPaddingSpacing = createSpacing('padding');

// createSpacings :: Object -> string
// Object - {margin: number or 'none' or object, padding: number or 'none' or object }
export const createSpacings = ({
  margin,
  padding,
}: Theme): FlattenSimpleInterpolation => css`
  ${createMarginSpacing(margin)};
  ${createPaddingSpacing(padding)};
`;
