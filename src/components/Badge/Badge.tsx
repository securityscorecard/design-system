import React from 'react';
import PropTypes from 'prop-types';
import { defaultWhen } from 'ramda-adjunct';
import { lte, pipe } from 'ramda';
import styled, { css } from 'styled-components';

import type { BadgeElementProps, BadgeProps } from './Badge.types';
import { BadgeSizes, BadgeVariants } from './Badge.enums';
import {
  getColor,
  getFontWeight,
  getRadii,
  getSpace,
  pxToRem,
} from '../../utils';
import { SpaceSizes } from '../../theme';

const BadgeNeutral = css`
  background-color: ${getColor('neutral.300')};
  color: ${getColor('neutral.1000')};
`;
const BadgeSuccess = css`
  background-color: ${getColor('success.500')};
  color: ${getColor('neutral.1000')};
`;
const BadgeInfo = css`
  background-color: ${getColor('info.500')};
  color: ${getColor('neutral.0')};
`;
const BadgeWarn = css`
  background-color: ${getColor('warning.500')};
  color: ${getColor('neutral.1000')};
`;
const BadgeError = css`
  background-color: ${getColor('error.500')};
  color: ${getColor('neutral.0')};
`;

const badgeVariants = {
  [BadgeVariants.neutral]: BadgeNeutral,
  [BadgeVariants.success]: BadgeSuccess,
  [BadgeVariants.info]: BadgeInfo,
  [BadgeVariants.warn]: BadgeWarn,
  [BadgeVariants.error]: BadgeError,
};

const badgeFontSizes = {
  [BadgeSizes.md]: 11,
  [BadgeSizes.sm]: 9,
};

const BadgeElement = styled.span<BadgeElementProps>`
  display: inline-block;
  min-width: 1em;
  /* cause our font is not aligned properly to baseline
   * we need to use this magic to have number centered
   * vertically and horizontally */
  padding: 0.229em 0.231em 0.228em 0.226em;
  border-radius: ${getRadii('round')};
  font-size: ${({ $size }) => pxToRem(badgeFontSizes[$size])};
  font-weight: ${getFontWeight('semibold')};
  text-align: center;
  ${({ $variant }) => badgeVariants[$variant]};
  box-sizing: content-box;
  line-height: 1;
  vertical-align: text-top;
  margin-left: ${getSpace(SpaceSizes.sm)};
`;

const normalizeCount = pipe(defaultWhen(lte(100), '99+'));

const Badge: React.FC<BadgeProps> = ({
  count,
  size = BadgeSizes.md,
  variant = BadgeVariants.error,
}) => (
  <BadgeElement $size={size} $variant={variant}>
    {normalizeCount(count)}
  </BadgeElement>
);

Badge.propTypes = {
  count: PropTypes.number.isRequired,
  size: PropTypes.oneOf(Object.values(BadgeSizes)),
};

export default Badge;
