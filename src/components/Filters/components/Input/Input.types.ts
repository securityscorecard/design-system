import type { ReactEventHandler } from 'react';

export interface InputProps {
  value: string;
  onChange: (event: ReactEventHandler) => void;
  placeholder?: string;
  isInvalid?: boolean;
  maxLength?: number;
  pattern?: string;
  errorMessage?: string;
  onValidate?: (target: HTMLInputElement) => boolean;
  onError?: (boolean) => void;
}
