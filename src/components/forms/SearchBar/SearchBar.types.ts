import PropTypes from 'prop-types';

import { InputProps } from '../Input/Input.types';

export interface SearchSuggestion {
  name: string;
  value: string;
  onClick: () => void;
}
export interface FilterSuggestion extends SearchSuggestion {
  filter?: {
    field?: string;
    condition?: string;
  };
}

export const SuggestionPropType = PropTypes.oneOfType([
  PropTypes.exact({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
  PropTypes.exact({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    filter: PropTypes.exact({
      field: PropTypes.string.isRequired,
      condition: PropTypes.string.isRequired,
    }).isRequired,
  }),
]);

export interface renderSuggestionFunc {
  (suggestion: SearchSuggestion): React.ReactElement;
}
export interface renderSuggestionWithFilterFunc {
  (suggestion: FilterSuggestion): React.ReactElement;
}
export interface SearchBarProps
  extends InputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  hasSuggestions?: boolean;
  onSearch: (query: string) => void | Promise<void>;
  onClear: () => void;
  placeholder?: string;
  suggestions?: FilterSuggestion[] | SearchSuggestion[];
  renderSearchSuggestion?: renderSuggestionFunc;
  pattern?: string;
  errorMessage?: string;
}

export const SearchBarPropType = {
  onSearch: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  hasSuggestions: PropTypes.bool,
  suggestions: PropTypes.arrayOf(SuggestionPropType),
  renderSearchSuggestion: PropTypes.func,
  pattern: PropTypes.string,
  errorMessage: PropTypes.string,
  isDisabled: PropTypes.bool,
  defaultValue: PropTypes.string,
};
