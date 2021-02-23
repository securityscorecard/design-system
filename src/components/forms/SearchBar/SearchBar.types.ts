import { InputProps } from '../Input/Input.types';

export interface SearchSuggestion {
  name: string;
  value: string;
  onClick: () => void;
}
export interface SearchSuggestionWithFilter extends SearchSuggestion {
  filter: {
    field: string;
    condition: string;
  };
}
export interface renderSuggestionFunc {
  (suggestion: SearchSuggestion): React.ReactElement;
}
export interface renderSuggestionWithFilterFunc {
  (suggestion: SearchSuggestionWithFilter): React.ReactElement;
}
export interface SearchBarProps
  extends InputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  hasSuggestions: boolean;
  onSearch: (string) => Promise<SearchSuggestion[]>;
  renderSearchSuggestion?: renderSuggestionFunc;
}
