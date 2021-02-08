import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import {
  createPaddingSpacing,
  getBorderRadius,
  getFontFamily,
  getFontSize,
  getFormStyle,
  getLineHeight,
} from '../../../utils/helpers';
import { InputProps } from './Input.types';

const stateStyles = css`
  ${createPaddingSpacing({ vertical: 0.4, horizontal: 0.9 })};
  border: ${getFormStyle('statefulBorderWidth')} solid;
  outline: none;
`;

const Input = styled.input.attrs<InputProps>(({ isDisabled }) => ({
  disabled: isDisabled,
}))<InputProps>`
  display: block;
  width: 100%;
  height: ${getFormStyle('fieldHeight')};
  ${createPaddingSpacing({ vertical: 0.45, horizontal: 0.95 })};
  background: ${getFormStyle('bgColor')};
  border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
  border-radius: ${getBorderRadius};
  color: ${getFormStyle('color')};
  font-family: ${getFontFamily('base')};
  font-size: ${getFontSize('lg')};
  line-height: ${getLineHeight('lg')};

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      ${stateStyles}
      border-color: ${getFormStyle('invalidBorderColor')};
    `}

  &:focus,
  &.focus {
    ${stateStyles}
    border-color: ${getFormStyle('focusBorderColor')};
  }

  &:disabled {
    background: ${getFormStyle('disabledBgColor')};
    border-color: ${getFormStyle('disabledBorderColor')};
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${getFormStyle('placeholderColor')};
  }
  :-ms-input-placeholder {
    color: ${getFormStyle('placeholderColor')};
  }
`;

Input.propTypes = {
  isInvalid: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

Input.defaultProps = {
  isInvalid: false,
  isDisabled: false,
  type: 'text',
};

export default Input;
