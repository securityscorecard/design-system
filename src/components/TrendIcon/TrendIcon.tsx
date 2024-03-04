import React from 'react';
import styled from 'styled-components';

import { Icon } from '../Icon';
import { getColor, getFontSize, getRadii, pxToRem } from '../../utils';
import { ColorTypes } from '../../theme';
import { SSCIconNames } from '../../theme/icons/icons.enums';

const IconRotation = {
  positive: 'rotate-45',
  negative: 'rotate-135',
  stable: '',
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
  background: ${({ type, theme }) =>
    getColor(IconBackgroundColor[type])({ theme })};
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  border-radius: ${getRadii('circle')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ type, theme }) =>
    getFontSize(type === 'stable' ? 'lg' : 'md')({ theme })};
`;

export const TrendIcon = React.forwardRef<
  HTMLDivElement,
  { type: 'positive' | 'negative' | 'stable' }
>(({ type }, ref) => {
  const icon = type === 'stable' ? SSCIconNames.minus : SSCIconNames.arrowUp;
  return (
    <IconWrapper ref={ref} type={type}>
      <Icon
        color={FontColor[type]}
        name={icon}
        title={type}
        transform={IconRotation[type]}
      />
    </IconWrapper>
  );
});

export default TrendIcon;
