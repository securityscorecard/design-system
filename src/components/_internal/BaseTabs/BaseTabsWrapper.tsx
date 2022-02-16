import styled, { css } from 'styled-components';

import { Padbox } from '../../layout';
import { getColor, getRadii } from '../../../utils';
import { Variants } from './BaseTabLabel.types';
import { BaseTabVariants } from './BaseTabs.enums';

export const BaseTabsWrapper = styled(Padbox)<{
  $variant: Variants;
}>`
  display: inline-block;

  ${({ $variant }) =>
    $variant === BaseTabVariants.segmented &&
    css`
      background: ${getColor('neutral.0')};
      box-shadow: inset 0 0 0 1px ${getColor('neutral.600')};
      border-radius: ${getRadii('default')};
    `};
`;
