import { InputProps } from '../Input/Input.types';

export interface PasswordProps
  extends InputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  defaultIsRevealed?: boolean;
  className?: string;
}
