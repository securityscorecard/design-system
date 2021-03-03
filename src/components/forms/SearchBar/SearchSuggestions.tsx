import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNotNull } from 'ramda-adjunct';

import {
  getBorderRadius,
  getColor,
  getDepth,
  getFontSize,
  pxToRem,
} from '../../../utils/helpers';
import { useOuterClick } from '../../../hooks/useOuterCallback';
import {
  SearchSuggestionPropType,
  SearchSuggestionsPaneProps,
} from './SearchSuggestions.types';

const SearchSuggestionsPane = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid ${getColor('graphiteB')};
  border-radius: ${getBorderRadius};
  background-color: ${getColor('graphite5H')};
  padding: ${pxToRem(8, 0)};
  z-index: ${getDepth('dropdown')};
  min-width: 100%;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SearchSuggestionsLink = styled.button`
  width: 100%;
  display: block;
  padding: ${pxToRem(4, 16)};
  height: ${pxToRem(24)};
  font-size: ${getFontSize('md')};
  line-height: ${pxToRem('md')};
  color: ${getColor('graphite4B')};
  cursor: pointer;
  background: transparent;
  border: 0 none;
  text-align: left;

  &:hover {
    background: ${getColor('graphite3H')};
  }
`;

const SearchSuggestions: React.FC<SearchSuggestionsPaneProps> = ({
  suggestions,
  onClickOut,
  renderSearchSuggestion,
}) => {
  const searchSuggestionsPaneRef = useOuterClick(onClickOut);

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
                  {renderSearchSuggestion(suggestion)}
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
  renderSearchSuggestion: PropTypes.func.isRequired,
  onClickOut: PropTypes.func.isRequired,
};

export default SearchSuggestions;
