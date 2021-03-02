import PropTypes from 'prop-types';

import { Option, OptionPropType } from './components/Select/Select.types';
import { Operators } from './Filters.enums';
import { DateRange } from './components/DateRangePicker/DateRangePicker.types';

type OperatorTypes = typeof Operators[keyof typeof Operators];

interface ComponentProps {
  options?: Option[];
  defaultValue?: Option;
  isMulti?: boolean;
  min?: number;
  max?: number;
  maxLength?: number;
  pattern?: string;
  patternMessage?: string;
  minDate?: Date;
  maxDate?: Date;
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
  value?: string | string[] | Date | DateRange;
}

export interface FiltersProps {
  fields: Field[];
  state?: Filter[];
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
            isMulti: PropTypes.bool,
            min: PropTypes.number,
            max: PropTypes.number,
            maxLength: PropTypes.number,
            pattern: PropTypes.string,
            patternMessage: PropTypes.string,
            minDate: PropTypes.instanceOf(Date),
            maxDate: PropTypes.instanceOf(Date),
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
