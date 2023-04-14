import type { FC } from 'react';
import type { BadgeElementProps, BadgeProps } from './Badge.types';

import { defaultWhen } from 'ramda-adjunct';
import { lte, pipe } from 'ramda';
import styled, { css } from 'styled-components';

import { BadgeVariants } from './Badge.enums';
import {
  getColor,
  getFontSize,
  getFontWeight,
  getRadii,
  pxToRem,
} from '../../utils';
import { CLX_COMPONENT } from '../../theme/constants';
import { SpaceSizes } from '../../theme';
import { Padbox } from '../layout';

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

const BadgeElement = styled(Padbox)<BadgeElementProps>`
  display: inline-block;
  min-width: 1.5rem;
  padding-block: 0.125rem;
  border-radius: ${getRadii('round')};
  font-size: ${getFontSize('md')};
  font-weight: ${getFontWeight('regular')};
  text-align: center;
  ${({ $variant }) => badgeVariants[$variant]};
  line-height: ${pxToRem(20)};
`;

const normalizeCount = pipe(defaultWhen(lte(100), '99+'));

const Badge: FC<BadgeProps> = ({ count, variant = BadgeVariants.error }) => (
  <BadgeElement
    $variant={variant}
    className={CLX_COMPONENT}
    paddingSize={SpaceSizes.sm}
  >
    <span>{normalizeCount(count)}</span>
  </BadgeElement>
);

export default Badge;
