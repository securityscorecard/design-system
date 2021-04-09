import React from 'react';

import { StyledNumber } from '../Number/Number';
import { NumberPropTypes, NumberProps } from '../Number/Number.types';

const Integer: React.FC<NumberProps> = ({
  value = '',
  onChange,
  min,
  max,
  placeholder = 'Integer',
}) => {
  const handleKeyPress = (event) => {
    if (!/-|[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };
  return (
    <StyledNumber
      max={max}
      min={min}
      placeholder={placeholder}
      type="number"
      value={value}
      onChange={onChange}
      onKeyPress={handleKeyPress}
    />
  );
};

export default Integer;

Integer.propTypes = NumberPropTypes;
