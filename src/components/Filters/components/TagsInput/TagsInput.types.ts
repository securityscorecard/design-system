import { PadboxProps } from '../../../layout/Padbox/Padbox';

export interface TagsInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  maxLength?: number;
  pattern?: string;
  errorMessage?: string;
  placeholder?: string;
  isInvalid?: boolean;
  onValidate?: (target: HTMLInputElement) => boolean;
  onError?: (boolean) => void;
}

export interface TagsContainerProps extends PadboxProps {
  isFocused: boolean;
  isInvalid: boolean;
}
