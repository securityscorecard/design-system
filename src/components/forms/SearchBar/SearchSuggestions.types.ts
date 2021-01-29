import PropTypes from 'prop-types';

export interface SearchSuggestionsLinkProps {
  name: string;
  onClick: () => void;
}
export interface SearchSuggestion {
  name: string;
  value: string;
  filter?: {
    field: string;
    condition: string;
  };
  onClick: () => void;
}

export interface SearchSuggestionsPaneProps {
  suggestions: SearchSuggestion[];
  searchSuggestionFormat?: string;
  onClickOut: () => void;
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

export const SearchSuggestionDefaultPropType = PropTypes.exact({
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
});

export const SearchSuggestionFilterPropType = PropTypes.exact({
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  filter: PropTypes.shape({
    field: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
});
