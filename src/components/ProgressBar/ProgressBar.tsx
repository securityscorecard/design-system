import type {
  ProgressBarProps,
  ProgressBarVariant,
  RootProgressProps,
} from './ProgressBar.types';

import { forwardRef } from 'react';
import { prop } from 'ramda';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { CLX_COMPONENT } from '../../theme/constants';
import { getColor, getRadii, pxToRem } from '../../utils';
import { ColorTypes } from '../../theme';
import { ProgressBarSizes, ProgressBarVariants } from './ProgressBar.enums';

const ProgressBarColors: Record<ProgressBarVariant, string> = {
  info: ColorTypes.info500,
  warn: ColorTypes.warning500,
  error: ColorTypes.error500,
  success: ColorTypes.success500,
};

const RootProgress = styled.div<RootProgressProps>`
  position: relative;
  height: ${(props) =>
    prop('$size')(props) === 'thin' ? pxToRem(6) : pxToRem(14)};
  width: 100%;
  background-color: ${getColor(ColorTypes.neutral300)};
  border-radius: ${getRadii('half')};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${prop('$progress')}%;
    height: 100%;
    background-color: ${(props) =>
      getColor(ProgressBarColors[prop('$variant')(props)])};
    border-radius: ${getRadii('half')};
  }
`;

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value,
      maxValue = 100,
      size = ProgressBarSizes.normal,
      variant = ProgressBarVariants.info,
      ...props
    },
    ref,
  ) => (
    <RootProgress
      {...props}
      ref={ref}
      $progress={(100 / maxValue) * value}
      $size={size}
      $variant={variant}
      aria-valuemax={maxValue}
      aria-valuemin={0}
      aria-valuenow={value}
      className={CLX_COMPONENT}
      role="progressbar"
    />
  ),
);

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number,
  size: PropTypes.oneOf(Object.values(ProgressBarSizes)),
  variant: PropTypes.oneOf(Object.values(ProgressBarVariants)),
};
export default ProgressBar;
