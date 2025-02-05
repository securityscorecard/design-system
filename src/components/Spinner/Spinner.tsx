import styled, { keyframes } from 'styled-components';
import cls from 'classnames';

import { pxToRem } from '../../utils';
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

const Spinner = styled.div.attrs<SpinnerProps>((props) => ({
  className: cls(CLX_COMPONENT, 'spinner'),
  dark: props.dark ?? false,
  width: props.width ?? 24,
  height: props.height ?? 24,
  verticalMargin: props.verticalMargin ?? 15,
  horizontalMargin: props.horizontalMargin ?? 'auto',
  borderWidth: props.borderWidth ?? 4,
}))<SpinnerProps>`
  margin-block: ${({ verticalMargin }) => pxToRem(verticalMargin)};
  margin-inline: ${({ horizontalMargin }) => pxToRem(horizontalMargin)};
  border-radius: 50%;
  width: ${({ width, size }) => pxToRem(size ?? width)};
  height: ${({ height, size }) => pxToRem(size ?? height)};
  animation: ${spin} 1s infinite linear;
  border: solid
    ${({ dark }) =>
      dark ? 'var(--sscds-color-neutral-alpha-6)' : 'var(--white-a4)'};
  border-width: ${({ borderWidth }) => `${borderWidth}px`};
  border-top-color: ${({ dark }) =>
    dark ? 'var(--sscds-color-neutral-11)' : 'var(--sscds-color-neutral-0)'};
`;

export default Spinner;
