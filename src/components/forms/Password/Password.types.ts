import type { InputHTMLAttributes } from 'react';
import type { InputProps } from '../Input/Input.types';

export interface PasswordProps
  extends InputProps,
    InputHTMLAttributes<HTMLInputElement> {
  defaultIsRevealed?: boolean;
  className?: string;
}
