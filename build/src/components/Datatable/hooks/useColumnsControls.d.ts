import { Column, IdType } from 'react-table';
export declare const useColumnsControls: <D extends Record<string, unknown>>(onColumnOrderChange: (columnOrder: IdType<D>[]) => void, onColumnVisibilityChange: (hiddenColumns: IdType<D>[]) => void, columns: Column<D>[], defaultColumnOrder?: IdType<D>[], defaultHiddenColumns?: IdType<D>[]) => void;
