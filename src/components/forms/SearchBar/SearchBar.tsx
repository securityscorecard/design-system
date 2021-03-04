import React, { useEffect, useRef, useState } from 'react';
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
import { useMounted } from '../../../hooks/useMounted';
import { useDebounce } from '../../../hooks/useDebounce';

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
  const [query, setQuery] = useState(defaultValue);
  const [isSearching, setIsSearching] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const isMounted = useMounted();

  const debouncedQuery = useDebounce(query, 500);

  const maxLength = 100;
  const isFieldInvalid = isInvalid || query.length > maxLength;

  const { inputValue, onChangeInput, resetValue } = useControlledInput(
    defaultValue,
    () => {
      if (hasSuggestions) {
        setQuery(inputValue);
      }
    },
  );

  const performSearch = async () => {
    setSearchPerformed(false);
    setIsSearching(true);
    await onSearch(debouncedQuery);
    if (isMounted()) {
      setIsSearching(false);
      setSearchPerformed(true);
    }
  };

  const clearSearch = async () => {
    resetValue();
    await onSearch('');
    if (isMounted()) {
      setIsSearching(false);
      setSearchPerformed(false);
    }
  };
  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') {
      setQuery(inputValue);
    }
  };

  useEffect(() => {
    if (isEmptyString(debouncedQuery)) {
      clearSearch();
    } else {
      performSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);

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
        value={inputValue}
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

      {searchPerformed && hasSuggestions && isNotEmpty(suggestions) && (
        <SearchSuggestions
          renderSearchSuggestion={renderSearchSuggestion}
          suggestions={suggestions}
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
