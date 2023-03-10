import type { Variants } from './BaseTabLabel.types';

import styled, { css } from 'styled-components';

import { Padbox } from '../../layout';
import { getColor, getRadii } from '../../../utils';
import { BaseTabVariants } from './BaseTabs.enums';

export const BaseTabsWrapper = styled(Padbox)<{
  $variant: Variants;
  $isExpanded: boolean;
}>`
  display: inline-block;

  ${({ $variant, $isExpanded }) =>
    $variant === BaseTabVariants.segmented &&
    $isExpanded &&
    css`
      width: 100%;
      display: flex:
      flex-grow: 1;
    `};

  ${({ $variant }) =>
    $variant === BaseTabVariants.segmented &&
    css`
      background: ${getColor('neutral.0')};
      box-shadow: inset 0 0 0 1px ${getColor('neutral.600')};
      border-radius: ${getRadii('default')};
    `};
`;
