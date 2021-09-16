import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { __, includes, pipe, subtract } from 'ramda';

import {
  getBorderRadius,
  getButtonHeight,
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  getSpace,
  pxToRem,
} from '../../utils';
import { SpaceSizes } from '../../theme';
import { TabSizes, TabVariants } from './Tabs.enums';
import { LabelProps, Sizes } from './Tabs.types';
import { Padbox } from '../layout';

const largeTextSize = css`
  font-size: ${getFontSize('lg')};
  line-height: ${getLineHeight('lg')};
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
  font-size: ${getFontSize('h4')};
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
  [TabSizes.lg]: largeUnderlineSize,
  [TabSizes.md]: mediumUnderlineSize,
  [TabSizes.sm]: smallUnderlineSize,
};

const textSizes = {
  [TabSizes.lg]: largeTextSize,
  [TabSizes.md]: mediumTextSize,
};

const segmentedSizes = {
  [TabSizes.lg]: largeSegmentedSize,
  [TabSizes.md]: mediumSegmentedSize,
};

const underlineTab = css<LabelProps & { size: Sizes }>`
  ${({ size }) => underlineSizes[size] || underlineSizes[TabSizes.md]};
  padding-bottom: ${getSpace(SpaceSizes.xxs)};
  border-bottom: 2px solid
    ${({ $isSelected, $color }) =>
      $isSelected ? getColor($color) : getColor('graphiteHB')};

  &:hover {
    border-bottom-color: ${({ $color }) => getColor($color)};
  }

  &,
  &:hover {
    color: ${getColor('graphite4B')};
  }
`;

const textTab = css<LabelProps & { size: Sizes }>`
  ${({ size }) => textSizes[size] || textSizes[TabSizes.md]};

  color: ${({ $isSelected, $color }) =>
    $isSelected ? getColor('graphite4B') : getColor($color)};

  &:hover {
    color: ${({ $color, theme }) =>
      lighten(0.1, theme.colors[$color] || $color)};
  }
`;

const segmentedTab = css<LabelProps & { size: Sizes }>`
  ${({ size = TabSizes.md }) => segmentedSizes[size]};

  height: ${getSegmentedLabelHeight};
  background: ${({ $isSelected }) => $isSelected && getColor('blueberry0')};
  border: 1px solid
    ${({ $isSelected }) =>
      $isSelected ? getColor('dietBlueberry') : 'transparent'};
  border-radius: calc(${getBorderRadius} / 2);
  color: ${getColor('graphite4B')};

  &:hover {
    color: ${getColor('radiantBlueberry')};
  }
`;

const tabVariants = {
  [TabVariants.text]: textTab,
  [TabVariants.underline]: underlineTab,
  [TabVariants.segmented]: segmentedTab,
};

const TabLabel = styled(Padbox).withConfig<LabelProps>({
  shouldForwardProp: (property) =>
    !includes(property, ['paddingType', 'paddingSize']),
})`
  outline: none;
  text-decoration: none;
  cursor: pointer;
  font-weight: ${getFontWeight('medium')};

  &:visited {
    color: ${getColor('graphite4B')};
  }

  &:hover {
    text-decoration: none;
  }

  ${({ $variant }) => tabVariants[$variant]};
`;

export default TabLabel;
