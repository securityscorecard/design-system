import { forwardRef } from 'react';
import styled from 'styled-components';

import { Icon } from '../Icon';
import { Padbox } from '../layout';
import { getColor, getRadii, pxToRem } from '../../utils';
import { RequireAtLeastOne } from '../../types/utils.types';
import {
  FontColor,
  IconBackgroundColor,
  Trend,
} from '../_internal/BaseTrends/common';

type TrendIconProps = {
  /**
   * @deprecated use "trend" property instead
   */
  type?: Trend;
  trend?: Trend;
};

const IconRotation: Record<Trend, number> = {
  positive: 45,
  negative: 135,
  stable: 0,
};

const IconWrapper = styled(Padbox)<{ $trend: Trend }>`
  background: ${({ $trend, theme }) =>
    getColor(IconBackgroundColor[$trend], { theme })};
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  border-radius: ${getRadii('default')};
  display: grid;
  place-items: center;
`;

const TrendIcon = forwardRef<
  HTMLDivElement,
  RequireAtLeastOne<TrendIconProps, 'type' | 'trend'>
>(({ type, trend }: TrendIconProps, ref) => {
  const trendValue = type || trend;

  return (
    <IconWrapper ref={ref} $trend={trendValue} paddingSize="xxs">
      <Icon
        color={FontColor[trendValue]}
        name={trendValue === 'stable' ? 'minus' : 'arrow-up'}
        size="sm"
        transform={{ rotate: IconRotation[trendValue] }}
      />
    </IconWrapper>
  );
});

export default TrendIcon;
