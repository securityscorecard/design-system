import React, { useEffect, useRef } from 'react';
import {
  CellProps,
  Column,
  HeaderProps,
  TableToggleCommonProps,
} from 'react-table';

import {
  CellTypes,
  SELECTION_COLUMN_ID,
} from '../../../_internal/BaseTable/renderers/renderers.enums';
import { TableCheckbox } from '../components';
import { actions } from '../Table.reducer';

interface IndeterminateCheckbox extends TableToggleCommonProps {
  id: string;
  isDisabled?: boolean;
}
const IndeterminateCheckbox = React.forwardRef(
  (
    { id, indeterminate, isDisabled = false, ...rest }: IndeterminateCheckbox,
    ref: React.MutableRefObject<HTMLInputElement>,
  ): React.ReactElement => {
    const defaultRef = useRef<HTMLInputElement>();
    const resolvedRef = ref || defaultRef;
    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <TableCheckbox
        ref={resolvedRef}
        checkboxId={id}
        isDisabled={isDisabled}
        isIndeterminate={indeterminate}
        name={rest.title}
        type="checkbox"
        {...rest}
      />
    );
  },
);

export function getSelectionColumn<
  D extends Record<string, unknown>,
>(): Column<D> {
  return {
    id: SELECTION_COLUMN_ID,
    sticky: 'left',
    width: 48,
    disableSortBy: true,
    Header: ({
      getToggleAllRowsSelectedProps,
      dataSize,
      isMultiSelect,
      dispatch,
      state: { selectedRowIds: tableSelectedRowIds },
    }: HeaderProps<D>) => {
      if (dataSize === 0) return null;

      const selectedLength = Object.keys(tableSelectedRowIds).length;
      const indeterminate = selectedLength > 0 && selectedLength < dataSize;

      return (
        <IndeterminateCheckbox
          id="header-select-all"
          {...getToggleAllRowsSelectedProps({
            ...(!isMultiSelect
              ? {
                  onChange() {
                    dispatch({
                      type: actions.deselectAllRows,
                    });
                  },
                }
              : {}),
          })}
          indeterminate={indeterminate}
          isDisabled={!isMultiSelect && selectedLength === 0}
        />
      );
    },
    cellType: CellTypes.selection,
    Cell: ({ isMultiSelect, row, dispatch }: CellProps<D>) => {
      const id = `row-${row.id}`;

      return (
        <IndeterminateCheckbox
          id={id}
          {...row.getToggleRowSelectedProps({
            ...(!isMultiSelect
              ? {
                  onChange(e: React.ChangeEvent<HTMLInputElement>) {
                    dispatch({
                      type: actions.toggleSingleRowSelected,
                      id: row.id,
                      value: e.target.checked,
                    });
                  },
                }
              : {}),
          })}
        />
      );
    },
  };
}
