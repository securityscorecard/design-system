import {
  type ChangeEventHandler,
  type ClipboardEventHandler,
  type FocusEventHandler,
  type KeyboardEventHandler,
  type MouseEventHandler,
  useState,
} from 'react';
import styled, { css } from 'styled-components';
import {
  dropLast,
  filter,
  includes,
  map,
  pipe,
  split,
  trim,
  uniq,
} from 'ramda';
import {
  isEmptyArray,
  isEmptyString,
  isNonEmptyArray,
  isNonEmptyString,
  isNotNull,
  isNotUndefined,
  noop,
  omitIndexes,
} from 'ramda-adjunct';
import { useDeepCompareEffect } from 'use-deep-compare';
import cls from 'classnames';

import { getFormStyle, getRadii, getSpace, pxToRem } from '../../../utils';
import { Inline, Padbox } from '../../layout';
import { SpaceSizes } from '../../../theme';
import { Icon } from '../../Icon';
import { SSCIconNames } from '../../../theme/icons/icons.enums';
import { Pill } from '../../Pill';
import {
  MultiValueInputProps,
  ValueContainerProps,
} from './MultiValueInput.types';
import { CLX_COMPONENT } from '../../../theme/constants';

const ValueContainer = styled(Padbox)<{ $hasValue: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${getSpace('xs')};
  padding-left: ${getSpace(SpaceSizes.md)};
  overflow: hidden;
  flex: 1 1 0%;
  ${({ $hasValue, theme }) =>
    $hasValue &&
    css`
      padding-left: ${getSpace(SpaceSizes.xs, { theme })};
    `};
`;

const Control = styled.div<ValueContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${getFormStyle('fieldHeight')};
  background: ${getFormStyle('bgColor')};
  border-radius: var(--sscds-radii-input);
  box-shadow: inset 0 0 0 1px ${getFormStyle('borderColor')};
  cursor: text;

  &:hover {
    box-shadow: inset 0px 0px 0px 1px var(--sscds-color-border-input-hover);
    background: var(--sscds-color-background-input-hover);
  }

  &:focus-within,
  &.focus-within {
    outline: 0;
    box-shadow: inset 0 0 0 2px ${getFormStyle('focusBorderColor')};
  }

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      &,
      &:hover {
        background: ${getFormStyle('disabledBgColor')};
        box-shadow: inset 0 0 0 1px ${getFormStyle('disabledBorderColor')};
        cursor: not-allowed;
      }
      & ${ValueContainer} {
        opacity: 0.5;
      }
    `};

  ${({ $isInvalid }) =>
    $isInvalid &&
    css`
      && {
        box-shadow: inset 0 0 0 2px ${getFormStyle('invalidBorderColor')};
      }
    `};
`;

const InputContainer = styled.div`
  display: inline-grid;
  grid-area: 1 / 1 / 2 / 3;
  grid-template-columns: 0 min-content;
  line-height: var(--sscds-font-lineheight-body-md);
  flex: 1 1 auto;

  &::after {
    content: attr(data-value) ' ';
    visibility: hidden;
    white-space: pre;
    grid-area: 1 / 2 / auto / auto;
    min-width: 2px;
  }
`;

const InputField = styled.input`
  grid-area: 1 / 2 / auto / auto;
  background: transparent;
  border: 0 none;
  color: ${getFormStyle('color')};
  font-family: var(--sscds-font-family-body);
  font-size: var(--sscds-font-size-body-md);
  line-height: var(--sscds-font-lineheight-body-md);
  outline: none;
  min-width: 2px;
  width: 100%;
  &::-ms-clear {
    display: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${getFormStyle('placeholderColor')};
  }
  :-ms-input-placeholder {
    color: ${getFormStyle('placeholderColor')};
  }
`;

const ClearButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${getFormStyle('indicatorColor')};
  background: transparent none;
  border: 0 none;
  cursor: pointer;
  font-size: var(--sscds-font-size-elementlabel-md);
  padding: ${pxToRem(0, 18)};
  height: ${pxToRem(34)};
  margin: ${pxToRem(1, 0)};
  outline-offset: 0;
  border-top-right-radius: ${getRadii('default')};
  border-bottom-right-radius: ${getRadii('default')};

  &:hover {
    color: ${getFormStyle('hoverIndicatorColor')};
  }
`;

