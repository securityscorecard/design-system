import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { InputProps } from './Input.types';
import {
  getBorderRadius,
  getFormStyle,
  pxToRem,
} from '../../../../utils/helpers';

const stateStyles = css`
  padding: ${pxToRem(3, 15)};
  border: ${getFormStyle('statefulBorderWidth')} solid;
  outline: none;
`;

export const StyledInput = styled.input`
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

  &:invalid {
    ${stateStyles}
    border-color: ${getFormStyle('invalidBorderColor')};
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${getFormStyle('placeholderColor')};
  }
  :-ms-input-placeholder {
    color: ${getFormStyle('placeholderColor')};
  }
`;

const Input: React.FC<InputProps> = ({
  value = '',
  onChange,
  maxLength,
  pattern,
  patternMessage,
}) => {
  const handleOnChange = (event) => {
    if (patternMessage) {
      const { target } = event;
      target.setCustomValidity(
        target.validity.patternMismatch ? patternMessage : '',
      );
    }

    onChange(event);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <StyledInput
      maxLength={maxLength}
      pattern={pattern}
      placeholder="String"
      type="text"
      value={value}
      onChange={handleOnChange}
      onKeyPress={handleKeyPress}
    />
  );
};

export default Input;

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  pattern: PropTypes.string,
  patternMessage: PropTypes.string,
};
