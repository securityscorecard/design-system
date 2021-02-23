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

// TODO Safari doesn't indicate wrong input
const Number: React.FC<NumberProps> = ({ value = '', onChange }) => (
  <StyledNumber
    placeholder="Number"
    type="number"
    value={value}
    onChange={onChange}
  />
);

export default Number;

Number.propTypes = NumberPropTypes;
