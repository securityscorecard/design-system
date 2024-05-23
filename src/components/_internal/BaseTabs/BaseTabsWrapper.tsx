import styled, { css } from 'styled-components';

import { Padbox } from '../../layout';
import { getColor, getFormStyle, getRadii } from '../../../utils';
import { Variants } from './BaseTabLabel.types';
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
      box-shadow: inset 0 0 0 1px ${getFormStyle('borderColor')};
      border-radius: ${getRadii('default')};
    `};
`;
