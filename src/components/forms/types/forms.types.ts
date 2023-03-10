import type { InputHTMLAttributes, ReactNode } from 'react';

export interface TogglingInputProps {
  isInvalid?: boolean;
  isIndeterminate?: boolean;
}

export interface TogglingProps
  extends TogglingInputProps,
    InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: ReactNode;
  isDisabled?: boolean;
}
