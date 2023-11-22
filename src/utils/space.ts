import {
  DefaultTheme,
  FlattenSimpleInterpolation,
  css,
} from 'styled-components';
import { any, apply, concat, curry, isEmpty, path, pipe } from 'ramda';
import { isNotUndefined, isNumber } from 'ramda-adjunct';

import { BASE_LINE_HEIGHT } from '../theme/constants';
import { SpacingSizeValue } from '../types/spacing.types';
import { SpaceSizes } from '../theme/space.enums';
import { ThemeType, pxToRem } from './helpers';
import { PaddingTypes } from '../components/layout/Padbox/Padbox.enums';
import { SpaceSize } from '../theme/space.types';

export type PaddingType = typeof PaddingTypes[keyof typeof PaddingTypes];
type PaddingSpaceProps = {
  paddingType: PaddingType;
  paddingSize: SpaceSize;
};
type GetPaddingSpaceArgs = PaddingSpaceProps & { theme: DefaultTheme };

export const getPaddingSpace = ({
  paddingSize = SpaceSizes.none,
  paddingType = PaddingTypes.square,
  theme,
}: GetPaddingSpaceArgs): [number, number] | [number] => {
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

export const getPaddingSize = pipe(getPaddingSpace, apply(pxToRem));

// createPadding :: Object -> string
// Object - { paddingSize: keyof typeof space; paddingType: keyof typeof paddingTypes; theme: DefaultTheme; }
export const createPadding = pipe(getPaddingSize, concat('padding: '));

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
}: ThemeType): FlattenSimpleInterpolation => css`
  ${createMarginSpacing(margin)};
  ${createPaddingSpacing(padding)};
`;
