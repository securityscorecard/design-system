export interface InputProps {
  value: string;
  onChange: (event: React.ReactEventHandler) => void;
  placeholder?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  maxLength?: number;
  pattern?: string;
  patternMessage?: string;
  validate?: (target: HTMLInputElement) => string | boolean;
}
