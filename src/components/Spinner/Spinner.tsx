import styled, { keyframes } from 'styled-components';
import { pipe, prop, unless } from 'ramda';
import { isString } from 'ramda-adjunct';
import cls from 'classnames';

import { getColor, pxToRem } from '../../utils';
import { SpinnerProps } from './Spinner.types';
import { CLX_COMPONENT } from '../../theme/constants';

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

const Spinner = styled.div.attrs<SpinnerProps>((props) => ({
  className: cls(CLX_COMPONENT, 'spinner'),
  dark: props.dark ?? false,
  width: props.width ?? 24,
  height: props.height ?? 24,
  verticalMargin: props.verticalMargin ?? 15,
  horizontalMargin: props.horizontalMargin ?? 'auto',
  borderWidth: props.borderWidth ?? 4,
}))<SpinnerProps>`
  margin-top: ${({ verticalMargin }) => pxToRem(verticalMargin)};
  margin-bottom: ${({ verticalMargin }) => pxToRem(verticalMargin)};
  margin-left: ${getHorizontalMargin};
  margin-right: ${getHorizontalMargin};
  border-radius: 50%;
  width: ${({ width }) => pxToRem(width)};
  height: ${({ height }) => pxToRem(height)};
  animation: ${spin} 1s infinite linear;
  border: solid
    ${({ dark }) =>
      dark ? 'var(--sscds-slateA-slateA6)' : 'var(--sscds-whiteA-whiteA4)'};
  border-width: ${({ borderWidth }) => `${borderWidth}px`};
  border-top-color: ${({ dark, theme }) =>
    getColor(dark ? 'neutral.800' : 'neutral.0', { theme })};
`;

export default Spinner;
