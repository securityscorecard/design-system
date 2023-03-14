import React from 'react';
import { TableProps } from './Table.types';
declare function Table<D extends Record<string, unknown>>({ columns, data, dataSize, NoDataComponent, hasPagination, defaultPageSize, hasSorting, defaultSortBy, defaultPageIndex, isDataLoading, onPageChange, onSortChange, rowActions, dataPrimaryKey, }: TableProps<D>): React.ReactElement;
declare namespace Table {
    var propTypes: {
        NoDataComponent: any;
        hasPagination: any;
        defaultPageSize: any;
        hasSorting: any;
        defaultPageIndex: any;
        defaultSortBy: any;
        rowActions: any;
        dataPrimaryKey: any;
        onPageChange: any;
        onSortChange: any;
    };
    var displayName: string;
}
export default Table;
