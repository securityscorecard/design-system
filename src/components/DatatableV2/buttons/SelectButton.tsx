import { ChangeEvent, ComponentProps, ComponentPropsWithoutRef } from 'react';
import clx from 'classnames';

import { DatatableInstance, DatatableRow } from '../Datatable.types';
import IndeterminateCheckbox from '../inputs/IndeterminateCheckbox';
import { useSafeTranslation } from '../../../hooks/useSafeTranslation';

const selectRowHandler =
  <D,>({ row, table }: { row: DatatableRow<D>; table: DatatableInstance<D> }) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    const {
      options: { enableBatchRowSelection, enableMultiRowSelection },
      refs: { lastSelectedRowIdRef: lastSelectedRowId },
    } = table;
    const wasCurrentRowChecked = row.getIsSelected();

    row.toggleSelected(!wasCurrentRowChecked);

    if (
      enableBatchRowSelection &&
      enableMultiRowSelection &&
      (event.nativeEvent as PointerEvent).shiftKey &&
      lastSelectedRowId.current !== null
    ) {
      const { rows } = table.getPrePaginationRowModel();
      const lastIndex = rows.findIndex(
        (r) => r.id === lastSelectedRowId.current,
      );

      if (lastIndex !== -1) {
        const isLastIndexChecked = rows[lastIndex].getIsSelected();
        const currentIndex = rows.findIndex((r) => r.id === row.id);
        const [start, end] =
          lastIndex < currentIndex
            ? [lastIndex, currentIndex]
            : [currentIndex, lastIndex];
        if (wasCurrentRowChecked !== isLastIndexChecked) {
          for (let i = start; i <= end; i++) {
            rows[i].toggleSelected(!wasCurrentRowChecked);
          }
        }
      }
    }

    lastSelectedRowId.current = row.id;
  };

const SelectButton = <D,>({
  row,
  table,
  isHeaderCheckbox = false,
  hasTargetWrapper = false,
  style,
}: {
  row?: DatatableRow<D>;
  table: DatatableInstance<D>;
  isHeaderCheckbox?: boolean;
  hasTargetWrapper?: boolean;
} & ComponentPropsWithoutRef<'input'>) => {
  const {
    getState,
    options: {
      enableMultiRowSelection,
      selectAllMode,
      manualPagination,
      rowSelectionMode,
    },
  } = table;
  const { isLoading, rowSelection } = getState();
  const { t } = useSafeTranslation();

  const allRowsSelected =
    selectAllMode === 'all'
      ? table.getIsAllRowsSelected()
      : table.getIsAllPageRowsSelected();

  const common: ComponentProps<'input'> = {
    checked: isHeaderCheckbox ? allRowsSelected : row?.getIsSelected(),
    disabled: isLoading || (row && !row?.getCanSelect()),
    'aria-label': isHeaderCheckbox
      ? t('sscds|datatable.selection.toggleAll')
      : t('sscds|datatable.selection.toggleRow'),
    onChange: (e) => {
      e.stopPropagation();

      if (isHeaderCheckbox) {
        selectAllMode === 'all'
          ? table.getToggleAllRowsSelectedHandler()(e)
          : table.getToggleAllPageRowsSelectedHandler()(e);
      } else {
        selectRowHandler({ row, table })(e);
      }
    },
  };

  const styles = {
    width: '1.25rem',
    height: '1.25rem',
    accentColor: 'var(--sscds-table-color-accent)',
  };

  return enableMultiRowSelection ? (
    // IndeterminateCheckbox is input field wrapper association is done by wrapping the component
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label
      className={clx({ 'ds-table-select-button-target': hasTargetWrapper })}
      style={style}
    >
      <IndeterminateCheckbox
        className="ds-table-select-multi-button ds-table-select-button"
        indeterminate={
          !isHeaderCheckbox
            ? false
            : manualPagination && rowSelectionMode === 'single-page'
            ? table.getIsSomePageRowsSelected() && !allRowsSelected
            : Object.values(rowSelection ?? {}).filter(Boolean).length > 0 &&
              !allRowsSelected
        }
        {...common}
        style={styles}
      />
    </label>
  ) : (
    <label
      className={clx({ 'ds-table-select-button-target': hasTargetWrapper })}
    >
      <input
        className="ds-table-select-single-button ds-table-select-button"
        type="radio"
        {...common}
        style={styles}
      />
    </label>
  );
};

export default SelectButton;
