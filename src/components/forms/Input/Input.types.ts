import type { ComponentPropsWithRef } from 'react';

export interface InputProps
  extends Omit<ComponentPropsWithRef<'input'>, 'disabled'> {
  isInvalid?: boolean;
  isDisabled?: boolean;
  [key: string]: unknown;
}
