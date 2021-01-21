import PropTypes from 'prop-types';

import { Option, OptionPropType } from './Select/Select.types';
import { Operators } from './Filters.enums';

type OperatorTypes = typeof Operators[keyof typeof Operators];

interface InputProps {
  options?: Option[];
  min?: number;
  max?: number;
  length?: number;
  regexp?: string;
}

interface InputWithProps {
  type: React.ReactNode;
  props: InputProps;
}

export interface Condition {
  input: React.ReactNode | InputWithProps;
  label: string;
  value: string;
  isDefault?: boolean;
}

export interface DataPoint {
  conditions: Condition[];
  label: string;
  value: string;
}

export interface Filter {
  operator: OperatorTypes;
  dataPoint: string;
  condition: string;
  input: string;
}

export interface FiltersProps {
  dataPoints: DataPoint[];
  value: Filter[];
  onApply: (filters: Filter[]) => void;
  onChange?: (filters: Filter[]) => void;
}

export const DataPointPropTypes = PropTypes.exact({
  conditions: PropTypes.arrayOf(
    PropTypes.exact({
      input: PropTypes.oneOf([
        PropTypes.node,
        PropTypes.exact({
          type: PropTypes.node,
          props: PropTypes.exact({
            options: PropTypes.arrayOf(OptionPropType),
            min: PropTypes.number,
            max: PropTypes.number,
            length: PropTypes.number,
            regexp: PropTypes.string,
          }),
        }),
      ]).isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      isDefault: PropTypes.bool,
    }),
  ).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
});
