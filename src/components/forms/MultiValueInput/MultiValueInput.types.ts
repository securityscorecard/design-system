import type { ChangeEvent, ComponentPropsWithRef } from 'react';
import type { PadboxProps } from '../../layout/Padbox/Padbox';

export interface ValueContainerProps extends PadboxProps {
  $isInvalid: boolean;
  $isDisabled: boolean;
}

export interface MultiValuePillLabelProps {
  $maxLength: number;
}

export interface MultiValueProps {
  label: string;
  isDisabled: ValueContainerProps['$isDisabled'];
  maxLength: MultiValuePillLabelProps['$maxLength'];
  onRemove: () => void;
}

export interface MultiValueInputProps extends ComponentPropsWithRef<'input'> {
  value?: Array<MultiValueProps['label']>;
  isInvalid?: ValueContainerProps['$isInvalid'];
  isDisabled?: ValueContainerProps['$isDisabled'];
  isClearable?: boolean;
  placeholder?: string;
  id?: string;
  inputId?: string;
  inputValue?: string;
  maxPillLabelLength?: MultiValueProps['maxLength'];
  onValueAdd?: (
    addedValues: MultiValueInputProps['value'],
    nextValues: MultiValueInputProps['value'],
  ) => void;
  onValueRemove?: (nextValues: MultiValueInputProps['value']) => void;
  onValuesChange?: (nextValues: MultiValueInputProps['value']) => void;
  onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
