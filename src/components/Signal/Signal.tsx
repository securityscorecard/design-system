import type { SignalProps } from './Signal.types';

import { prop } from 'ramda';
import { forwardRef } from 'react';
import { isNilOrEmpty, isUndefined } from 'ramda-adjunct';
import cls from 'classnames';

import { colors } from '../../theme/colors';
import { SignalKinds } from './Signal.enums';
import { CLX_COMPONENT } from '../../theme/constants';
import { svgPathData as positiveIcon } from '../../theme/icons/checkCircleSolid';
import { svgPathData as infoIcon } from '../../theme/icons/infoCircle';

interface BaseSvgProps {
  title: string;
  size?: number;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const INACTIVE_BAR_COLOR = '#0000001a';

const SeverityIcon = forwardRef<
  SVGSVGElement,
  BaseSvgProps & { colors: [string, string, string] }
>(
  (
    {
      colors: barColors = [
        INACTIVE_BAR_COLOR,
        INACTIVE_BAR_COLOR,
        INACTIVE_BAR_COLOR,
      ],
      className,
      size = 16,
      title,
      ...props
    },
    ref,
  ) => {
    return (
      <svg
        ref={ref}
        className={cls(CLX_COMPONENT, className)}
        data-testid="ds-severity-icon"
        height={size}
        viewBox="0 0 16 16"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        style={{ overflow: 'visible', ...(props.style || {}) }}
      >
        <title>{title}</title>

        <path
          d="M1.5 8C2.3125 8 3 8.6875 3 9.5V14.5C3 15.3438 2.3125 16 1.5 16C0.65625 16 0 15.3438 0 14.5V9.5C0 8.6875 0.65625 8 1.5 8Z"
          fill={barColors[0]}
        />
        <path
          d="M5 5.5C5 4.6875 5.65625 4 6.5 4C7.3125 4 8 4.6875 8 5.5V14.5C8 15.3438 7.3125 16 6.5 16C5.65625 16 5 15.3438 5 14.5V5.5Z"
          fill={barColors[1]}
        />
        <path
          d="M11.5 0C12.3125 0 13 0.6875 13 1.5V14.5C13 15.3438 12.3125 16 11.5 16C10.6562 16 10 15.3438 10 14.5V1.5C10 0.6875 10.6562 0 11.5 0Z"
          fill={barColors[2]}
        />
      </svg>
    );
  },
);

const RoundIcon = forwardRef<
  SVGSVGElement,
  BaseSvgProps & { signal: 'informational' | 'positive' }
>(({ signal, className, size = 16, title, ...props }, ref) => (
  <svg
    ref={ref}
    className={cls(CLX_COMPONENT, className)}
    data-testid="ds-severity-icon"
    height={size}
    viewBox="0 0 512 512"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{
      overflow: 'visible',
      ...(props.style || {}),
      color: `var(--sscds-severity-${signal})`,
    }}
  >
    <title>{title}</title>
    <path
      d={signal === 'positive' ? positiveIcon : infoIcon}
      fill="currentColor"
    />
  </svg>
));

const components = {
  [SignalKinds.low]: (props) => (
    <SeverityIcon
      colors={[colors.severity.low, INACTIVE_BAR_COLOR, INACTIVE_BAR_COLOR]}
      {...props}
    />
  ),
  [SignalKinds.medium]: (props) => (
    <SeverityIcon
      colors={[
        colors.severity.medium,
        colors.severity.medium,
        INACTIVE_BAR_COLOR,
      ]}
      {...props}
    />
  ),
  [SignalKinds.high]: (props) => (
    <SeverityIcon
      colors={[
        colors.severity.high,
        colors.severity.high,
        colors.severity.high,
      ]}
      {...props}
    />
  ),
  [SignalKinds.critical]: (props) => <SeverityIcon {...props} />,
  [SignalKinds.positive]: (props) => (
    <RoundIcon data-testid="ds-severity-icon" signal="positive" {...props} />
  ),
  [SignalKinds.info]: (props) => (
    <RoundIcon
      data-testid="ds-severity-icon"
      signal="informational"
      {...props}
    />
  ),
};

components[SignalKinds.negligible] = components[SignalKinds.info];
components[SignalKinds.critical] = components[SignalKinds.high];

const Signal = forwardRef<SVGSVGElement, SignalProps>(
  ({ kind, ...props }, ref) => {
    if (isNilOrEmpty(kind)) return null;

    const Component = prop(kind.toLowerCase(), components);

    if (isUndefined(Component)) return null;

    return <Component ref={ref} {...props} />;
  },
);

export default Signal;
