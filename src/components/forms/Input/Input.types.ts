import React from 'react';

export interface InputProps
  extends Omit<React.ComponentPropsWithRef<'input'>, 'disabled'> {
  isInvalid?: boolean;
  isDisabled?: boolean;
  [key: string]: unknown;
}
