import styled from 'styled-components';
import { includes } from 'ramda';

import { pxToRem } from '../../../utils';
import { Icon } from '../../Icon';
import { BaseStyledIconProps } from './BaseStyledIcon.types';
import { BaseButtonSizes } from './BaseButton.enums';

export const iconSizes = {
  [BaseButtonSizes.lg]: 14,
  [BaseButtonSizes.md]: 12,
  [BaseButtonSizes.sm]: 10,
};

const BaseStyledIcon = styled(Icon).withConfig<BaseStyledIconProps>({
  shouldForwardProp: (property) => !includes(property, ['size']),
})`
  font-size: ${({ size }) => pxToRem(iconSizes[size])};
`;

export default BaseStyledIcon;
