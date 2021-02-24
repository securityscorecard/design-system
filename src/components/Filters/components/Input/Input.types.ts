export interface InputProps {
  value: string;
  onChange: () => void;
  onKeyDown?: (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => void | Promise<void>;
}
