import React from 'react';
import styled from 'styled-components';
import { partialRight, pipe, prop } from 'ramda';

import { SSCIconNames } from '../../theme/icons/icons.enums';
import { Icon } from '../Icon';
import { ScoreDeltaProps } from './ScoreDelta.types';
import { Inline } from '../layout';
import { getColor, getFontSize, getRadii, pxToRem } from '../../utils';
import { ColorTypes } from '../../theme';

const IconRotation = {
  positive: '45deg',
  negative: '135deg',
  stable: '0deg',
};

const IconBackgroundColor = {
  positive: ColorTypes.success100,
  negative: ColorTypes.error100,
  stable: ColorTypes.neutral300,
};

const FontColor = {
  positive: ColorTypes.success500,
  negative: ColorTypes.error500,
  stable: ColorTypes.neutral600,
};

const IconWrapper = styled.div<{ type: string }>`
  transform: rotate(${pipe(prop('type'), partialRight(prop, [IconRotation]))});
  background: ${pipe(
    prop('type'),
    partialRight(prop, [IconBackgroundColor]),
    getColor,
  )};
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  border-radius: ${getRadii('circle')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
    const icon = delta === 0 ? SSCIconNames.minus : SSCIconNames.arrowUp;
    const type = getType(delta);
    const text = Math.abs(delta).toFixed(decimalsCount);

    return (
      <Inline ref={ref} align="center" as="span" gap="sm">
        <IconWrapper type={type}>
          <Icon color={FontColor[type]} name={icon} />
        </IconWrapper>
        <Label type={type}>{text}</Label>
      </Inline>
    );
  },
);

export default ScoreDelta;
