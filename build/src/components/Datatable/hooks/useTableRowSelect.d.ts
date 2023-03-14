import { IdType } from 'react-table';
import { OnSelectFn } from '../Table/Table.types';
export declare const useTableRowSelect: <D>(onSelect: OnSelectFn<D>, defaultSelectedRowIds: IdType<D>[]) => void;
