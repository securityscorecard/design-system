import React from 'react';
import PropTypes from 'prop-types';

import { Input } from '../Input';
import { NumberProps } from './Number.types';

const Number: React.FC<NumberProps> = ({ value = '', onChange }) => {
  const handleInputChange = (event) => {
    const newValue = event.target.validity.valid ? event.target.value : value;
    onChange(newValue);
  };

  return (
    <Input
      pattern="[0-9]*"
      placeholder="Integer"
      type="text"
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default Number;

Number.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
