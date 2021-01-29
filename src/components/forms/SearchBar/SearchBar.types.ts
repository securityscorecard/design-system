import { InputProps } from '../Input/Input.types';
import { SearchSuggestionFormatsLabels } from './Search.enums';

type SearchSuggestionFormat = typeof SearchSuggestionFormatsLabels[keyof typeof SearchSuggestionFormatsLabels];
export interface SearchBarProps
  extends InputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  onSearch: (
    string,
  ) => Promise<
    {
      name: string;
      value: string;
      filter?: { field?: string; condition?: string };
      onClick: () => void;
    }[]
  >;
  searchSuggestionFormat?: SearchSuggestionFormat;
}
