import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { __, includes, pipe, subtract } from 'ramda';

import {
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  getRadii,
  getSpace,
  getToken,
  pxToRem,
} from '../../../utils';
import { SpaceSizes } from '../../../theme';
import { BaseLabelProps } from './BaseTabLabel.types';
import { BaseTabVariants } from './BaseTabs.enums';
import { Padbox } from '../../layout/Padbox';

const commonHoverTab = css<BaseLabelProps>`
  ${({ $isSelected, $color, theme }) =>
    $color && $isSelected
      ? lighten(0.1, getColor($color, { theme }))
      : getColor('primary.600')}
`;

const underlineTab = css<BaseLabelProps>`
  font-size: ${getFontSize('h5')};
  line-height: ${getLineHeight('lg')};
  padding-bottom: ${getSpace(SpaceSizes.xxs)};
  border-bottom: 2px solid
    ${({ $isSelected, $color }) =>
      $isSelected
        ? $color
          ? getColor($color)
          : getColor('primary.500')
        : getColor('neutral.500')};

  &:hover {
    border-bottom-color: ${commonHoverTab};
  }

  &,
  &:hover {
    color: ${getColor('neutral.900')};
  }
`;

const textTab = css<BaseLabelProps>`
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
  color: ${({ $isSelected, $color }) =>
    $isSelected
      ? $color
        ? getColor($color)
        : getColor('neutral.900')
      : getColor('primary.500')};

  &:hover {
    color: ${commonHoverTab};
  }
`;

export const segmentedTabSelected = css`
  background: ${getColor('primary.50')};
  border: 1px solid ${getColor('primary.200')};
`;

const segmentedTab = css<BaseLabelProps>`
  font-size: ${getToken('font-action-size')};
  font-weight: ${getFontWeight('regular')};
  line-height: ${getToken('font-action-lineheight')};

  height: ${({ theme }) =>
    pipe(
      getToken('size-action-size'),
      subtract(__, 2 * theme.space.xs),
      pxToRem,
    )({ theme })};
  border: 1px solid transparent;
  ${({ $isSelected }) => $isSelected && segmentedTabSelected};

  border-radius: ${getRadii('half')};
  color: ${getColor('neutral.900')};

  &:hover {
    color: ${getToken('color-action-primary-hover')};
  }

  &:active {
    color: ${getToken('color-action-primary-active')};
  }
`;

const tabVariants = {
  [BaseTabVariants.text]: textTab,
  [BaseTabVariants.underline]: underlineTab,
  [BaseTabVariants.segmented]: segmentedTab,
};

const BaseTabLabel = styled(Padbox).withConfig<BaseLabelProps>({
  shouldForwardProp: (property) =>
    !includes(property, ['paddingType', 'paddingSize']),
})`
  display: flex;
  align-items: center;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  font-weight: ${getFontWeight('semibold')};

  ${({ $isExpanded }) =>
    $isExpanded &&
    css`
      justify-content: center;
    `};

  &:hover {
    text-decoration: none;
  }

  ${({ $variant }) => tabVariants[$variant]};
`;

export default BaseTabLabel;
