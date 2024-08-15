import React from 'react';
import styled from 'styled-components';

import { ScoreDeltaProps } from './ScoreDelta.types';
import { Padbox } from '../layout';
import { getColor, getRadii, getSpace } from '../../utils';
import { TrendIcon } from '../TrendIcon/TrendIcon';
import {
  FontColor,
  IconBackgroundColor,
  Trend,
} from '../_internal/BaseTrends/common';
import ElementLabel from '../ElementLabel/ElementLabel';

const ScoreDeltaRoot = styled(Padbox)<{ $trend: string }>`
  background: ${({ $trend, theme }) =>
    getColor(IconBackgroundColor[$trend], { theme })};
  display: inline-flex;
  align-items: center;
  border-radius: ${getRadii('default')};
`;
const Label = styled(ElementLabel)<{ $trend: string }>`
  line-height: var(--sscds-font-lineheight-body-md);
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
    const absoluteDelta = Math.abs(delta);
    const nearZeroLimit = 1 / 10 ** decimalsCount;
    const isNearZeroDelta = absoluteDelta > 0 && absoluteDelta < nearZeroLimit;
    const text = isNearZeroDelta
      ? `<${nearZeroLimit}`
      : absoluteDelta.toFixed(decimalsCount);

    return (
      <ScoreDeltaRoot ref={ref} $trend={trend} as="span" paddingSize="xxs">
        <TrendIcon trend={trend} />
        <Label $trend={trend} size="sm">
          {text}
        </Label>
      </ScoreDeltaRoot>
    );
  },
);

export default ScoreDelta;
