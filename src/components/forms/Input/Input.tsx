import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import {
  createPadding,
  getFontFamily,
  getFontSize,
  getFormStyle,
  getRadii,
} from '../../../utils';
import { InputProps } from './Input.types';
import { SpaceSizes } from '../../../theme';
import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';

const Input = styled.input.attrs<InputProps>(({ isDisabled }) => ({
  disabled: isDisabled,
}))<InputProps>`
  display: block;
  width: 100%;
  height: ${getFormStyle('fieldHeight')};
  ${({ theme }) =>
    createPadding({
      paddingSize: SpaceSizes.md,
      paddingType: PaddingTypes.squish,
      theme,
    })};
  background: ${getFormStyle('bgColor')};
  border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
  border-radius: ${getRadii('default')};
  color: ${getFormStyle('color')};
  font-family: ${getFontFamily('base')};
  font-size: ${getFontSize('md')};
  line-height: ${getFormStyle('fieldLineHeight')};
  outline: none;

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      border-color: ${getFormStyle('invalidBorderColor')};
      box-shadow: inset 0px 0px 0px 1px ${getFormStyle('invalidBorderColor')};
    `}

  &:focus,
  &.focus {
    border-color: ${getFormStyle('focusBorderColor')};
    box-shadow: inset 0px 0px 0px 1px ${getFormStyle('focusBorderColor')};
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

  &[type='search']::-webkit-search-decoration,
  &[type='search']::-webkit-search-cancel-button,
  &[type='search']::-webkit-search-results-button,
  &[type='search']::-webkit-search-results-decoration {
    display: none;
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
