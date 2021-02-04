import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import {
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  pxToRem,
} from '../../utils/helpers';
import { TabSizes, TabVariants } from './Tabs.enums';
import { LabelProps, Sizes, Variants } from './Tabs.types';

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

const underlineSizes = {
  [TabSizes.lg]: largeUnderlineSize,
  [TabSizes.md]: mediumUnderlineSize,
  [TabSizes.sm]: smallUnderlineSize,
};

const textSizes = {
  [TabSizes.lg]: largeTextSize,
  [TabSizes.md]: mediumTextSize,
};

const underlineTab = css<LabelProps & { size: Sizes; variant: Variants }>`
  ${({ size }) => underlineSizes[size] || underlineSizes[TabSizes.md]};
  color: ${getColor('graphite4B')};
  padding-bottom: ${pxToRem(4)};
  border-bottom: 2px solid
    ${({ $isSelected, $color }) =>
      $isSelected ? getColor($color) : getColor('graphiteHB')};

  &:hover,
  &:focus {
    color: ${getColor('graphite4B')};
    text-decoration: none;
    border-bottom: 2px solid ${({ $color }) => getColor($color)};
  }
  &:visited {
    color: ${getColor('graphite4B')};
  }
`;

const textTab = css<LabelProps & { size: Sizes; variant: Variants }>`
  ${({ size }) => textSizes[size] || textSizes[TabSizes.md]};

  color: ${({ $isSelected, $color }) =>
    $isSelected ? getColor('graphite4B') : getColor($color)};
  &:hover,
  &:focus {
    color: ${({ $color, theme }) =>
      lighten(0.1, theme.colors[$color] || $color)};
    text-decoration: none;
  }
  &:visited {
    color: ${getColor('graphite4B')};
  }
`;

const tabVariants = {
  [TabVariants.text]: textTab,
  [TabVariants.underline]: underlineTab,
};

const TabLabel = styled.a<LabelProps & { variant: Variants }>`
  text-decoration: none;
  cursor: pointer;
  font-weight: ${getFontWeight('medium')};

  ${({ variant }) => tabVariants[variant]};

  &:not(:last-of-type) {
    margin-right: ${pxToRem(30)};
  }
`;

export default TabLabel;
