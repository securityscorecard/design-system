import { defaultWhen } from 'ramda-adjunct';
import { lte, pipe } from 'ramda';
import styled, { css } from 'styled-components';

import type { BadgeElementProps, BadgeProps } from './Badge.types';
import { BadgeVariants } from './Badge.enums';
import { CLX_COMPONENT } from '../../theme/constants';

const BadgeNeutral = css`
  background-color: var(--sscds-color-neutral-4);
  color: var(--sscds-color-text-default);
`;
const BadgeSuccess = css`
  background-color: var(--sscds-color-success-500);
  color: var(--sscds-color-text-white);
`;
const BadgeInfo = css`
  background-color: var(--sscds-color-info-500);
  color: var(--sscds-color-text-white);
`;
const BadgeWarn = css`
  background-color: var(--sscds-color-warning-500);
  color: var(--sscds-color-text-black);
`;
const BadgeError = css`
  background-color: var(--sscds-color-danger-500);
  color: var(--sscds-color-text-white);
`;

const badgeVariants = {
  [BadgeVariants.neutral]: BadgeNeutral,
  [BadgeVariants.success]: BadgeSuccess,
  [BadgeVariants.info]: BadgeInfo,
  [BadgeVariants.warn]: BadgeWarn,
  [BadgeVariants.error]: BadgeError,
};

const BadgeElement = styled.div<BadgeElementProps>`
  display: inline-block;
  min-width: 1.5rem;
  padding: 0 var(--sscds-space-2x);
  border-radius: var(--sscds-radii-rounded);
  font-size: var(--sscds-font-size-elementlabel-sm);
  font-weight: var(--sscds-font-weight-elementlabel-default);
  text-align: center;
  ${({ $variant }) => badgeVariants[$variant]};
  line-height: var(--sscds-font-lineheight-elementlabel);
`;

const normalizeCount = pipe(defaultWhen(lte(100), '99+'));

const Badge = ({ count, variant = 'error' }: BadgeProps) => {
  if (typeof count === 'undefined') {
    return null;
  }

  return (
    <BadgeElement $variant={variant} className={CLX_COMPONENT}>
      <span>{normalizeCount(count)}</span>
    </BadgeElement>
  );
};

export default Badge;
