import { HeaderGroup } from 'react-table';

export interface SortingIconProps {
  isSorted: boolean;
  isSortedDesc: boolean;
}

export interface TableHeadCellProps<D extends Record<string, unknown>> {
  column: HeaderGroup<D>;
}
