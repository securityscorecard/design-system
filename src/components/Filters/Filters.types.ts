import PropTypes from 'prop-types';

import { Option, OptionPropType } from './components/Select/Select.types';
import { Operators } from './Filters.enums';
import { DateRange } from './components/DateRangePicker/DateRangePicker.types';

type OperatorTypes = typeof Operators[keyof typeof Operators];

interface ComponentProps {
  options?: Option[];
  defaultValue?: Option;
  // == Currently not implemented ==
  min?: number;
  max?: number;
  length?: number;
  regexp?: string;
}

interface ComponentWithProps {
  component: React.ReactNode;
  props: ComponentProps;
}

export interface Condition {
  component: React.ReactNode | ComponentWithProps;
  label: string;
  value: string;
  isDefault?: boolean;
}

export interface Field {
  conditions: Condition[];
  label: string;
  value: string;
}

export interface Filter {
  operator: OperatorTypes;
  field: string;
  condition: string;
  isApplied: boolean;
  value?: string | Date | DateRange;
}

export interface FiltersProps {
  fields: Field[];
  state: Filter[];
  onApply: (filters: Filter[]) => void;
  onClose: () => void;
  onCancel: () => void;
  onChange?: (filters: Filter[]) => void;
  isLoading?: boolean;
}

export const FieldPropTypes = PropTypes.exact({
  conditions: PropTypes.arrayOf(
    PropTypes.exact({
      component: PropTypes.oneOfType([
        PropTypes.elementType,
        PropTypes.exact({
          component: PropTypes.elementType,
          props: PropTypes.exact({
            options: PropTypes.arrayOf(OptionPropType),
            defaultValue: OptionPropType,
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
