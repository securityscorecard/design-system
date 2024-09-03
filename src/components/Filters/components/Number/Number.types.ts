export interface NumberProps {
  value: string;
  onChange: (event: React.ReactEventHandler) => void;
  min?: number;
  max?: number;
  placeholder?: string;
  errorMessage?: string;
  isInvalid?: boolean;
  onError?: (boolean) => void;
}
