import React from 'react';
import PropTypes from 'prop-types';
import { prop } from 'ramda';
import { isNilOrEmpty, isUndefined } from 'ramda-adjunct';
import cls from 'classnames';

import { colors } from '../../theme/colors';
import { SignalProps } from './Signal.types';
import { SignalKinds } from './Signal.enums';
import { CLX_COMPONENT } from '../../theme/constants';

const kinds = {
  [SignalKinds.critical]: {
    color: colors.severity.high,
    paths: [
      'M4.57032 9.613H5.80232L6.02232 4.663H4.32832L4.57032 9.613ZM4.30632 11.23C4.30632 11.703 4.70232 12.11 5.18632 12.11C5.67032 12.11 6.06632 11.703 6.06632 11.23C6.06632 10.746 5.67032 10.339 5.18632 10.339C4.70232 10.339 4.30632 10.746 4.30632 11.23Z',
      'M7.38477 9.613H8.61677L8.83677 4.663H7.14277L7.38477 9.613ZM7.12077 11.23C7.12077 11.703 7.51677 12.11 8.00077 12.11C8.48477 12.11 8.88077 11.703 8.88077 11.23C8.88077 10.746 8.48477 10.339 8.00077 10.339C7.51677 10.339 7.12077 10.746 7.12077 11.23Z',
      'M10.1992 9.613H11.4312L11.6512 4.663H9.95723L10.1992 9.613ZM9.93523 11.23C9.93523 11.703 10.3312 12.11 10.8152 12.11C11.2992 12.11 11.6952 11.703 11.6952 11.23C11.6952 10.746 11.2992 10.339 10.8152 10.339C10.3312 10.339 9.93523 10.746 9.93523 11.23Z',
    ],
  },
  [SignalKinds.high]: {
    color: colors.severity.high,
    paths: [
      'M4.57032 9.613H5.80232L6.02232 4.663H4.32832L4.57032 9.613ZM4.30632 11.23C4.30632 11.703 4.70232 12.11 5.18632 12.11C5.67032 12.11 6.06632 11.703 6.06632 11.23C6.06632 10.746 5.67032 10.339 5.18632 10.339C4.70232 10.339 4.30632 10.746 4.30632 11.23Z',
      'M7.38477 9.613H8.61677L8.83677 4.663H7.14277L7.38477 9.613ZM7.12077 11.23C7.12077 11.703 7.51677 12.11 8.00077 12.11C8.48477 12.11 8.88077 11.703 8.88077 11.23C8.88077 10.746 8.48477 10.339 8.00077 10.339C7.51677 10.339 7.12077 10.746 7.12077 11.23Z',
      'M10.1992 9.613H11.4312L11.6512 4.663H9.95723L10.1992 9.613ZM9.93523 11.23C9.93523 11.703 10.3312 12.11 10.8152 12.11C11.2992 12.11 11.6952 11.703 11.6952 11.23C11.6952 10.746 11.2992 10.339 10.8152 10.339C10.3312 10.339 9.93523 10.746 9.93523 11.23Z',
    ],
  },
  [SignalKinds.medium]: {
    color: colors.severity.medium,
    paths: [
      'M5.97755 9.613H7.20955L7.42955 4.663H5.73555L5.97755 9.613ZM5.71355 11.23C5.71355 11.703 6.10955 12.11 6.59355 12.11C7.07755 12.11 7.47355 11.703 7.47355 11.23C7.47355 10.746 7.07755 10.339 6.59355 10.339C6.10955 10.339 5.71355 10.746 5.71355 11.23Z',
      'M8.792 9.613H10.024L10.244 4.663H8.55L8.792 9.613ZM8.528 11.23C8.528 11.703 8.924 12.11 9.408 12.11C9.892 12.11 10.288 11.703 10.288 11.23C10.288 10.746 9.892 10.339 9.408 10.339C8.924 10.339 8.528 10.746 8.528 11.23Z',
    ],
  },
  [SignalKinds.low]: {
    color: colors.severity.low,
    paths: [
      'M7.38477 9.613H8.61677L8.83677 4.663H7.14277L7.38477 9.613ZM7.12077 11.23C7.12077 11.703 7.51677 12.11 8.00077 12.11C8.48477 12.11 8.88077 11.703 8.88077 11.23C8.88077 10.746 8.48477 10.339 8.00077 10.339C7.51677 10.339 7.12077 10.746 7.12077 11.23Z',
    ],
  },
  [SignalKinds.positive]: {
    color: colors.severity.positive,
    paths: [
      'M6.71715 10.8663L4.11715 8.2663C3.96095 8.11009 3.96095 7.85683 4.11715 7.70061L4.68282 7.13492C4.83903 6.9787 5.09231 6.9787 5.24851 7.13492L7 8.88639L10.7515 5.13492C10.9077 4.97872 11.161 4.97872 11.3172 5.13492L11.8828 5.70061C12.0391 5.85681 12.0391 6.11008 11.8828 6.26629L7.28284 10.8663C7.12662 11.0225 6.87336 11.0225 6.71715 10.8663Z',
    ],
  },
  [SignalKinds.negligible]: {
    color: colors.severity.informational,
    paths: [
      'M8.00207 6.016C8.54107 6.016 8.97007 5.587 8.97007 5.048C8.97007 4.509 8.54107 4.08 8.00207 4.08C7.46307 4.08 7.03407 4.509 7.03407 5.048C7.03407 5.587 7.46307 6.016 8.00207 6.016ZM7.15507 12H8.84907V6.687H7.15507V12Z',
    ],
  },
  [SignalKinds.info]: {
    color: colors.severity.informational,
    paths: [
      'M8.00207 6.016C8.54107 6.016 8.97007 5.587 8.97007 5.048C8.97007 4.509 8.54107 4.08 8.00207 4.08C7.46307 4.08 7.03407 4.509 7.03407 5.048C7.03407 5.587 7.46307 6.016 8.00207 6.016ZM7.15507 12H8.84907V6.687H7.15507V12Z',
    ],
  },
};

const Signal: React.FC<SignalProps> = ({
  kind,
  size = 16,
  title = '',
  className,
  ...props
}) => {
  if (isNilOrEmpty(kind)) return null;

  const severityKind = prop(kind.toLowerCase(), kinds);

  if (isUndefined(severityKind)) return null;

  const { color, paths } = severityKind;

  return (
    <svg
      className={cls(CLX_COMPONENT, className)}
      data-testid="ds-severity-icon"
      height={size}
      viewBox="0 0 16 16"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{title}</title>
      <circle cx="8" cy="8" fill={color} r="8" />
      <g>
        {paths.map((path, key) => (
          <path
            // eslint-disable-next-line react/no-array-index-key
            key={`${kind}-icon-${key}`}
            d={path}
            fill={colors.neutral[0]}
          />
        ))}
      </g>
    </svg>
  );
};

Signal.propTypes = {
  kind: PropTypes.oneOf(Object.values(SignalKinds)).isRequired,
  size: PropTypes.number,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Signal;
