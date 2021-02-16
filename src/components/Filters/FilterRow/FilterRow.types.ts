import { Field, Filter } from '../Filters.types';
import { Option } from '../components/Select/Select.types';

export interface SplitFieldProps {
  $width?: number;
}

export interface FilterRowProps extends Filter {
  fields: Field[];
  index: number;
  onOperatorChange: (value: Option) => void;
  onFieldChange: (
    field: string,
    condition: string,
    value: string,
    index: number,
  ) => void;
  onConditionChange: (
    condition: string,
    index: number,
    areComponentsEqual: boolean,
  ) => void;
  onValueChange: (value: string, index: number) => void;
  onRemove: (index: number) => React.MouseEventHandler;
  isRemoveDisabled: boolean;
  isApplied: boolean;
}
