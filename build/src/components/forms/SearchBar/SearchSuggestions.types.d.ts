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
export declare const SearchSuggestionPropType: PropTypes.Requireable<Required<PropTypes.InferProps<{
    name: PropTypes.Validator<string>;
    value: PropTypes.Validator<string>;
    filter: PropTypes.Requireable<PropTypes.InferProps<{
        field: PropTypes.Requireable<string>;
        condition: PropTypes.Requireable<string>;
    }>>;
    onClick: PropTypes.Validator<(...args: any[]) => any>;
}>>>;
