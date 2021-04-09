export interface InputProps {
  value: string;
  onChange: (event: React.ReactEventHandler) => void;
  maxLength?: number;
  pattern?: string;
  patternMessage?: string;
  placeholder?: string;
}
