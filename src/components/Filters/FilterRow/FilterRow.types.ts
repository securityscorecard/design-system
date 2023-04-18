import type { MouseEventHandler } from 'react-select';
import type { Field, Filter } from '../Filters.types';
import type { Option } from '../../forms/Select/Select.types';
import type { Operators } from '../Filters.enums';

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
  onRemove: (index: number) => MouseEventHandler;
  isDefaultState: boolean;
  isApplied: boolean;
  isLoading: boolean;
  isInvalid: boolean;
  onError?: (boolean) => void;
  isOperatorFieldEnabled?: boolean;
  defaultOperator?: typeof Operators[keyof typeof Operators];
  hasApplyButton?: boolean;
}
