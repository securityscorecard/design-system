export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
  onChange: (value: Option) => void;
  value?: Option;
  isDisabled?: boolean;
  defaultValue?: Option | Option[];
}
