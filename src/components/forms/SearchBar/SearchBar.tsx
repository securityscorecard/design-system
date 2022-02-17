import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { isNonEmptyArray, isNonEmptyString } from 'ramda-adjunct';

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
    if (isNonEmptyArray(suggestions) && hasSuggestions) {
      setIsSuggestionsDisplayed(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suggestions]);

  return (
    <SearchBarWrapper>
      {isNonEmptyString(query) ? (
        <SearchBarIcon
          $position="start"
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

      {isSearching && (
        <SearchBarIcon $position="end">
          <Spinner
            borderWidth={2}
            height={16}
            verticalMargin={0}
            width={16}
            dark
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
