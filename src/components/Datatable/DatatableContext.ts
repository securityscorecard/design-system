import { createContext } from 'react';
import { IdType } from 'react-table';

// TODO: move to separate file
export interface DatatableContextType<
  D extends Record<string, unknown> = Record<string, unknown>
> {
  totalLength: number;
  hasSelection?: boolean;
  selectedLength?: number;
  selectedIds?: string[];
  hasExclusionLogic?: boolean;
  setHasExclusionLogic?: React.Dispatch<React.SetStateAction<boolean>>;
  defaultHiddenColumns?: IdType<D>[];
  defaultColumnOrder?: IdType<D>[];
  shouldResetSelectedRows?: boolean;
  setShouldResetSelectedRows?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DatatableContext = createContext<DatatableContextType | undefined>(
  undefined,
);

export default DatatableContext;
