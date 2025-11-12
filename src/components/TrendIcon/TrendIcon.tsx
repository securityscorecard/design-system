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
  /**
   * When true, positive trends show a green down-right arrow and negative trends show a red up-right arrow
   */
  invertedPositive?: boolean;
};

const IconRotation: Record<Trend, number> = {
  positive: 45,
  negative: 135,
  stable: 0,
};

const InvertedIconRotation: Record<Trend, number> = {
  positive: 135, // arrow-up rotated 135° to point down-right
  negative: 45, // arrow-up rotated 45° to point up-right
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
>(({ type, trend, invertedPositive = false }: TrendIconProps, ref) => {
  const trendValue = type || trend;

  const getIconName = () => {
    if (trendValue === 'stable') return 'minus';
    // Always use arrow-up, rotation handles the direction
    return 'arrow-up';
  };

  const getRotation = () => {
    if (invertedPositive) {
      return InvertedIconRotation[trendValue];
    }
    return IconRotation[trendValue];
  };

  return (
    <IconWrapper ref={ref} $trend={trendValue} paddingSize="xxs">
      <Icon
        color={FontColor[trendValue]}
        name={getIconName()}
        size="sm"
        transform={{ rotate: getRotation() }}
      />
    </IconWrapper>
  );
});

export default TrendIcon;
