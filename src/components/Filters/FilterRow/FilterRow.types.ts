import { DataPoint, Filter } from '../Filters.types';

export interface SplitFieldProps {
  width?: number;
}

export interface FilterRowProps extends Filter {
  id: string;
  dataPoints: DataPoint[];
  isFirstRow?: boolean;
}
