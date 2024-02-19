import type { ComponentProps, ComponentPropsWithoutRef } from 'react';
import type { DatatableInstance, DatatableRow } from '../Datatable.types';

import IndeterminateCheckbox from '../inputs/IndeterminateCheckbox';

const SelectButton = <D,>({
  row,
  table,
  isSelectAll,
  style,
}: {
  row?: DatatableRow<D>;
  table: DatatableInstance<D>;
  isSelectAll?: boolean;
} & ComponentPropsWithoutRef<'input'>) => {
  const {
    getState,
    options: { enableMultiRowSelection, selectAllMode },
  } = table;
  const { isLoading } = getState();

  const allRowsSelected = !isSelectAll
    ? undefined
    : selectAllMode === 'all'
    ? table.getIsAllRowsSelected()
    : table.getIsAllPageRowsSelected();

  const common: ComponentProps<'input'> = {
    checked: isSelectAll ? allRowsSelected : row?.getIsSelected(),
    disabled: isLoading || (row && !row?.getCanSelect()),
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

  const styles = {
    width: '1.25rem',
    height: '1.25rem',
    accentColor: 'var(--sscds-table-color-accent)',
    ...style,
  };

  return enableMultiRowSelection ? (
    <IndeterminateCheckbox
      className="ds-table-select-multi-button ds-table-select-button"
      indeterminate={
        isSelectAll ? table.getIsSomeRowsSelected() && !allRowsSelected : false
      }
      {...common}
      style={styles}
    />
  ) : (
    <input
      className="ds-table-select-single-button ds-table-select-button"
      type="radio"
      {...common}
      style={styles}
    />
  );
};

export default SelectButton;
