import { Option } from './Select/Select.types';
import { InputTypes } from './Filters.enums';

type InputValueTypes = typeof InputTypes[keyof typeof InputTypes];

type Condition = {
  option: Option;
  inputType: InputValueTypes;
  enumOptions?: Option[];
};

export interface FilterRow {
  id: string;
  conditions: Condition[];
  onRemove: () => void;
  onAdd?: () => void;
  isFilterApplied?: boolean;
}

export interface DataPoint {
  option: Option;
  defaultCondition: Option;
}

export interface FilterProps {
  dataPoints: DataPoint[];
  rows: FilterRow[];
}
