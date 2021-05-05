import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { TableRadioProps } from './TableRadio.types';

const TableRadio = forwardRef(
  (
    { name, radioId, style, ...props }: TableRadioProps,
    ref: React.MutableRefObject<HTMLInputElement>,
  ) => (
    <div className="ds-table-radio">
      <input
        ref={ref}
        className="ds-table-radio-input"
        id={radioId}
        name={name}
        type="radio"
        {...props}
      />
      <label
        aria-label="Toggle select"
        className="ds-table-radio-label"
        htmlFor={radioId}
        style={style}
      />
    </div>
  ),
);

TableRadio.propTypes = {
  radioId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TableRadio;
