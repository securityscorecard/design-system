import type { ReactEventHandler } from 'react';

export interface NumberProps {
  value: string;
  onChange: (event: ReactEventHandler) => void;
  min?: number;
  max?: number;
  placeholder?: string;
  errorMessage?: string;
  isInvalid?: boolean;
  onError?: (boolean) => void;
}
