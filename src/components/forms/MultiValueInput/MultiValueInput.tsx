import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import AutosizeInput from 'react-input-autosize';
import PropTypes from 'prop-types';
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
import 'focus-within-polyfill';
import cls from 'classnames';

import {
  getFontFamily,
  getFontSize,
  getFormStyle,
  getRadii,
  getSpace,
  pxToRem,
} from '../../../utils';
import { Cluster, Inline, Padbox } from '../../layout';
import { SpaceSizes } from '../../../theme';
import { Icon } from '../../Icon';
import { SSCIconNames } from '../../../theme/icons/icons.enums';
import { Pill } from '../../Pill';
import {
  MultiValueInputProps,
  ValueContainerProps,
} from './MultiValueInput.types';
import { CLX_COMPONENT } from '../../../theme/constants';

const getBorderStyle = (width, color) => css`
  box-shadow: inset 0 0 0 ${getFormStyle(width)} ${getFormStyle(color)};
`;

const Control = styled.div<ValueContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${getFormStyle('fieldHeight')};
  background: ${getFormStyle('bgColor')};
  border-radius: ${getRadii('default')};
  ${getBorderStyle('borderWidth', 'borderColor')};

  &:focus-within,
  &.focus-within {
    outline: 0;
    border-color: ${getFormStyle('focusBorderColor')};
    ${getBorderStyle('statefulBorderWidth', 'focusBorderColor')};
  }

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      background: ${getFormStyle('disabledBgColor')};
      ${getBorderStyle('borderWidth', 'disabledBorderColor')};
    `};

  ${({ $isInvalid }) =>
    $isInvalid &&
    css`
      && {
        border-color: ${getFormStyle('invalidBorderColor')};
        ${getBorderStyle('statefulBorderWidth', 'invalidBorderColor')};
      }
    `};
`;

const ValueContainer = styled(Padbox)`
  padding-left: ${getSpace(SpaceSizes.md)};
  ${({ $hasValue, theme }) =>
    $hasValue &&
    css`
      padding-left: ${getSpace(SpaceSizes.xs, { theme })};
    `};
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: ${getFormStyle('fieldLineHeight')};

  input {
    background: transparent;
    border: 0 none;
    color: ${getFormStyle('color')};
    font-family: ${getFontFamily('base')};
    font-size: ${getFontSize('md')};
    line-height: ${getFormStyle('fieldLineHeight')};
    outline: none;

    &::-ms-clear {
      display: none;
    }
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
  font-size: ${getFontSize('lg')};
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

const MultiValueInput: React.FC<MultiValueInputProps> = ({
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
}) => {
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

  const handleInputOnKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    e,
  ) => {
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

  const handleInputOnPaste: React.ClipboardEventHandler<HTMLInputElement> = (
    e,
  ) => {
    e.preventDefault();
    const pastedValue = onPaste(e);

    if (typeof pastedValue === 'string') {
      addValue(pastedValue);
    } else {
      addValue((e.clipboardData || window.clipboardData).getData('text'));
    }
  };

  const handleInputOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    onInputChange(e);
    setInputValue(e.target.value);
  };

  const handleInputOnBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    if (isInvalid) {
      return;
    }
    if (isNonEmptyString(inputValue)) {
      addValue((e.target as HTMLInputElement).value);
    }
  };

  const handleContainerOnClick: React.MouseEventHandler<HTMLDivElement> = (
    e,
  ) => {
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
  const handleClearAllOnKeyDown: React.KeyboardEventHandler<
    HTMLInputElement
  > = (e) => {
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
          <Cluster gap={SpaceSizes.xs}>
            {values.map((label, index) => (
              <Pill
                key={label}
                label={label}
                maxLabelLength={maxPillLabelLength}
                onRemove={!isDisabled ? hadleOnRemove(index) : undefined}
              />
            ))}
            <InputContainer>
              <AutosizeInput
                {...props}
                disabled={isDisabled}
                id={inputId}
                injectStyles={false}
                inputRef={setInputRef}
                minWidth={15}
                pattern={pattern}
                placeholder={isEmptyArray(values) ? placeholder : undefined}
                value={inputValue}
                onBlur={handleInputOnBlur}
                onChange={(e) => handleInputOnChange(e)}
                onKeyDown={handleInputOnKeyDown}
                onPaste={handleInputOnPaste}
              />
            </InputContainer>
          </Cluster>
        </ValueContainer>
        {isClearable && !isDisabled && isNonEmptyArray(values) && (
          <ClearButton
            aria-label="Clear all values"
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

MultiValueInput.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  isInvalid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isClearable: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  inputId: PropTypes.string,
  inputValue: PropTypes.string,
  valuesDelimiter: PropTypes.string,
  maxPillLabelLength: PropTypes.number,
  onValueAdd: PropTypes.func,
  onValueRemove: PropTypes.func,
  onValuesChange: PropTypes.func,
  onInputChange: PropTypes.func,
  onPaste: PropTypes.func,
};

export default MultiValueInput;
