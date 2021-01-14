import { FilterRow } from '../Filters.types';

export interface SplitFieldProps {
  width?: number;
}

export interface FilterRowProps extends FilterRow {
  isFilterApplied?: boolean;
  isFirstRow?: boolean;
}
