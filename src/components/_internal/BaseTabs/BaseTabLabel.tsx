import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { __, includes, pipe, subtract } from 'ramda';

import {
  getButtonHeight,
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  getRadii,
  getSpace,
  pxToRem,
} from '../../../utils';
import { SpaceSizes } from '../../../theme';
import { BaseLabelProps, Sizes } from './BaseTabLabel.types';
import { BaseTabSizes, BaseTabVariants } from './BaseTabs.enums';
import { Padbox } from '../../layout/Padbox';

const largeTextSize = css`
  font-size: ${getFontSize('lg')};
  line-height: ${getLineHeight('md')};
`;

const mediumTextSize = css`
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
`;

const largeUnderlineSize = css`
  font-size: ${getFontSize('h2')};
  line-height: ${getLineHeight('xxl')};
`;

const mediumUnderlineSize = css`
  font-size: ${getFontSize('h3')};
  line-height: ${getLineHeight('xl')};
`;

const smallUnderlineSize = css`
  font-size: ${getFontSize('h5')};
  line-height: ${getLineHeight('lg')};
`;

const getSegmentedLabelHeight = ({ size, theme }) =>
  pipe(
    getButtonHeight(size),
    subtract(__, 2 * theme.space.xs),
    pxToRem,
  )({ theme });

const largeSegmentedSize = css`
  font-size: ${getFontSize('lg')};
`;

const mediumSegmentedSize = css`
  font-size: ${getFontSize('md')};
  line-height: 1;
`;

const underlineSizes = {
  [BaseTabSizes.lg]: largeUnderlineSize,
  [BaseTabSizes.md]: mediumUnderlineSize,
  [BaseTabSizes.sm]: smallUnderlineSize,
};

const textSizes = {
  [BaseTabSizes.lg]: largeTextSize,
  [BaseTabSizes.md]: mediumTextSize,
};

const segmentedSizes = {
  [BaseTabSizes.lg]: largeSegmentedSize,
  [BaseTabSizes.md]: mediumSegmentedSize,
};

const underlineTab = css<BaseLabelProps & { size: Sizes }>`
  ${({ size }) => underlineSizes[size] || underlineSizes[BaseTabSizes.md]};
  padding-bottom: ${getSpace(SpaceSizes.xxs)};
  border-bottom: 2px solid
    ${({ $isSelected, $color }) =>
      $isSelected ? getColor($color) : getColor('neutral.500')};

  &:hover {
    border-bottom-color: ${({ $color }) => getColor($color)};
  }

  &,
  &:hover {
    color: ${getColor('neutral.900')};
  }
`;

const textTab = css<BaseLabelProps & { size: Sizes }>`
  ${({ size }) => textSizes[size] || textSizes[BaseTabSizes.md]};

  color: ${({ $isSelected, $color }) =>
    $isSelected ? getColor('neutral.900') : getColor($color)};

  &:hover {
    color: ${({ $color, theme }) =>
      lighten(0.1, getColor($color, { theme }) || $color)};
  }
`;

export const segmentedTabSelected = css`
  background: ${getColor('primary.50')};
  border: 1px solid ${getColor('primary.200')};
`;

const segmentedTab = css<BaseLabelProps & { size: Sizes }>`
  ${({ size = BaseTabSizes.md }) => segmentedSizes[size]};

  height: ${getSegmentedLabelHeight};
  border: 1px solid transparent;
  ${({ $isSelected }) => $isSelected && segmentedTabSelected};

  border-radius: ${getRadii('half')};
  color: ${getColor('neutral.900')};

  &:hover {
    color: ${getColor('primary.600')};
  }

  &:active {
    color: ${getColor('primary.700')};
  }
`;

const tabVariants = {
  [BaseTabVariants.text]: textTab,
  [BaseTabVariants.underline]: underlineTab,
  [BaseTabVariants.segmented]: segmentedTab,
};

const BaseTabLabel = styled(Padbox).withConfig<
  BaseLabelProps & { size: Sizes }
>({
  shouldForwardProp: (property) =>
    !includes(property, ['paddingType', 'paddingSize']),
})`
  outline: none;
  text-decoration: none;
  cursor: pointer;
  font-weight: ${getFontWeight('semibold')};

  &:visited {
    color: ${getColor('neutral.900')};
  }

  &:hover {
    text-decoration: none;
  }

  ${({ $variant }) => tabVariants[$variant]};
`;

export default BaseTabLabel;
