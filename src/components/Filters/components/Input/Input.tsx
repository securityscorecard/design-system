import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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

export const StyledInput = styled.input.attrs<InputProps>(({ isDisabled }) => ({
  disabled: isDisabled,
}))<InputProps>`
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
  patternMessage,
  onValidate = validatePattern,
  placeholder = 'String',
  isDisabled = false,
  onError,
}) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const handleOnValidate = (event) => {
    const { target } = event;
    const hasError = onValidate(target);
    setIsInvalid(hasError);
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
        isDisabled={isDisabled}
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
      {isInvalid && <Error>{patternMessage}</Error>}
    </>
  );
};
Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  pattern: PropTypes.string,
  patternMessage: PropTypes.string,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  onValidate: PropTypes.func,
  onError: PropTypes.func,
};
export default Input;
