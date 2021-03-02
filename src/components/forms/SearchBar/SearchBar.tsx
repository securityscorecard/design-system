import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isEmptyString, isNotEmpty } from 'ramda-adjunct';

import { createPaddingSpacing, getFormStyle } from '../../../utils/helpers';
import { Icon } from '../../Icon';
import { IconTypes, SSCIconNames } from '../../../theme/icons/icons.enums';
import { Spinner } from '../../Spinner';
import { Input } from '../Input';
import SearchSuggestions from './SearchSuggestions';
import { SearchBarProps, SuggestionPropType } from './SearchBar.types';
import { renderSuggestionDefault } from './SearchSuggestionFormats';
import { useControlledInput } from '../hooks/useControlledInput';

const SearchBarWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled(Input)`
  text-overflow: ellipsis;
  ${createPaddingSpacing({ horizontal: 2.5 })};
  &:focus,
  &.focus {
    ${createPaddingSpacing({ horizontal: 2.45 })};
  }
`;

const SearchBarIcon = styled.div`
  position: absolute;
  top: 0;
  height: ${getFormStyle('fieldHeight')};
  width: ${getFormStyle('fieldHeight')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchIcon = styled(SearchBarIcon)`
  left: 0;
  ${createPaddingSpacing({ left: 12 / 20 })};
`;

const LoadingIcon = styled(SearchBarIcon)`
  right: 0;
  ${createPaddingSpacing({ right: 12 / 20 })};
`;

const ClearSearchButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  height: ${getFormStyle('fieldHeight')};
  width: ${getFormStyle('fieldHeight')};
  ${createPaddingSpacing({ left: 12 / 20 })};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBar: React.FC<SearchBarProps> = ({
  hasSuggestions = false,
  onSearch,
  renderSearchSuggestion = renderSuggestionDefault,
  suggestions = [],
  placeholder,
  isInvalid = false,
  isDisabled = false,
  ...props
}) => {
  const { defaultValue = '' } = props as {
    defaultValue: string;
  };

  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchResults, setSearchResults] = useState(suggestions);

  const performSearch = async (query) => {
    setIsSearching(true);
    await onSearch(query);
    if (hasSuggestions) {
      setSearchResults(suggestions);
    }
    setIsSearching(false);
    setSearchPerformed(true);
  };

  const onChangeQuery = async () => {
    const queryValue = searchInputRef.current.value;
    setSearchPerformed(false);
    performSearch(queryValue);
  };

  const { inputValue: query, onChangeInput, resetValue } = useControlledInput(
    defaultValue,
    onChangeQuery,
  );

  const maxLength = 100;
  const isFieldInvalid = isInvalid || query.length > maxLength;

  const clearSearch = async () => {
    resetValue();
    await onSearch('');
    setIsSearching(false);
    setSearchResults([]);
    setSearchPerformed(false);
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') {
      const queryValue = searchInputRef.current.value;
      if (isEmptyString(queryValue.trim())) {
        clearSearch();
      } else {
        performSearch(queryValue);
      }
    }
  };

  return (
    <SearchBarWrapper>
      {searchPerformed ? (
        <ClearSearchButton aria-label="Clear Search" onClick={clearSearch}>
          <Icon
            color="graphite2B"
            name={SSCIconNames.times}
            type={IconTypes.ssc}
            hasFixedWidth
          />
        </ClearSearchButton>
      ) : (
        <SearchIcon aria-label="Search">
          <Icon
            color="graphite2B"
            name={SSCIconNames.search}
            type={IconTypes.ssc}
            hasFixedWidth
          />
        </SearchIcon>
      )}

      <StyledInput
        ref={searchInputRef}
        isDisabled={isDisabled}
        isInvalid={isFieldInvalid}
        placeholder={placeholder}
        type="text"
        value={query}
        onChange={onChangeInput}
        {...(hasSuggestions || { onKeyDown: handleKeyDown })}
      />
      {isSearching && (
        <LoadingIcon>
          <Spinner
            borderWidth={2}
            height={16}
            verticalMargin={0}
            width={16}
            dark
          />
        </LoadingIcon>
      )}

      {hasSuggestions && searchPerformed && isNotEmpty(searchResults) && (
        <SearchSuggestions
          renderSearchSuggestion={renderSearchSuggestion}
          suggestions={searchResults}
          onClickOut={() => setSearchPerformed(false)}
        />
      )}
    </SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  hasSuggestions: PropTypes.bool,
  suggestions: PropTypes.arrayOf(SuggestionPropType),
  renderSearchSuggestion: PropTypes.func,
  isInvalid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  defaultValue: PropTypes.string,
};

export default SearchBar;
