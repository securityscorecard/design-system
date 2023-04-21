import type { FC } from 'react';
import React, { forwardRef } from 'react';
import { prop } from 'ramda';
import styled from 'styled-components';

import type {
  ProgressBarProps,
  ProgressBarVariants,
} from './ProgressBar.types';
import { CLX_COMPONENT } from '../../theme/constants';
import { getColor, getRadii, pxToRem } from '../../utils';
import { ColorTypes } from '../../theme';

const Container = styled.div<Pick<ProgressBarProps, 'size'>>`
  height: ${(props) =>
    prop('size')(props) === 'thin' ? pxToRem(6) : pxToRem(14)};
  width: 100%;
  background-color: ${getColor(ColorTypes.neutral300)};
  border-radius: ${getRadii('half')};
`;

const ProgressBarColors: Record<ProgressBarVariants, string> = {
  info: ColorTypes.info500,
  warn: ColorTypes.warning500,
  error: ColorTypes.error500,
  success: ColorTypes.success500,
};

const Progress = styled.div<Pick<ProgressBarProps, 'progress' | 'variant'>>`
  width: ${prop('progress')}%;
  height: 100%;
  background-color: ${(props) =>
    getColor(ProgressBarColors[prop('variant')(props)])};
  border-radius: ${getRadii('half')};
`;

const ProgressBar: FC<ProgressBarProps> = forwardRef<
  HTMLDivElement,
  ProgressBarProps
>(({ progress, size, variant = 'info' }, ref) => (
  <Container ref={ref} className={CLX_COMPONENT} size={size}>
    <Progress progress={progress} variant={variant} />
  </Container>
));

export default ProgressBar;
