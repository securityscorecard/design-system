import styled, { css } from 'styled-components';
import { includes } from 'ramda';

import { createMarginSpacing, getFontSize } from '../../utils';
import { Icon } from '../Icon';
import { StyledIconProps } from './StyledIcon.types';
import { ButtonSizes } from './Button.enums';

const IconLarge = css`
  font-size: ${getFontSize('lg')};
  ${createMarginSpacing({ right: 0.5 })};
`;

const IconMedium = css`
  font-size: ${getFontSize('md')};
  ${createMarginSpacing({ right: 0.4 })};
`;

const IconSmall = css`
  font-size: ${getFontSize('xs')};
  ${createMarginSpacing({ right: 0.3 })};
`;

const iconSizes = {
  [ButtonSizes.lg]: IconLarge,
  [ButtonSizes.md]: IconMedium,
  [ButtonSizes.sm]: IconSmall,
};

const StyledIcon = styled(Icon).withConfig<StyledIconProps>({
  shouldForwardProp: (property) => !includes(property, ['size']),
})`
  ${({ size }) => iconSizes[size]};
`;

export default StyledIcon;