const MultiValueInput = ({
  value = [],
  isInvalid = false,
  isDisabled = false,
  isClearable = true,
  onValueAdd = noop,
  onValueRemove = noop,
  onValuesChange = noop,
  onInputChange = noop,
  onPaste = noop,
  placeholder,
  valuesDelimiter = ';',
  pattern,
  id,
  inputId,
  inputValue: defaultInputValue = '',
  maxPillLabelLength = 16,
  className,
  ...props
}: MultiValueInputProps) => {
  const [values, setValues] = useState(value);
  const [inputValue, setInputValue] = useState(defaultInputValue);
  const [inputRef, setInputRef] = useState(null);

  const addValue = (newValue: string): void => {
    const isValid = inputRef?.checkValidity();
    if (!isValid) {
      return;
    }
    // add only unique values
    const isDuplicateValue = includes(newValue, values);

    if (isDuplicateValue) {
      return;
    }

    const containsMultipleValues = includes(valuesDelimiter, newValue);

    if (containsMultipleValues) {
      const parsedValues = pipe(
        split(valuesDelimiter),
        map(trim),
        filter(isNonEmptyString),
      )(newValue);
      const newValues = [...values, ...parsedValues];
      setValues(uniq(newValues));
      onValueAdd(parsedValues, newValues);
      onValuesChange(newValues);
    } else {
      const newValues = [...values, newValue];
      setValues(newValues);
      onValueAdd([newValue], newValues);
      onValuesChange(newValues);
    }
    setInputValue('');
  };

  const removeValue = (index?: number): void => {
    setValues((prevValues) => {
      const newValues = isNotUndefined(index)
        ? omitIndexes([index], prevValues)
        : dropLast(1, prevValues);
      onValueRemove(newValues);
      onValuesChange(newValues);

      return newValues;
    });
  };

  useDeepCompareEffect(() => {
    setValues(value);
  }, [value, setValues]);

  const handleInputOnKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    switch (e.key) {
      case ';':
      case 'Enter':
        e.preventDefault();
        if (isInvalid) {
          return;
        }
        if (isNonEmptyString(inputValue)) {
          addValue((e.target as HTMLInputElement).value);
        }
        break;
      case 'Backspace':
      case 'Delete':
        if (isEmptyString(inputValue) && isNonEmptyArray(values)) {
          removeValue();
        }
        break;
      default:
    }
  };

  const handleInputOnPaste: ClipboardEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    const pastedValue = onPaste(e);

    if (typeof pastedValue === 'string') {
      addValue(pastedValue);
    } else {
      addValue((e.clipboardData || window.clipboardData).getData('text'));
    }
  };

  const handleInputOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onInputChange(e);
    setInputValue(e.target.value);
  };

  const handleInputOnBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    if (isInvalid) {
      return;
    }
    if (isNonEmptyString(inputValue)) {
      addValue((e.target as HTMLInputElement).value);
    }
  };

  const handleContainerOnClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    if (isNotNull(inputRef)) {
      inputRef.focus();
    }
  };

  const handleClearAllOnClick = () => {
    setValues([]);
    onValueRemove([]);
    onValuesChange([]);
  };
  const handleClearAllOnKeyDown: KeyboardEventHandler<HTMLButtonElement> = (
    e,
  ) => {
    switch (e.key) {
      case ' ':
      case 'Enter':
        e.preventDefault();
        setValues([]);
        onValueRemove([]);
        onValuesChange([]);
        inputRef.focus();
        break;
      default:
    }
  };

  const hadleOnRemove = (index: number) => () => {
    removeValue(index);
    inputRef.focus();
  };

  return (
    <Control
      $isDisabled={isDisabled}
      $isInvalid={isInvalid}
      className={cls(CLX_COMPONENT, className)}
      data-testid="multivalueinputContainer"
      id={id}
      onClick={handleContainerOnClick}
    >
      <Inline align="center" justify="space-between">
        <ValueContainer
          $hasValue={isNonEmptyArray(values)}
          paddingSize={SpaceSizes.xs}
          style={{ overflow: 'hidden' }}
        >
          {values.map((label, index) => (
            <Pill
              key={label}
              label={label}
              maxLabelLength={maxPillLabelLength}
              onRemove={!isDisabled ? hadleOnRemove(index) : undefined}
            />
          ))}
          <InputContainer data-value={inputValue || placeholder}>
            <InputField
              {...props}
              ref={setInputRef}
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isDisabled}
              id={inputId}
              pattern={pattern}
              placeholder={isEmptyArray(values) ? placeholder : undefined}
              spellCheck="false"
              type="text"
              value={inputValue}
              onBlur={handleInputOnBlur}
              onChange={(e) => handleInputOnChange(e)}
              onKeyDown={handleInputOnKeyDown}
              onPaste={handleInputOnPaste}
            />
          </InputContainer>
        </ValueContainer>
        {isClearable && !isDisabled && isNonEmptyArray(values) && (
          <ClearButton
            aria-label="Clear all values"
            type="reset"
            onClick={handleClearAllOnClick}
            onKeyDown={handleClearAllOnKeyDown}
          >
            <Icon name={SSCIconNames.times} />
          </ClearButton>
        )}
      </Inline>
    </Control>
  );
};

export default MultiValueInput;
