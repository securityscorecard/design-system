import type { InputHTMLAttributes } from 'react';
import type { InputProps } from '../../../forms/Input/Input.types';

export interface SearchProps
  extends InputProps,
    InputHTMLAttributes<HTMLInputElement> {
  onSearch: (query: string) => void | Promise<void>;
  onClear: () => void;
  placeholder?: string;
  isValidatedOnSubmit?: boolean;
  pattern?: string;
  errorMessage?: string;
  value?: string;
  defaultValue?: string;
}
