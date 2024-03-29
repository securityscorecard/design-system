import PropTypes from 'prop-types';

import { InputProps } from '../../../forms/Input/Input.types';

export interface SearchProps
  extends InputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  onSearch: (query: string) => void | Promise<void>;
  onClear: () => void;
  placeholder?: string;
  isValidatedOnSubmit?: boolean;
  pattern?: string;
  errorMessage?: string;
  value?: string;
  defaultValue?: string;
}

export const SearchPropType = {
  onSearch: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  isValidatedOnSubmit: PropTypes.bool,
  pattern: PropTypes.string,
  errorMessage: PropTypes.string,
  isDisabled: PropTypes.bool,
  defaultValue: PropTypes.string,
};
