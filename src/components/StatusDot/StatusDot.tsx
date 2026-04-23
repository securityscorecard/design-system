import Styled from 'styled-components';

import { getColor, getRadii, pxToRem } from '../../utils';

/** Maps status names to their semantic theme color paths. */
export const StatusDotColors = {
  success: 'success.500',
  danger: 'error.500',
  warn: 'warning.500',
  info: 'info.500',
  inactive: 'neutral.400',
  review: 'review.500',
} as const;

/** Styled dot element; color is resolved through the theme via getColor(). */
const StatusDotComponent = Styled.div<{ color: keyof typeof StatusDotColors }>`
  width: ${pxToRem(12)};
  height: ${pxToRem(12)};
  border-radius: ${getRadii('round')};
  background-color: ${({ color }) => getColor(StatusDotColors[color])};
  border: 2px solid white;
  box-shadow: 0 0 12px 0px ${({ color }) => getColor(StatusDotColors[color])}80;
`;

/** Renders a small colored dot indicating a status (success, danger, review, etc.). */
const StatusDot = ({
  color = 'inactive',
}: {
  color: keyof typeof StatusDotColors;
}) => <StatusDotComponent color={color} role="presentation" />;

export default StatusDot;
