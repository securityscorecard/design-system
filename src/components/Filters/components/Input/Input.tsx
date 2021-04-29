import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { isNonEmptyString } from 'ramda-adjunct';

import { InputProps } from './Input.types';
import { Error } from '../../../forms/Message';
import {
  getBorderRadius,
  getFormStyle,
  pxToRem,
} from '../../../../utils/helpers';
import { validatePattern } from '../../helpers';

const stateStyles = css`
  padding: ${pxToRem(3, 15)};
  border: ${getFormStyle('statefulBorderWidth')} solid;
  outline: none;
`;

export const StyledInput = styled.input<InputProps>`
  display: block;
  width: 100%;
  height: ${pxToRem(32)};
  padding: ${pxToRem(4, 16)};
  background: ${getFormStyle('bgColor')};
  border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
  border-radius: ${getBorderRadius};
  color: ${getFormStyle('color')};
  font-size: ${pxToRem(13)};
  line-height: ${pxToRem(15)};

  &:focus {
    ${stateStyles}
    border-color: ${getFormStyle('focusBorderColor')};
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${getFormStyle('placeholderColor')};
  }
  :-ms-input-placeholder {
    color: ${getFormStyle('placeholderColor')};
  }

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      ${stateStyles}
      border-color: ${getFormStyle('invalidBorderColor')};
    `}
`;

const Input: React.FC<InputProps> = ({
  value = '',
  onChange,
  maxLength,
  pattern,
  errorMessage,
  onValidate = validatePattern,
  placeholder = 'String',
  isInvalid = false,
  onError,
}) => {
  const handleOnValidate = (event) => {
    const { target } = event;
    const hasError = onValidate(target) && isNonEmptyString(target.value);
    onError(hasError);
  };

  const handleOnChange = (event) => {
    onChange(event);
    handleOnValidate(event);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <>
      <StyledInput
        isInvalid={isInvalid}
        maxLength={maxLength}
        pattern={pattern}
        placeholder={placeholder}
        type="text"
        value={value}
        onBlur={handleOnValidate}
        onChange={handleOnChange}
        onKeyPress={handleKeyPress}
      />
      {isInvalid && <Error>{errorMessage}</Error>}
    </>
  );
};
Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  pattern: PropTypes.string,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  isInvalid: PropTypes.bool,
  onValidate: PropTypes.func,
  onError: PropTypes.func,
};
export default Input;
