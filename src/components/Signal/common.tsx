import { ComponentProps, PropsWithChildren } from 'react';
import cls from 'classnames';

import { CLX_COMPONENT } from '../../theme/constants';
import { svgPathData as positiveIcon } from '../../theme/icons/checkCircleSolid';
import { svgPathData as infoIcon } from '../../theme/icons/infoCircle';
import { svgPathData as criticalIcon } from '../../theme/icons/exclTriangleSolid';
import { BaseSvgProps } from './Signal.types';

export const criticalityLevels = {
  critical: 4,
  high: 3,
  medium: 2,
  low: 1,
  none: 0,
} as const;

const criticalityColorsSeverity = [
  undefined,
  'var(--sscds-color-signal-low)',
  'var(--sscds-color-signal-medium)',
  'var(--sscds-color-signal-high)',
];

function Svg({
  children,
  className,
  ...props
}: PropsWithChildren<ComponentProps<'svg'>>) {
  return (
    <svg
      className={cls(CLX_COMPONENT, className)}
      data-testid="ds-severity-icon"
      style={{
        overflow: 'visible',
        ...(props.style || {}),
      }}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}

function VerticalBar({
  height,
  xPos,
  fill = 'var(--sscds-color-signal-inactive)',
}: {
  height: number;
  xPos: number;
  fill: string;
}) {
  return (
    <rect
      height={height}
      rx={1.5}
      style={{ fill }}
      width={3}
      x={xPos}
      y={16 - height}
    />
  );
}

export function Vertical3Bars({
  criticality,
  size = 16,
  title,
  ...props
}: BaseSvgProps & { criticality: 0 | 1 | 2 | 3 }) {
  return (
    <Svg
      aria-hidden={props.ariaHidden}
      height={size}
      style={{ color: criticalityColorsSeverity[criticality] }}
      viewBox="0 0 16 16"
      width={size}
      {...props}
    >
      <title>{title}</title>
      {[0, 1, 2].map((v) => (
        <VerticalBar
          key={v}
          fill={v < criticality ? 'currentColor' : undefined}
          height={8 + v * 4}
          xPos={1.5 + v * 5}
        />
      ))}
    </Svg>
  );
}

export function Vertical4Bars({
  criticality,
  size = 16,
  title,
  ...props
}: BaseSvgProps & { criticality: 0 | 1 | 2 | 3 | 4 }) {
  return (
    <svg
      height={size}
      style={{ color: 'var(--sscds-color-signal-business-impact)' }}
      viewBox="0 0 18 16"
      width={(size / 16) * 18}
      {...props}
    >
      <title>{title}</title>
      {[0, 1, 2, 3].map((v) => (
        <VerticalBar
          key={v}
          fill={v < criticality ? 'currentColor' : undefined}
          height={4 + v * 4}
          xPos={v * 5}
        />
      ))}
    </svg>
  );
}

export function HorizontalBars({
  criticality,
  size = 16,
  title,
  ...props
}: BaseSvgProps & { criticality: 0 | 1 | 2 | 3 }) {
  return (
    <svg
      height={size}
      style={{ color: criticalityColorsSeverity[criticality] }}
      viewBox="0 0 16 16"
      width={size}
      {...props}
    >
      <title>{title}</title>
      {[0, 1, 2].map((v) => (
        <rect
          key={v}
          fill={
            v < criticality
              ? 'currentColor'
              : 'var(--sscds-color-signal-inactive)'
          }
          height="4"
          rx="2"
          width="16"
          y={12 - v * 6}
        />
      ))}
    </svg>
  );
}

export const Icon = ({
  signal,
  size = 16,
  title,
  ...props
}: BaseSvgProps & { signal: 'info' | 'positive' | 'critical' }) => (
  <Svg
    aria-hidden={props.ariaHidden}
    height={size}
    viewBox="0 0 512 512"
    width={size}
    {...props}
    style={{
      ...(props.style || {}),
      color:
        signal === 'info'
          ? 'var(--sscds-color-signal-info)'
          : signal === 'positive'
          ? 'var(--sscds-color-signal-positive)'
          : 'var(--sscds-color-signal-high)', // we are using fixed color because it's not defined in DS
    }}
  >
    <title>{title}</title>
    <path
      d={
        signal === 'info'
          ? infoIcon
          : signal === 'positive'
          ? positiveIcon
          : criticalIcon
      }
      fill="currentColor"
    />
  </Svg>
);
