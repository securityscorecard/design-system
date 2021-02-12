import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StyledInput } from '../Input/Input';
import { NumberProps } from './Number.types';

const StyledNumber = styled(StyledInput)`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
  appearance: textfield;
`;

/* TODO Safari doesn't indicate wrong input */
const Number: React.FC<NumberProps> = ({ value = '', onChange }) => (
  <StyledNumber
    placeholder="Number"
    type="number"
    value={value}
    onChange={onChange}
  />
);

export default Number;

Number.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
