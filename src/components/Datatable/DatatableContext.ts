import { createContext } from 'react';

// TODO: move to separate file
export interface DatatableContextType {
  totalLength: number;
  selectedLength?: number;
  selectedIds?: string[];
  setSelectedIds?: React.Dispatch<React.SetStateAction<string[]>>;
}

const DatatableContext = createContext<DatatableContextType | undefined>(
  undefined,
);

export default DatatableContext;
