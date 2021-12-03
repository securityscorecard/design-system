import React from 'react';

export interface TogglingInputProps {
  isInvalid?: boolean;
  isIndeterminate?: boolean;
}

export interface TogglingProps
  extends TogglingInputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: React.ReactNode;
  isDisabled?: boolean;
}
