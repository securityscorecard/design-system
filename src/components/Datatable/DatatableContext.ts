import { createContext } from 'react';
import { IdType } from 'react-table';

// TODO: move to separate file
export interface DatatableContextType<
  D extends Record<string, unknown> = Record<string, unknown>
> {
  totalLength: number;
  selectedLength?: number;
  selectedIds?: string[];
  setSelectedIds?: React.Dispatch<React.SetStateAction<string[]>>;
  defaultHiddenColumns?: IdType<D>[];
  defaultColumnOrder?: IdType<D>[];
}

const DatatableContext = createContext<DatatableContextType | undefined>(
  undefined,
);

export default DatatableContext;
