import { DatatableStoreShape } from '../../../Datatable.store';
export declare const compare: (order: string[]) => (a: string, b: string) => number;
export declare const sortColumns: (order: string[], columns: DatatableStoreShape['columns']) => string[];
export declare const useColumnOrder: () => {
    orderedColumns: string[];
    setLocalColumnOrder: React.Dispatch<React.SetStateAction<string[]>>;
    storeOrderedColumns: () => void;
    reinitializeOrderedColumns: () => void;
    resetOrderedColumns: () => void;
    isInDefaultOrder: boolean;
};
