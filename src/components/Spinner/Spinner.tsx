import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { pipe, prop, unless } from 'ramda';
import { isString } from 'ramda-adjunct';
import { transparentize } from 'polished';

import { getColor, pxToRem } from '../../utils';
import { SpinnerProps } from './Spinner.types';
import { ColorTypes } from '../../theme';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const getHorizontalMargin = pipe(
  prop('horizontalMargin'),
  unless(isString, pxToRem),
);

const Spinner = styled.div<SpinnerProps>`
  margin-top: ${({ verticalMargin }) => pxToRem(verticalMargin)};
  margin-bottom: ${({ verticalMargin }) => pxToRem(verticalMargin)};
  margin-left: ${getHorizontalMargin};
  margin-right: ${getHorizontalMargin};
  border-radius: 50%;
  width: ${({ width }) => pxToRem(width)};
  height: ${({ height }) => pxToRem(height)};
  animation: ${spin} 1s infinite linear;
  border: solid
    ${({ dark, color, theme }) =>
      transparentize(0.8)(
        getColor(color || (dark ? 'neutral.1000' : 'neutral.0'), { theme }),
      )};
  border-width: ${({ borderWidth }) => `${borderWidth}px`};
  border-top-color: ${({ dark, color, theme }) =>
    getColor(color || (dark ? 'neutral.1000' : 'neutral.0'), { theme })};
`;

Spinner.propTypes = {
  dark: PropTypes.bool,
  color: PropTypes.oneOf(Object.values(ColorTypes)),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  verticalMargin: PropTypes.number,
  horizontalMargin: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf<'auto'>(['auto']),
  ]),
  borderWidth: PropTypes.number,
};

Spinner.defaultProps = {
  className: 'spinner',
  dark: false,
  width: 24,
  height: 24,
  verticalMargin: 15,
  horizontalMargin: 'auto',
  borderWidth: 4,
};

export default Spinner;
