import React, { useEffect, useRef } from 'react';
import { CellProps, HeaderProps, TableToggleCommonProps } from 'react-table';

import {
  CellTypes,
  SELECTION_COLUMN_ID,
} from '../Body/renderers/renderers.enums';
import TableCheckbox from '../components/TableCheckbox';

interface IndeterminateCheckbox extends TableToggleCommonProps {
  id: string;
}
const IndeterminateCheckbox = React.forwardRef(
  (
    { id, indeterminate, ...rest }: IndeterminateCheckbox,
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
        isIndeterminate={indeterminate}
        name={rest.title}
        type="checkbox"
        {...rest}
      />
    );
  },
);

export const selectionColumn = {
  id: SELECTION_COLUMN_ID,
  sticky: 'left',
  width: 48,
  disableSortBy: true,
  Header: ({
    getToggleAllRowsSelectedProps,
    dataSize,
    state: { selectedRowIds: tableSelectedRowIds },
  }: HeaderProps<Record<string, unknown>>): React.ReactElement => {
    if (dataSize === 0) return null;

    const selectedLength = Object.keys(tableSelectedRowIds).length;
    const indeterminate = selectedLength > 0 && selectedLength < dataSize;

    return (
      <IndeterminateCheckbox
        id="header-select-all"
        {...getToggleAllRowsSelectedProps()}
        indeterminate={indeterminate}
      />
    );
  },
  cellType: CellTypes.selection,
  Cell: ({ row }: CellProps<Record<string, unknown>>): React.ReactElement => (
    <IndeterminateCheckbox
      id={`row-${row.id}`}
      {...row.getToggleRowSelectedProps()}
    />
  ),
};
