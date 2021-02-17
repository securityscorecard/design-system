import { Cell } from 'react-table';

export interface TableCellProps<D extends Record<string, unknown>> {
  cell: Cell<D>;
  isOdd: boolean;
  hasExclusionLogic: boolean;
}
