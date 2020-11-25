export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
  placeholder?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
  isMulti?: boolean;
  defaultValue?: Option | Option[];
  defaultIsMenuOpen?: boolean;
  className?: string;
}
