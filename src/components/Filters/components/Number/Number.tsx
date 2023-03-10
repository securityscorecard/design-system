import type { FC } from 'react';
import type { NumberProps } from './Number.types';

import styled from 'styled-components';
import { isNonEmptyString } from 'ramda-adjunct';

import { StyledInput } from '../Input/Input';
import { Error } from '../../../forms/Message';
import { validateNumber } from '../../helpers';
import { NumberPropTypes } from './Number.types';

export const StyledNumber = styled(StyledInput)`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
  appearance: textfield;
`;

const Number: FC<NumberProps> = ({
  value = '',
  onChange,
  min,
  max,
  placeholder = 'Number',
  errorMessage = 'Use only numbers',
  isInvalid = false,
  onError,
}) => {
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
