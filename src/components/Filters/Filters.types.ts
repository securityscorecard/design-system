import { Option } from './Select/Select.types';
import { InputTypes } from './Filters.enums';

type InputValueTypes = typeof InputTypes[keyof typeof InputTypes];

export interface FilterRow {
  id: string;
  conditionOptions: Option[];
  defaultCondition?: Option;
  onRemove: () => void;
  inputType: InputValueTypes;
  enumOptions?: Option[];
  isFilterApplied?: boolean;
  onAdd?: () => void;
}

export interface FilterProps {
  dataOptions: Option[];
  rows: FilterRow[];
}
