import { DataPoint, Filter } from '../Filters.types';
import { Option } from '../Select/Select.types';

export interface SplitFieldProps {
  width?: number;
}

export interface FilterRowProps extends Filter {
  dataPoints: DataPoint[];
  index: number;
  onOperatorChange: (value: Option) => void;
  onDataPointChange: (
    dataPoint: string,
    condition: string,
    index: number,
  ) => void;
  onConditionChange: (
    condition: string,
    index: number,
    areComponentsEqual: boolean,
  ) => void;
  onInputChange: (input: string, index: number) => void;
  onRemove: (index: number) => React.MouseEventHandler;
  isRemoveDisabled: boolean;
  isApplied: boolean;
}
