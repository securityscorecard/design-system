import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNotNull } from 'ramda-adjunct';

import { getDepth } from '../../../utils/helpers';
import { useOuterClick } from '../../Datatable/hooks/useOuterCallback';
import {
  DropdownLink,
  List,
  StyledDropdownPane,
} from '../../Datatable/Dropdown/DropdownPane';
import {
  SearchSuggestionPropType,
  SearchSuggestionsPaneProps,
} from './SearchSuggestions.types';
import { SearchSuggestionFormats } from './Search.enums';

const SearchSuggestionsPane = styled(StyledDropdownPane)`
  min-width: 100%;
  z-index: ${getDepth('dropdown')};
`;

const SearchSuggestionsLink = styled(DropdownLink)`
  width: 100%;
`;

const SearchSuggestions: React.FC<SearchSuggestionsPaneProps> = ({
  suggestions,
  searchSuggestionFormat = 'default',
  onClickOut,
}) => {
  const searchSuggestionsPaneRef = useOuterClick(onClickOut);
  const searchSuggestion = SearchSuggestionFormats[searchSuggestionFormat];

  return (
    <SearchSuggestionsPane ref={searchSuggestionsPaneRef}>
      <List>
        {suggestions.map((suggestion) => {
          return (
            isNotNull(suggestion) && (
              <li key={suggestion.name}>
                <SearchSuggestionsLink
                  name={suggestion.name}
                  onClick={suggestion.onClick}
                >
                  {searchSuggestion({ suggestion })}
                </SearchSuggestionsLink>
              </li>
            )
          );
        })}
      </List>
    </SearchSuggestionsPane>
  );
};

SearchSuggestions.propTypes = {
  suggestions: PropTypes.arrayOf(SearchSuggestionPropType).isRequired,
  onClickOut: PropTypes.func.isRequired,
  searchSuggestionFormat: PropTypes.string,
};

export default SearchSuggestions;
