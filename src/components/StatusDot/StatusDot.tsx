import Styled from 'styled-components';

import { getColor, getRadii, pxToRem } from '../../utils';

export const StatusDotColors = {
  success: 'success.500',
  danger: 'error.500',
  warn: 'warning.500',
  info: 'info.500',
  inactive: 'neutral.400',
} as const;

const StatusDotComponent = Styled.div`
  width: ${pxToRem(12)};
  height: ${pxToRem(12)};
  border-radius: ${getRadii('round')};
  background-color: ${({ color }) => getColor(StatusDotColors[color])};
  border: 2px solid white;
  box-shadow: 0 0 12px 0px ${({ color }) => getColor(StatusDotColors[color])}80;
`;

const StatusDot = ({
  color = 'inactive',
}: {
  color: keyof typeof StatusDotColors;
}) => <StatusDotComponent color={color} role="presentation" />;

export default StatusDot;
