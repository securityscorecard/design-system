import { BaseDateRange, BaseDateRangePlaceholderProps } from '../_internal/BaseDateRangePicker/BaseDateRangePicker.types';
import { Option } from './components/Select/Select.types';
import { Operators } from './Filters.enums';
declare type OperatorTypes = typeof Operators[keyof typeof Operators];
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
    isLoading: boolean;
    isCanceled: boolean;
    value?: string | string[] | Date | BaseDateRange;
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
export declare const FieldPropTypes: any;
export declare const FilterStatePropType: any;
export declare const FiltersPropType: {
    fields: any;
    state: any;
    isLoading: any;
    isCancelEnabled: any;
    isOperatorFieldEnabled: any;
    defaultOperator: any;
    onApply: any;
    onClose: any;
    onCancel: any;
    onChange: any;
    onError: any;
};
export {};
