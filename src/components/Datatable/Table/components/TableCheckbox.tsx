import { type MutableRefObject, forwardRef } from 'react';
import cls from 'classnames';

import * as checked from '../../../../theme/icons/check';
import * as indeterminate from '../../../../theme/icons/minus';
import { Checkbox } from '../../../forms';
import { TableCheckboxProps } from './TableCheckbox.types';

const generateIconProps = ({ width, height, svgPathData }) => ({
  viewBox: `0 0 ${width} ${height}`,
  children: <path d={svgPathData} fill="currentColor" />,
});

function Mark({ children, ...props }) {
  return (
    <svg role="img" xmlns="http://www.w3.org/2000/svg" {...props}>
      {children}
    </svg>
  );
}
Mark.displayName = 'Mark';

const TableCheckbox = forwardRef(
  (
    {
      name,
      checkboxId,
      isIndeterminate,
      isDisabled,
      style,
      ...props
    }: TableCheckboxProps,
    ref: MutableRefObject<HTMLInputElement>,
  ) => (
    <div className="ds-table-checkbox">
      <input
        ref={ref}
        className={cls('ds-table-checkbox-input', {
          'is-indeterminate': isIndeterminate,
        })}
        disabled={isDisabled}
        id={checkboxId}
        name={name}
        type="checkbox"
        {...props}
      />
      <div className="ds-table-checkbox-mark">
        <Mark
          className="ds-table-checkbox-icon"
          role="presentation"
          {...generateIconProps(isIndeterminate ? indeterminate : checked)}
        />
      </div>
      <label
        className="ds-table-checkbox-label"
        htmlFor={checkboxId}
        style={style}
      >
        <span className="sr-only">Toggle select</span>
      </label>
    </div>
  ),
);

TableCheckbox.propTypes = Checkbox.propTypes;

export default TableCheckbox;
