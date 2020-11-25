import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { pipe, prop, unless } from 'ramda';
import { isString } from 'ramda-adjunct';

import { pxToRem } from '../../utils/helpers';
import { SpinnerProps } from './Spinner.types';

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
  border: solid rgba(255, 255, 255, 0.2);
  border-width: ${({ borderWidth }) => `${borderWidth}px`};
  border-top-color: rgb(255, 255, 255);

  ${({ dark }) =>
    dark &&
    css`
      border-color: rgba(0, 0, 0, 0.2);
      border-top-color: rgb(0, 0, 0);
    `};
`;

Spinner.propTypes = {
  dark: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
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
