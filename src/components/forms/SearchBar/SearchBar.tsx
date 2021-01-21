import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { createPaddingSpacing, getFormStyle } from '../../../utils/helpers';
import { Icon } from '../../Icon';
import { IconTypes, SSCIconNames } from '../../Icon/Icon.enums';
import { Spinner } from '../../Spinner';
import { Input } from '../Input';
import { SearchBarProps } from './SearchBar.types';
import useControlledInput from './useControlledInput';

const SearchBarWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled(Input)`
  ${createPaddingSpacing({ horizontal: 2.5 })};
  &:focus,
  &.focus {
    ${createPaddingSpacing({ horizontal: 2.5 })};
  }
`;

const SearchIcon = styled.div`
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

const LoadingIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: ${getFormStyle('fieldHeight')};
  width: ${getFormStyle('fieldHeight')};
  ${createPaddingSpacing({ right: 12 / 20 })};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBar: React.FC<SearchBarProps> = ({
  isInvalid = false,
  isDisabled = false,
  isSearchInProgress = false,
  ...props
}) => {
  const { defaultValue = '' } = props as {
    defaultValue: string;
  };
  const [isSearching, setIsSearching] = useState(isSearchInProgress);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const onChangeQuery = () => {
    const queryValue = searchInputRef.current.value;
    // console.log('Performing search for ' + queryValue);
    if (queryValue.length > 2) {
      setSearchPerformed(true);
    } else {
      setSearchPerformed(false);
    }
  };

  const { inputValue: query, onChangeInput, resetValue } = useControlledInput(
    searchInputRef,
    defaultValue,
    onChangeQuery,
  );

  const maxLength = 100;
  const isFieldInvalid = isInvalid || query.length > maxLength;

  const clearSearch = () => {
    resetValue();
    setIsSearching(false);
    setSearchPerformed(false);
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
        placeholder="Search for domains or IPs"
        type="text"
        value={query}
        onChange={onChangeInput}
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
    </SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  isInvalid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isSearchInProgress: PropTypes.bool,
  defaultValue: PropTypes.string,
};

export default SearchBar;
