import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TogglingInputProps {
  isInvalid?: boolean;
  isIndeterminate?: boolean;
}

export interface TogglingProps
  extends TogglingInputProps,
    ComponentPropsWithRef<'input'> {
  name: string;
  label?: ReactNode;
  isDisabled?: boolean;
}
