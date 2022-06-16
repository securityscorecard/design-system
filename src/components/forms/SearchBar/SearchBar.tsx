import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  isNonEmptyArray,
  isNonEmptyString,
  isNotUndefined,
} from 'ramda-adjunct';

import { createPadding, getSpace, pxToRem } from '../../../utils';
import { Icon } from '../../Icon';
import { IconTypes, SSCIconNames } from '../../../theme/icons/icons.enums';
import { Spinner } from '../../Spinner';
import { Input } from '../Input';
import SearchSuggestions from './SearchSuggestions';
import { SearchBarPropType, SearchBarProps } from './SearchBar.types';
import { renderSuggestionDefault } from './SearchSuggestionFormats';
import { Error } from '../Message';
import { validatePattern } from '../../Filters/helpers';
import { ColorTypes, SpaceSizes } from '../../../theme';
import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';
import { InputProps } from '../Input/Input.types';

const SEARCH_DEBOUNCE_TIME = 500;

const SearchBarWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled(Input)<InputProps & { $isSearching: boolean }>`
  padding-left: ${getSpace(SpaceSizes.lgPlus)};

  ${({ $isSearching, theme }) =>
    $isSearching &&
    `
    padding-right: ${getSpace(SpaceSizes.lgPlus, { theme })};
  `};
`;

const SearchBarIcon = styled.div<{ $position: 'start' | 'end' }>`
  box-sizing: content-box;
  width: ${pxToRem(16)};
  position: absolute;
  top: 0;
  ${({ theme }) =>
    createPadding({
      paddingSize: SpaceSizes.md,
      paddingType: PaddingTypes.squish,
      theme,
    })};
  ${({ $position }) => ($position === 'start' ? 'left' : 'right')}: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ClearSearchButton = styled.button`
  border: 0;
  appearance: none;
  background: transparent;
  cursor: pointer;
`;

const SearchBar: React.FC<SearchBarProps> = ({
  hasSuggestions = false,
  onSearch,
  onClear,
  renderSearchSuggestion = renderSuggestionDefault,
  suggestions = [],
  placeholder = 'Search',
  isDisabled = false,
  isValidatedOnSubmit = false,
  pattern,
  errorMessage,
  value,
  defaultValue = '',
  ...props
}) => {
  const [isInvalid, setInvalid] = useState(false);
  const [query, setQuery] = useState(value || defaultValue);
  const [typingTimeout, setTypingTimeout] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [isSuggestionDisplayed, setIsSuggestionsDisplayed] = useState(false);

  const clearSearch = async () => {
    setQuery('');
    setIsSearching(false);
    setIsSuggestionsDisplayed(false);
    onClear();
    setInvalid(false);
  };

  const search = useCallback(
    async (searchedValue) => {
      if (isInvalid) {
        return;
      }
      setIsSearching(true);
      await onSearch(searchedValue);
      setIsSearching(false);
      if (!isNonEmptyString(searchedValue)) {
        setIsSuggestionsDisplayed(false);
      }
    },
    [isInvalid, onSearch],
  );

  const debouncedSearch = async (searchedValue) => {
    if (typingTimeout) {
      window.clearTimeout(typingTimeout);
    }
    setTypingTimeout(
      window.setTimeout(() => {
        search(searchedValue);
      }, SEARCH_DEBOUNCE_TIME),
    );
  };

  const handleOnValidate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const hasError = validatePattern(target) && isNonEmptyString(target.value);
    setInvalid(hasError);
    return hasError;
  };

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    if (!isNonEmptyString(newQuery)) {
      clearSearch();
    }
    if (!isValidatedOnSubmit || isInvalid) {
      handleOnValidate(event);
    }
    if (hasSuggestions) {
      debouncedSearch(newQuery);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const hasError = handleOnValidate(event);
      if (!hasError) {
        search(query);
      }
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
    if (isNotUndefined(value)) {
      setQuery(value);
      search(value);
    }
  }, [value, search]);

  useEffect(() => {
    if (isNonEmptyArray(suggestions) && hasSuggestions) {
      setIsSuggestionsDisplayed(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suggestions]);

  return (
    <SearchBarWrapper {...props}>
      {isSearching ? (
        <SearchBarIcon $position="start">
          <Spinner
            borderWidth={2}
            data-testid="searchbar-spinner"
            height={16}
            verticalMargin={0}
            width={16}
            dark
          />
        </SearchBarIcon>
      ) : (
        <SearchBarIcon $position="start" aria-label="Search">
          <Icon
            color={ColorTypes.neutral700}
            name={SSCIconNames.search}
            type={IconTypes.ssc}
          />
        </SearchBarIcon>
      )}

      <StyledInput
        $isSearching={isSearching}
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

      {isNonEmptyString(query) && (
        <SearchBarIcon
          $position="end"
          aria-label="Clear Search"
          as={ClearSearchButton}
          onClick={clearSearch}
        >
          <Icon
            color={ColorTypes.neutral700}
            name={SSCIconNames.times}
            type={IconTypes.ssc}
          />
        </SearchBarIcon>
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
