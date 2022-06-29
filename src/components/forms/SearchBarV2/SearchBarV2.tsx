import React, { useState } from 'react';
import styled from 'styled-components';
import { isNonEmptyString, isNotUndefined } from 'ramda-adjunct';
import PropTypes from 'prop-types';

import { getColor, getSpace } from '../../../utils';
import { Input } from '../Input';
import { SpaceSizes } from '../../../theme';
import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';
import { Icon } from '../../Icon';
import { IconTypes, SSCIconNames } from '../../../theme/icons/icons.enums';
import { Padbox } from '../../layout';
import { Spinner } from '../../Spinner';
import { useField } from './useField';
import { SearchBarV2Props } from './SearchBarV2.types';

const SearchBarRoot = styled.div`
  position: relative;
`;

const IconWrapper = styled(Padbox).attrs({
  paddingSize: SpaceSizes.md,
  paddingType: PaddingTypes.squish,
})`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 1;
  color: ${getColor('neutral.800')};
`;

const SearchIconWrapper = styled(IconWrapper)`
  left: 0;
`;

const ClearButton = styled(IconWrapper)`
  right: 0;
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

const SearchBarV2 = React.forwardRef<HTMLInputElement, SearchBarV2Props>(
  (
    {
      value: valueFromProps,
      defaultValue,
      onChange: onChangeFromProps,
      onClear,
      onSearch,
      hasDebouncedSearch = false,
      debounceTime = 500,
      placeholder = 'Search',
      isDisabled = false,
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
    const [isSearching, setIsSearching] = useState(isSearchingFromProps);
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
      setIsSearching(true);
      await onSearch(val);
      setIsSearching(false);
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
    const hadleOnKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
      e,
    ) => {
      if (e.key === 'Enter') {
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
          placeholder={placeholder}
          type="search"
          value={value}
          onChange={handleOnChange}
          onKeyDown={hadleOnKeyDown}
        />
        <SearchIconWrapper paddingSize={SpaceSizes.sm}>
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
            paddingSize={SpaceSizes.sm}
            onClick={handleClearSearch}
          >
            <Icon name={SSCIconNames.times} type={IconTypes.ssc} />
          </ClearButton>
        )}
      </SearchBarRoot>
    );
  },
);

SearchBarV2.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  hasDebouncedSearch: PropTypes.bool,
  debounceTime: PropTypes.number,
  isDisabled: PropTypes.bool,
  isSearching: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onSearch: PropTypes.func,
};

export default SearchBarV2;
