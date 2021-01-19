import { DataPoint, FilterRow } from '../Filters.types';

export interface SplitFieldProps {
  width?: number;
}

export interface FilterRowProps extends FilterRow {
  dataPoints: DataPoint[];
  isFirstRow?: boolean;
}
