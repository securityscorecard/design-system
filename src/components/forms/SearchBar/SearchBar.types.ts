import { InputProps } from '../Input/Input.types';

export interface SearchBarProps
  extends InputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  isSearchInProgress?: boolean;
}
