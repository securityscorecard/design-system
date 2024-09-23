import styled from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';

import { getColor } from '../../utils';
import { Tooltip } from '../Tooltip';
import { Icon } from '../Icon';
import { HintTooltipProps } from './HintTooltip.types';
import { ColorTypes } from '../../theme';
import { Color } from '../../theme/colors.types';

const StyledIcon = styled(Icon)<{
  $color: Color;
}>`
  display: block;
  background: ${getColor('neutral.0')};
  border: 1px solid ${getColor('neutral.0')};
  border-radius: 100%;
  color: ${({ $color, theme }) =>
    isNotUndefined($color) ? getColor($color, { theme }) : 'inherit'};
  &:hover {
    color: ${({ theme }) => getColor('neutral.700', { theme })};
  }
`;

const HintTooltip = ({ children, width, ...props }: HintTooltipProps) => (
  <Tooltip popup={children} width={width} {...props}>
    <StyledIcon
      $color={ColorTypes.neutral600}
      name="info-circle-outline"
      tabIndex={0}
    />
  </Tooltip>
);

export default HintTooltip;
