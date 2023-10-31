import Styled from 'styled-components';

import { getRadii, pxToRem } from '../../utils';

export const StatusDotColors = {
  good: '73, 162, 90',
  bad: '242, 46, 67',
  neutral: '84, 129, 217',
  inactive: '216, 216, 216',
} as const;

const StatusDotComponent = Styled.div`
  width: ${pxToRem(12)};
  height: ${pxToRem(12)};
  border-radius: ${getRadii('round')};
  background-color: rgb(${({ color }) => StatusDotColors[color]});
  border: 2px solid white;
  box-shadow: 0 0 12px 0px rgba(${({ color }) =>
    `${StatusDotColors[color]}, 0.5`});
`;

const StatusDot = ({
  color = 'inactive',
}: {
  color: keyof typeof StatusDotColors;
}) => <StatusDotComponent color={color} role="presentation" />;

export default StatusDot;
