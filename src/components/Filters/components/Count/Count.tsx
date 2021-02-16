import React from 'react';

import { StyledNumber } from '../Number/Number';
import { NumberPropTypes, NumberProps } from '../Number/Number.types';

// TODO Safari doesn't indicate wrong input
const Count: React.FC<NumberProps> = ({ value = '', onChange }) => (
  <StyledNumber
    placeholder="Count"
    type="number"
    value={value}
    onChange={onChange}
    onKeyPress={(event) => {
      if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
      }
    }}
  />
);

export default Count;

Count.propTypes = NumberPropTypes;
