import type { HeaderGroup } from 'react-table';

export interface SortingIconProps {
  isSorted: boolean;
  isSortedDesc: boolean;
}
export interface HeadProps<D extends Record<string, unknown>> {
  headerGroups: HeaderGroup<D>[];
}
