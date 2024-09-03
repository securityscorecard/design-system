import { InputProps } from '../../../forms/Input/Input.types';

export interface SearchProps
  extends InputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  onSearch: (query: string) => void | Promise<void>;
  onClear: () => void;
  placeholder?: string;
  isValidatedOnSubmit?: boolean;
  pattern?: string;
  errorMessage?: string;
  value?: string;
  defaultValue?: string;
}
