import styled from 'styled-components';
import { includes } from 'ramda';

import { pxToRem } from '../../utils';
import { Icon } from '../Icon';
import { StyledIconProps } from './StyledIcon.types';
import { ButtonSizes } from './Button.enums';

export const iconSizes = {
  [ButtonSizes.lg]: 16,
  [ButtonSizes.md]: 12,
  [ButtonSizes.sm]: 10,
};

const StyledIcon = styled(Icon).withConfig<StyledIconProps>({
  shouldForwardProp: (property) => !includes(property, ['size']),
})`
  font-size: ${({ size }) => pxToRem(iconSizes[size])};
`;

export default StyledIcon;
