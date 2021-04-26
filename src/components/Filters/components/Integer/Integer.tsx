import React, { useState } from 'react';

import { StyledNumber } from '../Number/Number';
import { Error } from '../../../forms/Message';
import { validateNumber } from '../../helpers';
import { NumberPropTypes, NumberProps } from '../Number/Number.types';

const Integer: React.FC<NumberProps> = ({
  value = '',
  onChange,
  min,
  max,
  placeholder = 'Integer',
  errorMessage = 'Use only integers',
  onError,
}) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const handleKeyPress = (event) => {
    if (!/-|[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleOnChange = (event) => {
    onChange(event);
    const hasError = !validateNumber(event.target.value, min, max);
    setIsInvalid(hasError);
    onError(hasError);
  };

  return (
    <>
      <StyledNumber
        placeholder={placeholder}
        type="number"
        value={value}
        onChange={handleOnChange}
        onKeyPress={handleKeyPress}
      />
      {isInvalid && <Error>{errorMessage}</Error>}
    </>
  );
};

export default Integer;

Integer.propTypes = NumberPropTypes;
