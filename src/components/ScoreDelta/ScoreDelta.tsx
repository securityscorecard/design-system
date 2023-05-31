import React from 'react';
import styled from 'styled-components';
import { partialRight, pipe, prop } from 'ramda';

import { ScoreDeltaProps } from './ScoreDelta.types';
import { Inline } from '../layout';
import { getColor, getFontSize } from '../../utils';
import { ColorTypes } from '../../theme';
import { TrendIcon } from '../TrendIcon/TrendIcon';

const FontColor = {
  positive: ColorTypes.success500,
  negative: ColorTypes.error500,
  stable: ColorTypes.neutral600,
};

const Label = styled.span<{ type: string }>`
  font-size: ${getFontSize('md')};
  color: ${pipe(prop('type'), partialRight(prop, [FontColor]), getColor)};
`;

const getType = (delta: number) => {
  if (delta > 0) return 'positive';
  if (delta < 0) return 'negative';
  return 'stable';
};

const ScoreDelta = React.forwardRef<HTMLDivElement, ScoreDeltaProps>(
  ({ delta, decimalsCount = 0 }, ref) => {
    const type = getType(delta);
    const text = Math.abs(delta).toFixed(decimalsCount);

    return (
      <Inline ref={ref} align="center" as="span" gap="sm">
        <TrendIcon type={type} />
        <Label type={type}>{text}</Label>
      </Inline>
    );
  },
);

export default ScoreDelta;
