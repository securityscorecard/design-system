import {
  SearchSuggestionDefault,
  SearchSuggestionFilter,
} from './SearchSuggestionFormats';

// eslint-disable-next-line import/prefer-default-export
export const SearchSuggestionFormats = {
  default: SearchSuggestionDefault,
  filter: SearchSuggestionFilter,
} as const;

export const SearchSuggestionFormatsLabels = {
  default: 'default',
  filter: 'filter',
} as const;
