import { Option } from './Select/Select.types';

export interface FilterRow {
  id: string;
  conditionOptions: Option[];
  dataOptions: Option[];
  onRemove: () => void;
  isFilterApplied?: boolean;
}

export interface FilterProps {
  options: FilterRow[];
}
