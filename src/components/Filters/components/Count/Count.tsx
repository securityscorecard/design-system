import type { FC } from 'react';
import type { NumberProps } from '../Number/Number.types';

import { isNonEmptyString } from 'ramda-adjunct';

import { StyledNumber } from '../Number/Number';
import { Error } from '../../../forms/Message';
import { validateNumber } from '../../helpers';
import { NumberPropTypes } from '../Number/Number.types';

const Count: FC<NumberProps> = ({
  value = '',
  onChange,
  min,
  max,
  placeholder = 'Count',
  errorMessage = 'Use only integers',
  isInvalid = false,
  onError,
}) => {
  const handleKeyPress = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };
  const handleOnChange = (event) => {
    onChange(event);
    const hasError =
      !validateNumber(event.target.value, min, max) &&
      isNonEmptyString(event.target.value);

    onError(hasError);
  };

  return (
    <>
      <StyledNumber
        isInvalid={isInvalid}
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

export default Count;

Count.propTypes = NumberPropTypes;
