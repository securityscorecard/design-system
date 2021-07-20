import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { isNonEmptyArray, isNonEmptyString } from 'ramda-adjunct';

import { createPaddingSpacing, getFormStyle } from '../../../utils';
import { Icon } from '../../Icon';
import { IconTypes, SSCIconNames } from '../../../theme/icons/icons.enums';
import { Spinner } from '../../Spinner';
import { Input } from '../Input';
import SearchSuggestions from './SearchSuggestions';
import { SearchBarPropType, SearchBarProps } from './SearchBar.types';
import { renderSuggestionDefault } from './SearchSuggestionFormats';
import { Error } from '../Message';
import { validatePattern } from '../../Filters/helpers';

const SEARCH_DEBOUNCE_TIME = 500;

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
  background: transparent;
  border: 0 none;
`;

const SearchBar: React.FC<SearchBarProps> = ({
  hasSuggestions = false,
  onSearch,
  onClear,
  renderSearchSuggestion = renderSuggestionDefault,
  suggestions = [],
  placeholder = 'Search',
  isDisabled = false,
  pattern,
  errorMessage,
  ...props
}) => {
  const { defaultValue = '' } = props as {
    defaultValue: string;
  };

  const [isInvalid, setInvalid] = useState<boolean>(false);
  const [query, setQuery] = useState<string>(defaultValue);
  const [typingTimeout, setTypingTimeout] = useState<number>(0);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isSuggestionDisplayed, setIsSuggestionsDisplayed] = useState<boolean>(
    false,
  );

  const clearSearch = async () => {
    setQuery('');
    setIsSearching(false);
    setIsSuggestionsDisplayed(false);
    onClear();
    setInvalid(false);
  };

  const search = async (value) => {
    if (isInvalid) {
      return;
    }
    setIsSearching(true);
    await onSearch(value);
    setIsSearching(false);
    if (!isNonEmptyString(value)) {
      setIsSuggestionsDisplayed(false);
    }
  };

  const debouncedSearch = async (value) => {
    if (typingTimeout) {
      window.clearTimeout(typingTimeout);
    }
    setTypingTimeout(
      window.setTimeout(() => {
        search(value);
      }, SEARCH_DEBOUNCE_TIME),
    );
  };

  const handleOnValidate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const hasError = validatePattern(target) && isNonEmptyString(target.value);
    setInvalid(hasError);
  };

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    handleOnValidate(event);
    if (hasSuggestions) {
      debouncedSearch(event.target.value);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      search(query);
    }
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleOnValidate(event);
    setIsSuggestionsDisplayed(false);
  };

  const handleFocus = () => {
    if (
      hasSuggestions &&
      isNonEmptyArray(suggestions) &&
      isNonEmptyString(query)
    ) {
      setIsSuggestionsDisplayed(true);
    }
  };

  useEffect(() => {
    if (isNonEmptyArray(suggestions) && hasSuggestions) {
      setIsSuggestionsDisplayed(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suggestions]);

  return (
    <SearchBarWrapper>
      {isNonEmptyString(query) ? (
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
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        pattern={pattern}
        placeholder={placeholder}
        type="text"
        value={query}
        onBlur={handleBlur}
        onChange={handleChangeQuery}
        onFocus={handleFocus}
        {...(hasSuggestions || { onKeyDown: handleKeyDown })}
      />
      {isInvalid && <Error>{errorMessage}</Error>}

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

      {isSuggestionDisplayed && (
        <SearchSuggestions
          renderSearchSuggestion={renderSearchSuggestion}
          suggestions={suggestions}
          onClickOut={() => setIsSuggestionsDisplayed(false)}
        />
      )}
    </SearchBarWrapper>
  );
};

SearchBar.propTypes = SearchBarPropType;

export default SearchBar;
