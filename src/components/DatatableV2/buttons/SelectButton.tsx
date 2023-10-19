/* eslint-disable react/prop-types */
import { Row } from '@tanstack/react-table';
import React, { ComponentProps, useEffect, useRef } from 'react';

import { DatatableInstance } from '../Datatable.types';

const IndeterminateCheckbox = ({
  indeterminate,
  ...props
}: ComponentProps<'input'> & { indeterminate?: boolean }) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !props.checked && indeterminate;
    }
  }, [ref, indeterminate, props.checked]);

  return <input ref={ref} type="checkbox" {...props} />;
};

const SelectButton = <D,>({
  row,
  table,
  isSelectAll,
}: {
  row?: Row<D>;
  table: DatatableInstance<D>;
  isSelectAll?: boolean;
}) => {
  const {
    options: { enableMultiRowSelection, selectAllMode },
  } = table;

  const allRowsSelected = !isSelectAll
    ? undefined
    : selectAllMode === 'all'
    ? table.getIsAllRowsSelected()
    : table.getIsAllPageRowsSelected();

  const common: ComponentProps<'input'> = {
    checked: isSelectAll ? allRowsSelected : row?.getIsSelected(),
    disabled: row && !row?.getCanSelect(),
    'aria-label': isSelectAll ? 'Toggle select all' : 'Toggle select row',
    onChange: (e) => {
      e.stopPropagation();
      row
        ? row.getToggleSelectedHandler()(e)
        : selectAllMode === 'all'
        ? table.getToggleAllRowsSelectedHandler()(e)
        : table.getToggleAllPageRowsSelectedHandler()(e);
    },
  };

  return enableMultiRowSelection ? (
    <IndeterminateCheckbox
      indeterminate={
        isSelectAll ? table.getIsSomeRowsSelected() && !allRowsSelected : false
      }
      {...common}
    />
  ) : (
    <input type="radio" {...common} />
  );
};

export default SelectButton;
