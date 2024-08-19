import styled, { css } from 'styled-components';
import { __, includes, pipe, subtract } from 'ramda';

import { getColor, getRadii, getToken, pxToRem } from '../../../utils';
import { BaseLabelProps } from './BaseTabLabel.types';
import { BaseTabVariants } from './BaseTabs.enums';
import { Padbox } from '../../layout/Padbox';

const underlineTab = css<BaseLabelProps>`
  font-weight: ${({ $isSelected }) =>
    $isSelected
      ? 'var(--sscds-font-weight-body-strong)'
      : 'var(--sscds-font-weight-body-default)'};
  line-height: 1.5rem;
  color: ${getColor('neutral.900')};
  border-bottom: 2px solid
    ${({ $isSelected }) =>
      $isSelected ? getToken('color-action-primary') : getColor('neutral.300')};

  &:hover {
    color: ${getColor('neutral.900')};
    border-bottom-color: ${getToken('color-action-primary-focus')};
  }
`;

const textTab = css<BaseLabelProps>`
  line-height: var(--sscds-font-lineheight-elementlabel);
  font-weight: var(--sscds-font-weight-elementlabel-default);
  color: ${({ $isSelected }) =>
    $isSelected
      ? getColor('neutral.900')
      : getToken('color-action-link-primary')};

  &:hover {
    color: ${getToken('color-action-link-primary-hover')};
  }
`;

export const segmentedTabSelected = css`
  background: ${getColor('primary.50')};
  border: 1px solid ${getColor('primary.200')};
`;

const segmentedTab = css<BaseLabelProps>`
  line-height: var(--sscds-font-lineheight-elementlabel);

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

const BaseTabLabel = styled(Padbox).withConfig({
  shouldForwardProp: (property) =>
    !includes(property, ['paddingType', 'paddingSize', 'theme']),
})<BaseLabelProps>`
  display: flex;
  align-items: center;
  outline: none;
  text-decoration: none;
  cursor: pointer;

  font-size: ${getToken('font-action-size')};

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
