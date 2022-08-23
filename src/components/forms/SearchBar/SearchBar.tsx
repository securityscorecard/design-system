import React, { useState } from 'react';
import styled from 'styled-components';
import { isNonEmptyString, isNotUndefined } from 'ramda-adjunct';
import PropTypes from 'prop-types';
import { pipe } from 'ramda';

import { getColor, getFormStyle, getSpace, pxToRem } from '../../../utils';
import { Input } from '../Input';
import { SpaceSizes } from '../../../theme';
import { Icon } from '../../Icon';
import { IconTypes, SSCIconNames } from '../../../theme/icons/icons.enums';
import { Spinner } from '../../Spinner';
import { useField } from './useField';
import { SearchBarProps } from './SearchBar.types';

const SearchBarRoot = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  color: ${getColor('neutral.800')};
`;

const SearchIconWrapper = styled(IconWrapper)`
  left: 0;
  padding: ${getSpace(SpaceSizes.md)};
  height: ${pipe(getFormStyle('fieldHeight'), pxToRem)};
`;

const ClearButton = styled(IconWrapper)`
  right: ${getSpace(SpaceSizes.md)};
  height: ${pipe(getFormStyle('fieldHeight'), pxToRem)};
  background: none;
  border: none;
  border-radius: 0;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${getColor('neutral.0')};

    ::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 24px;
      height: 24px;
      border-radius: 100%;
      background-color: ${getColor('error.500')};
      z-index: -1;
    }
  }
`;

const SearchInput = styled(Input)`
  padding-left: ${getSpace(SpaceSizes.lgPlus)};

  padding-right: ${({ $isClearable, theme }) =>
    getSpace($isClearable ? SpaceSizes.lgPlus : SpaceSizes.md, { theme })};
`;

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      value: valueFromProps,
      defaultValue,
      onChange: onChangeFromProps,
      onKeyUp,
      onClear,
      onSearch,
      hasDebouncedSearch = false,
      debounceTime = 500,
      placeholder = 'Search',
      isDisabled = false,
      isInvalid = false,
      isSearching: isSearchingFromProps = false,
      ...rest
    },
    ref,
  ) => {
    const { value, onChange, isControlled, clearValue } = useField(
      valueFromProps,
      defaultValue,
      onChangeFromProps,
    );
    const [internalIsSearching, setInternalIsSearching] = useState(false);
    const isSearching =
      onSearch === undefined ? isSearchingFromProps : internalIsSearching;
    const [typingTimeout, setTypingTimeout] = useState(0);
    const hasValue = isNonEmptyString(value);
    const isClearButtonVisible =
      hasValue && (!isControlled || (isControlled && isNotUndefined(onClear)));

    const handleClearSearch = () => {
      if (onClear) {
        onClear();
      }

      if (!isControlled) {
        clearValue();
      }
    };

    const search = async (val: string) => {
      if (isInvalid) return;

      setInternalIsSearching(true);
      await onSearch(val);
      setInternalIsSearching(false);
    };

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const eventValue = e.target.value;
      if (hasDebouncedSearch) {
        if (typingTimeout) {
          window.clearTimeout(typingTimeout);
        }
        setTypingTimeout(
          window.setTimeout(() => {
            search(eventValue);
          }, debounceTime),
        );
      }
      onChange(e);
    };
    const handleOnKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
      if (isNotUndefined(onKeyUp)) {
        onKeyUp(e);
      }
      if (e.key === 'Enter' && isNotUndefined(onSearch)) {
        search(value);
      }
    };

    return (
      <SearchBarRoot>
        <SearchInput
          {...rest}
          ref={ref}
          $isClearable={isClearButtonVisible}
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          placeholder={placeholder}
          type="search"
          value={value}
          onChange={handleOnChange}
          onKeyUp={handleOnKeyUp}
        />
        <SearchIconWrapper>
          {isSearching ? (
            <Spinner
              borderWidth={2}
              height={16}
              verticalMargin={0}
              width={16}
              dark
            />
          ) : (
            <Icon name={SSCIconNames.search} type={IconTypes.ssc} />
          )}
        </SearchIconWrapper>
        {isClearButtonVisible && (
          <ClearButton
            aria-label="Clear search value"
            as="button"
            onClick={handleClearSearch}
          >
            <Icon name={SSCIconNames.times} type={IconTypes.ssc} />
          </ClearButton>
        )}
      </SearchBarRoot>
    );
  },
);

SearchBar.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  hasDebouncedSearch: PropTypes.bool,
  debounceTime: PropTypes.number,
  isDisabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isSearching: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onSearch: PropTypes.func,
  onKeyUp: PropTypes.func,
};

export default SearchBar;
