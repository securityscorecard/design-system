import React from 'react';
import PropTypes from 'prop-types';
import { defaultWhen } from 'ramda-adjunct';
import { lt, pipe } from 'ramda';
import styled, { css } from 'styled-components';

import type { BadgeElementProps, BadgeProps } from './Badge.types';
import { BadgeSizes } from './Badge.enums';
import { getColor, pxToRem } from '../../utils';

const badgeFontSizeMedium = css`
  font-size: ${pxToRem(11)};
`;

const badgeFontSizeSmall = css`
  font-size: ${pxToRem(9)};
`;

const badgeFontSizes = {
  [BadgeSizes.md]: badgeFontSizeMedium,
  [BadgeSizes.sm]: badgeFontSizeSmall,
};

const BadgeElement = styled.span<BadgeElementProps>`
  display: inline-block;
  min-width: 1em;
  /* cause our font is not aligned properly to baseline
   * we need to use this magic to have number centered
   * vertically and horizontally */
  padding: 0.229em 0.231em 0.228em 0.226em;
  border-radius: 1em;
  ${({ size }) => badgeFontSizes[size]};
  font-weight: 600;
  text-align: center;
  color: ${getColor('graphite4H')};
  background-color: ${getColor('strawberry')};
  box-sizing: content-box;
  line-height: 1;
  vertical-align: text-top;
  margin-left: ${pxToRem(8)};
`;

const normalizeCount = pipe(defaultWhen(lt(100), '99+'));

const Badge: React.FC<BadgeProps> = ({ count, size = BadgeSizes.md }) => (
  <BadgeElement size={size}>{normalizeCount(count)}</BadgeElement>
);

Badge.propTypes = {
  count: PropTypes.number.isRequired,
  size: PropTypes.oneOf(Object.values(BadgeSizes)),
};

export default Badge;
