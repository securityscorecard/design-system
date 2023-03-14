import React from 'react';
import { TableProps } from './Table.types';
declare function Table<D extends Record<string, unknown>>({ columns, data, dataPrimaryKey, dataSize, isDataLoading, rowActions, NoMatchingDataComponent, NoDataComponent, hasSelection, isMultiSelect, defaultSelectedRows, hasPagination, hasServerSidePagination, isCancelDisabled, onCancelLoading, defaultPageSize, hasSorting, hasServerSideSorting, defaultSortBy, defaultPageIndex, defaultColumnOrder, defaultHiddenColumns, pageButtonsCount, }: TableProps<D> & {
    pageButtonsCount?: number;
}): React.ReactElement;
declare namespace Table {
    var displayName: string;
}
export default Table;
