import React from 'react';
import PropTypes from 'prop-types';
import { defaultWhen } from 'ramda-adjunct';
import { lte, pipe } from 'ramda';
import styled, { css } from 'styled-components';

import type { BadgeElementProps, BadgeProps } from './Badge.types';
import { BadgeVariants } from './Badge.enums';
import { getColor, getFontWeight, getRadii, pxToRem } from '../../utils';
import { CLX_COMPONENT } from '../../theme/constants';
import { SSCIcons, Types } from '../Icon/Icon.types';
import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { Icon } from '../Icon';
import { Inline } from '../layout';

const BadgeNeutral = css`
  background-color: ${getColor('neutral.300')};
  color: ${getColor('neutral.700')};
`;
const BadgeSuccess = css`
  background-color: ${getColor('success.500')};
  color: ${getColor('neutral.0')};
`;
const BadgeInfo = css`
  background-color: ${getColor('info.500')};
  color: ${getColor('neutral.0')};
`;
const BadgeWarn = css`
  background-color: ${getColor('warning.500')};
  color: ${getColor('neutral.900')};
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

const BadgeElement = styled.span<BadgeElementProps>`
  display: inline-block;
  min-width: 1em;
  padding: 0.125rem 0.5rem;
  border-radius: ${getRadii('round')};
  font-size: ${pxToRem(14)};
  font-weight: ${getFontWeight('regular')};
  text-align: center;
  ${({ $variant }) => badgeVariants[$variant]};
  box-sizing: content-box;
  line-height: 1.3125rem;
  vertical-align: text-top;
`;

const normalizeCount = pipe(defaultWhen(lte(100), '99+'));

const Badge: React.FC<BadgeProps> = ({
  count,
  text,
  iconName,
  iconType,
  variant = BadgeVariants.error,
}) => (
  <BadgeElement $variant={variant} className={CLX_COMPONENT}>
    <Inline align="center" as="span" gap="sm" justify="center">
      {iconName ? <Icon name={iconName} type={iconType} /> : null}
      <span>{count ? normalizeCount(count) : text}</span>
    </Inline>
  </BadgeElement>
);

Badge.propTypes = {
  count: PropTypes.number,
  text: PropTypes.string,
  iconName: PropTypes.oneOfType([
    PropTypes.oneOf<SSCIcons>(Object.values(SSCIconNames)),
    PropTypes.string,
  ]),
  iconType: PropTypes.oneOfType([
    PropTypes.oneOf<Types>(Object.values(IconTypes)),
    PropTypes.string,
  ]),
};

export default Badge;
