import { type ReactNode } from 'react';
import styled from 'styled-components';

type DotBadgeProps = {
  variant: 'dot';
  /** Controls visibility of Badge in `dot` variant. */
  isVisible: boolean;
};

type StandardBadgeProps = {
  /**
   * Badge visual variant. If set to `standard` the `count` property is required.
   * If set to `dot` the `isVisible` property is required.
   */
  variant?: 'standard';
  /** Set the badge count in the `standard` variant */
  count: number;
  /**
   * Set the position offset to fix potentional issues where the badge doesn't fit to base position.
   * The value will be set to transform-translate CSS property.
   */
  positionOffset?: string;
};

export type BadgeProps = (DotBadgeProps | StandardBadgeProps) & {
  children: ReactNode;
};

const BadgeRoot = styled.span`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
`;

const BadgeDot = styled.span`
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--sscds-color-danger-500);
  border-radius: var(--sscds-radii-circle);

  position: absolute;
  top: 0;
  right: 0;
  transform: translate(30%, -30%);
`;
const BadgeCount = styled.span`
  display: grid;
  place-content: center;
  min-width: 1rem;
  height: 1rem;
  background-color: var(--sscds-color-danger-600);
  border-radius: var(--sscds-radii-rounded);

  position: absolute;
  top: 0;
  right: 0;
  transform: var(--sscds-badge-translate);

  padding-inline: var(--sscds-space-1x);

  color: var(--sscds-color-text-inverse);
  font-size: var(--sscds-font-size-body-sm);
  font-weight: var(--sscds-font-weight-body-strong);
  line-height: 1;
`;

const normalizeCount = (count: number) => {
  if (count >= 100) {
    return '99+';
  }
  return count;
};

/* eslint-disable react/destructuring-assignment */
/**
 * Discriminated unions doesn't work on destructured props. We need to disable the rule to make
 * TypeScript correctly narrow type based on the `variant` property.
 */
function Badge(props: BadgeProps) {
  if (props.variant === 'dot') {
    return (
      <BadgeRoot>
        {props.children}
        {props.isVisible && <BadgeDot />}
      </BadgeRoot>
    );
  }

  return (
    <BadgeRoot>
      {props.children}
      {props.count > 0 && (
        <BadgeCount
          style={{
            '--sscds-badge-translate': `translate(${
              props.positionOffset ?? '50%, -50%'
            })`,
          }}
        >
          {normalizeCount(props.count)}
        </BadgeCount>
      )}
    </BadgeRoot>
  );
}
/* eslint-enable react/destructuring-assignment */

Badge.displayName = 'Badge';

export default Badge;
