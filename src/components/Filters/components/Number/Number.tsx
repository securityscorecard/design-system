import React from 'react';
import { isNonEmptyString } from 'ramda-adjunct';

import { Error } from '../../../forms/Message';
import { validateNumber } from '../../helpers';
import { NumberPropTypes, NumberProps } from './Number.types';
import { Input } from '../../../forms';

const Number = ({
  value = '',
  onChange,
  min,
  max,
  placeholder = 'Number',
  errorMessage = 'Use only numbers',
  isInvalid = false,
  onError,
}: NumberProps) => {
  const handleOnChange = (event) => {
    onChange(event);
    const hasError =
      !validateNumber(event.target.value, min, max) &&
      isNonEmptyString(event.target.value);
    onError(hasError);
  };

  return (
    <>
      <Input
        data-has-spin="false"
        isInvalid={isInvalid}
        placeholder={placeholder}
        step="any"
        type="number"
        value={value}
        onChange={handleOnChange}
      />
      {isInvalid && <Error>{errorMessage}</Error>}
    </>
  );
};

export default Number;

Number.propTypes = NumberPropTypes;
