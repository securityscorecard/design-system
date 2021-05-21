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
  onConditionChange: (condition: string, value: string, index: number) => void;
  onValueChange: (value: string, index: number) => void;
  onRemove: (index: number) => React.MouseEventHandler;
  isDefaultState: boolean;
  isApplied: boolean;
  isLoading: boolean;
  isInvalid: boolean;
  onError?: (boolean) => void;
}
