import type { ComponentPropsWithRef } from 'react';
import type { InputProps } from '../Input/Input.types';

export interface PasswordProps
  extends InputProps,
    ComponentPropsWithRef<'input'> {
  defaultIsRevealed?: boolean;
  className?: string;
}
