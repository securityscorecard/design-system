import { ChangeEvent, ComponentProps, ComponentPropsWithoutRef } from 'react';
import clx from 'classnames';

import { DatatableInstance, DatatableRow } from '../Datatable.types';
import IndeterminateCheckbox from '../inputs/IndeterminateCheckbox';
import { useSafeTranslation } from '../../../hooks/useSafeTranslation';

const selectRowHandler =
  <D,>({ row, table }: { row: DatatableRow<D>; table: DatatableInstance<D> }) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    const {
      getState,
      options: { enableBatchRowSelection, enableMultiRowSelection },
      refs: { lastSelectedRowIdRef: lastSelectedRowId },
      setVirtualSelectAll,
    } = table;

    const { isVirtualSelectAll } = getState();
    const wasCurrentRowChecked = isVirtualSelectAll || row.getIsSelected();

    if (isVirtualSelectAll) {
      setVirtualSelectAll(false);

      // When all rows are selected and the user unchecks one, the current selection
      // should change to all the rows except the one that was unchecked<
      const { rows } = table.getPrePaginationRowModel();
      rows.forEach((r) => r.toggleSelected(row.index !== r.index));

      lastSelectedRowId.current = row.id;
      return;
    }

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

const getIsAllRowsSelected = <D,>(table: DatatableInstance<D>) => {
  const {
    options: { selectAllMode },
    getState,
  } = table;

  const { isVirtualSelectAll } = getState();

  if (selectAllMode === 'virtual' && isVirtualSelectAll) {
    return true;
  }

  return selectAllMode === 'all'
    ? table.getIsAllRowsSelected()
    : table.getIsAllPageRowsSelected();
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
    setVirtualSelectAll,
  } = table;
  const { isLoading, rowSelection, isVirtualSelectAll } = getState();
  const { t } = useSafeTranslation();

  const allRowsSelected = getIsAllRowsSelected(table);

  const checked =
    isVirtualSelectAll ||
    (isHeaderCheckbox ? allRowsSelected : row?.getIsSelected());

  const common: ComponentProps<'input'> = {
    checked,
    disabled: isLoading || (row && !row?.getCanSelect()),
    'aria-label': isHeaderCheckbox
      ? t('sscds|datatable.selection.toggleAll')
      : t('sscds|datatable.selection.toggleRow'),
    onChange: (e) => {
      e.stopPropagation();
      if (isHeaderCheckbox) {
        if (isVirtualSelectAll) {
          setVirtualSelectAll(false);
          table.toggleAllRowsSelected(false);
        }

        if (selectAllMode === 'all') {
          table.getToggleAllRowsSelectedHandler()(e);
        } else {
          table.getToggleAllPageRowsSelectedHandler()(e);
        }
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
