import React from 'react';
import styled from 'styled-components';

import { ScoreDeltaProps } from './ScoreDelta.types';
import { Padbox } from '../layout';
import {
  getColor,
  getFontSize,
  getFontWeight,
  getRadii,
  getSpace,
} from '../../utils';
import { TrendIcon } from '../TrendIcon/TrendIcon';
import {
  FontColor,
  IconBackgroundColor,
  Trend,
} from '../_internal/BaseTrends/common';

const ScoreDeltaRoot = styled(Padbox)<{ $trend: string }>`
  background: ${({ $trend, theme }) =>
    getColor(IconBackgroundColor[$trend], { theme })};
  display: inline-flex;
  align-items: center;
  border-radius: ${getRadii('default')};
`;
const Label = styled.span<{ $trend: string }>`
  font-size: ${getFontSize('md')};
  font-weight: ${getFontWeight('medium')};
  color: ${({ $trend, theme }) => getColor(FontColor[$trend], { theme })};
  padding-inline: ${getSpace('xxs')};
`;

const getTrend = (delta: number): Trend => {
  if (delta > 0) return 'positive';
  if (delta < 0) return 'negative';
  return 'stable';
};

const ScoreDelta = React.forwardRef<HTMLDivElement, ScoreDeltaProps>(
  ({ delta, decimalsCount = 0 }, ref) => {
    const trend = getTrend(delta);
    const text = Math.abs(delta).toFixed(decimalsCount);

    return (
      <ScoreDeltaRoot ref={ref} $trend={trend} as="span" paddingSize="xxs">
        <TrendIcon trend={trend} />
        <Label $trend={trend}>{text}</Label>
      </ScoreDeltaRoot>
    );
  },
);

export default ScoreDelta;
