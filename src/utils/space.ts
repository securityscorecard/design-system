import {
  DefaultTheme,
  FlattenSimpleInterpolation,
  css,
} from 'styled-components';
import {
  any,
  apply,
  concat,
  curry,
  includes,
  isEmpty,
  path,
  pipe,
} from 'ramda';
import { isNotUndefined, isNumber } from 'ramda-adjunct';

import { BASE_LINE_HEIGHT } from '../theme/constants';
import { PaddingTypes, SpacingSizeValue } from '../types/spacing.types';
import { SpaceSizes } from '../theme/space.enums';
import { Theme, pxToRem } from './helpers';

const allowedPaddingSizes = {
  [PaddingTypes.square]: [
    SpaceSizes.none,
    SpaceSizes.xs,
    SpaceSizes.sm,
    SpaceSizes.md,
    SpaceSizes.mdPlus,
    SpaceSizes.lg,
    SpaceSizes.lgPlus,
    SpaceSizes.xl,
  ],
  [PaddingTypes.squish]: [
    SpaceSizes.none,
    SpaceSizes.sm,
    SpaceSizes.md,
    SpaceSizes.mdPlus,
    SpaceSizes.lg,
  ],
  [PaddingTypes.stretch]: [
    SpaceSizes.none,
    SpaceSizes.sm,
    SpaceSizes.md,
    SpaceSizes.mdPlus,
    SpaceSizes.lg,
  ],
};

interface InsetSquare {
  paddingType: 'square';
  paddingSize: typeof allowedPaddingSizes['square'][number];
}
interface InsetAsymetric {
  paddingType: 'squish' | 'stretch';
  paddingSize: typeof allowedPaddingSizes['squish'][number];
}

type PaddingSpaceProps = InsetSquare | InsetAsymetric;
type GetPaddingSpaceArgs = PaddingSpaceProps & { theme: DefaultTheme };

export const getPaddingSpace = ({
  paddingSize = SpaceSizes.none,
  paddingType = PaddingTypes.square,
  theme,
}: GetPaddingSpaceArgs): [number, number] | [number] => {
  if (!includes(paddingSize, allowedPaddingSizes[paddingType])) {
    // eslint-disable-next-line no-console
    console.warn(`Invalid type-size pair: ${paddingType} - ${paddingSize}
For '${paddingType}' padding type available sizes are: ${allowedPaddingSizes[paddingType]}.`);

    return [0];
  }

  const sizeValue = path(['space', paddingSize], theme);

  switch (paddingType) {
    case PaddingTypes.squish:
      return [sizeValue / 2, sizeValue];
    case PaddingTypes.stretch:
      return [sizeValue, sizeValue / 2];
    case PaddingTypes.square:
    default:
      return [sizeValue];
  }
};

// createPadding :: Object -> string
// Object - { paddingSize: keyof typeof space; paddingType: keyof typeof paddingTypes; theme: DefaultTheme; }
export const createPadding = pipe(
  getPaddingSpace,
  apply(pxToRem),
  concat('padding: '),
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
