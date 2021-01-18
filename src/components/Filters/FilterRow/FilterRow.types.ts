import { Option } from '../Select/Select.types';
import { FilterRow } from '../Filters.types';

export interface SplitFieldProps {
  width?: number;
}

export interface FilterRowProps extends FilterRow {
  dataOptions: Option[];
  isFirstRow?: boolean;
}
