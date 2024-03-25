import PropTypes from 'prop-types';

import { Option, OptionPropType } from '../forms/Select/Select.types';
import {
  BaseDateRange,
  BaseDateRangePickerPropTypes,
  BaseDateRangePlaceholderPropTypes,
  BaseDateRangePlaceholderProps,
} from '../_internal/BaseDateRangePicker/BaseDateRangePicker.types';
import { Operators } from './Filters.enums';

type OperatorTypes = typeof Operators[keyof typeof Operators];

interface ComponentProps {
  options?: Option[];
  defaultValue?: Option;
  isMulti?: boolean;
  min?: number;
  max?: number;
  maxLength?: number;
  pattern?: string;
  errorMessage?: string;
  minDate?: Date;
  maxDate?: Date;
  units?: string;
  placeholder?: string | BaseDateRangePlaceholderProps;
  onValidate?: (target: HTMLInputElement) => boolean;
}

export interface ComponentWithProps {
  component: React.ElementType | React.ReactNode;
  props: ComponentProps;
}

export interface Condition {
  component: React.ElementType | React.ReactNode | ComponentWithProps;
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
  isLoading: boolean;
  isCanceled: boolean;
  value?: string | string[] | Date | BaseDateRange | Record<string, unknown>;
}

export interface FiltersProps {
  fields: Field[];
  state?: Filter[];
  onApply?: (filters: Filter[]) => void;
  onClose?: () => void;
  onCancel?: () => void;
  onChange?: (filters: Filter[]) => void;
  onError?: (hasError: boolean) => void;
  isLoading?: boolean;
  isCancelEnabled?: boolean;
  isOperatorFieldEnabled?: boolean;
  defaultOperator?: typeof Operators[keyof typeof Operators];
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
            errorMessage: PropTypes.string,
            minDate: PropTypes.instanceOf(Date),
            maxDate: PropTypes.instanceOf(Date),
            units: PropTypes.string,
            placeholder: PropTypes.oneOfType([
              PropTypes.string,
              BaseDateRangePlaceholderPropTypes,
            ]),
            onValidate: PropTypes.func,
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

export const FilterStatePropType = PropTypes.exact({
  operator: PropTypes.oneOf(Object.values(Operators)).isRequired,
  field: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.instanceOf(Date),
    BaseDateRangePickerPropTypes,
  ]),
  isApplied: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isCanceled: PropTypes.bool.isRequired,
});

export const FiltersPropType = {
  fields: PropTypes.arrayOf(FieldPropTypes).isRequired,
  state: PropTypes.arrayOf(FilterStatePropType),
  isLoading: PropTypes.bool,
  isCancelEnabled: PropTypes.bool,
  isOperatorFieldEnabled: PropTypes.bool,
  defaultOperator: PropTypes.oneOf(Object.values(Operators)),
  onApply: PropTypes.func,
  onClose: PropTypes.func,
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  onError: PropTypes.func,
};
