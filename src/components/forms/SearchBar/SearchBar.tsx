import {
  type ChangeEventHandler,
  type KeyboardEventHandler,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import {
  isNonEmptyString,
  isNotNilOrEmpty,
  isNotUndefined,
} from 'ramda-adjunct';
import cls from 'classnames';

import { getFormStyle } from '../../../utils';
import { Input } from '../Input';
import { Icon } from '../../Icon';
import { IconTypes, SSCIconNames } from '../../../theme/icons/icons.enums';
import { Spinner } from '../../Spinner';
import { useField } from './useField';
import { SearchBarProps } from './SearchBar.types';
import { CLX_COMPONENT } from '../../../theme/constants';

const SearchBarRoot = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  color: var(--sscds-color-icon-subtle);
`;

const SearchIconWrapper = styled(IconWrapper)`
  left: 0;
  padding-inline: var(--sscds-space-4x);
  height: 100%;
`;

const ClearButton = styled(IconWrapper)`
  display: grid;
  place-items: center;
  right: 0;
  height: ${getFormStyle('fieldHeight')};
  width: ${getFormStyle('fieldHeight')};
  background: none;
  border: none;
  border-radius: 0;
  cursor: pointer;

  .clear-button-icon {
    position: relative;
    z-index: 1;
  }

  &:hover,
  &:focus {
    color: var(--sscds-color-icon-inverse);

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 24px;
      height: 24px;
      border-radius: 100%;
      background-color: var(--sscds-color-background-action-danger-hover);
      z-index: 0;
    }
  }
`;

const SearchInput = styled(Input)`
  padding-left: var(--sscds-space-12x);

  padding-right: ${({ $isClearable }) =>
    $isClearable ? 'var(--sscds-space-12x)' : 'var(--sscds-space-4x)'};
`;

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
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
      shouldTriggerSearchOnMount = false,
      className,
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

    const search = useCallback(
      async (val: string) => {
        if (isInvalid) return;

        setInternalIsSearching(true);
        await onSearch?.(val);
        setInternalIsSearching(false);
      },
      [isInvalid, onSearch],
    );

    // trigger search on mount if defaultValue is provided
    useEffect(() => {
      if (shouldTriggerSearchOnMount && isNotNilOrEmpty(value)) {
        search(value);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
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
    const handleOnKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => {
      if (isNotUndefined(onKeyUp)) {
        onKeyUp(e);
      }
      if (e.key === 'Enter' && isNotUndefined(onSearch)) {
        search(value);
      }
    };

    return (
      <SearchBarRoot className={cls(CLX_COMPONENT, className)}>
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
            <Icon
              color={
                isDisabled
                  ? 'var(--sscds-color-icon-disabled)'
                  : 'var(--sscds-color-icon-subtle)'
              }
              name={SSCIconNames.search}
              type={IconTypes.ssc}
            />
          )}
        </SearchIconWrapper>
        {isClearButtonVisible && (
          <ClearButton
            aria-label="Clear search value"
            as="button"
            onClick={handleClearSearch}
          >
            <Icon
              className="clear-button-icon"
              name={SSCIconNames.times}
              type={IconTypes.ssc}
            />
          </ClearButton>
        )}
      </SearchBarRoot>
    );
  },
);

export default SearchBar;
