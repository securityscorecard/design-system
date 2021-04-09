import React from 'react';
import styled from 'styled-components';

import { StyledInput } from '../Input/Input';
import { NumberPropTypes, NumberProps } from './Number.types';

export const StyledNumber = styled(StyledInput)`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
  appearance: textfield;
`;

const Number: React.FC<NumberProps> = ({
  value = '',
  onChange,
  min,
  max,
  placeholder = 'Number',
}) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <StyledNumber
      max={max}
      min={min}
      placeholder={placeholder}
      step="any"
      type="number"
      value={value}
      onChange={onChange}
      onKeyPress={handleKeyPress}
    />
  );
};

export default Number;

Number.propTypes = NumberPropTypes;
