import PropTypes from 'prop-types';

import { SearchSuggestion, renderSuggestionFunc } from './SearchBar.types';

export interface SearchSuggestionsLinkProps {
  name: string;
  onClick: () => void;
}
export interface SearchSuggestionsPaneProps {
  suggestions: SearchSuggestion[];
  onClickOut: () => void;
  renderSearchSuggestion: renderSuggestionFunc;
}

export const SearchSuggestionPropType = PropTypes.exact({
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  filter: PropTypes.shape({
    field: PropTypes.string,
    condition: PropTypes.string,
  }),
  onClick: PropTypes.func.isRequired,
});
