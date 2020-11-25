export interface TogglingInputProps {
  isInvalid?: boolean;
}

export interface TogglingProps
  extends TogglingInputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  isDisabled?: boolean;
}
