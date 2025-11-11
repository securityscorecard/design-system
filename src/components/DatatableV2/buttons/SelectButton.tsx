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
      options: {
        enableBatchRowSelection,
        enableMultiRowSelection,
        persistVirtualAll,
      },
      refs: { lastSelectedRowIdRef: lastSelectedRowId },
      setVirtualSelectAll,
      setExcludedRows,
    } = table;

    const { isVirtualSelectAll, excludedRows } = getState();
    const wasCurrentRowChecked =
      row.getIsSelected() ||
      (isVirtualSelectAll &&
        (!persistVirtualAll || !(excludedRows ?? []).includes(row.id)));

    if (isVirtualSelectAll) {
      if (persistVirtualAll) {
        // With persistVirtualAll, keep isVirtualSelectAll true and track excluded rows
        if (wasCurrentRowChecked) {
          // Deselecting: add to excludedRows
          setExcludedRows((prev) => {
            if (!prev.includes(row.id)) {
              return [...prev, row.id];
            }
            return prev;
          });
          row.toggleSelected(false);
        } else {
          // Selecting: remove from excludedRows
          setExcludedRows((prev) => prev.filter((id) => id !== row.id));
          row.toggleSelected(true);
        }
        lastSelectedRowId.current = row.id;
        return;
      }

      // Original behavior: unchecking a row disables virtual select all
      setVirtualSelectAll(false);

      // When all rows are selected and the user unchecks one, the current selection
      // should change to all the rows except the one that was unchecked
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
    options: { selectAllMode, persistVirtualAll },
    getState,
    getRowModel,
  } = table;

  const { isVirtualSelectAll, excludedRows } = getState();

  const currentPageRows = getRowModel().rows;

  if (selectAllMode === 'virtual' && isVirtualSelectAll) {
    if (persistVirtualAll) {
      // All rows in current page are checked if none are excluded
      return !currentPageRows.some((row) =>
        (excludedRows ?? []).includes(row.id),
      );
    }
    // Without persistVirtualAll, isVirtualSelectAll means all rows are selected
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
      persistVirtualAll,
    },
    setVirtualSelectAll,
    setExcludedRows,
  } = table;
  const { isLoading, rowSelection, isVirtualSelectAll, excludedRows } =
    getState();
  const { t } = useSafeTranslation();

  const allRowsSelected = getIsAllRowsSelected(table);

  // For individual row checkbox: checked if virtual select all is true AND row is not excluded
  const rowChecked =
    isVirtualSelectAll && persistVirtualAll
      ? row && !(excludedRows ?? []).includes(row.id)
      : isVirtualSelectAll || row?.getIsSelected();

  const checked = isHeaderCheckbox ? allRowsSelected : rowChecked;

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
          if (persistVirtualAll) {
            const isChecked = (e.target as HTMLInputElement).checked;
            const currentPageRowIds = table.getRowModel().rows.map((r) => r.id);

            if (isChecked) {
              // Header checkbox is checked - remove all current page row IDs from excludedRows
              setExcludedRows((prev) =>
                prev.filter(
                  (id) => !currentPageRowIds.some((rowId) => rowId === id),
                ),
              );
            } else {
              // Header checkbox is unchecked - add all current page row IDs to excludedRows
              setExcludedRows((prev) => {
                const newExcluded = [...prev];
                currentPageRowIds.forEach((id) => {
                  if (!newExcluded.includes(id)) {
                    newExcluded.push(id);
                  }
                });
                return newExcluded;
              });
            }
          } else {
            // Original behavior when persistVirtualAll is false
            setVirtualSelectAll(false);
            table.toggleAllRowsSelected(false);
          }
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
