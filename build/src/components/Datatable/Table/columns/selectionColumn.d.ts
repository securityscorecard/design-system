import React from 'react';
import { CellProps, HeaderProps } from 'react-table';
export declare const selectionColumn: {
    id: string;
    sticky: string;
    width: number;
    disableSortBy: boolean;
    Header: ({ getToggleAllRowsSelectedProps, dataSize, isMultiSelect, dispatch, state: { selectedRowIds: tableSelectedRowIds }, }: HeaderProps<Record<string, unknown>>) => React.ReactElement;
    cellType: "selection";
    Cell: ({ isMultiSelect, row, dispatch, }: CellProps<Record<string, unknown>>) => React.ReactElement;
};
