import type { ComponentPropsWithoutRef } from 'react';

export interface InputProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'disabled'> {
  isInvalid?: boolean;
  isDisabled?: boolean;
  [key: string]: unknown;
}
