import type { ComponentPropsWithRef, MutableRefObject } from 'react';
import type { TextAreaProps } from './TextArea.types';

import { forwardRef, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { isNotUndefined, isString } from 'ramda-adjunct';
import { omit, prop } from 'ramda';
import cls from 'classnames';

import {
  createPadding,
  getColor,
  getFontFamily,
  getFontSize,
  getFormStyle,
  getLineHeight,
  getRadii,
  getSpace,
  pxToRem,
} from '../../../utils';
import { useAutosize } from './hooks/useAutosize';
import { useRunAfterUpdate } from './hooks/useRunAfterUpdate';
import { SpaceSizes } from '../../../theme';
import { CLX_COMPONENT } from '../../../theme/constants';
import { mergeRefs } from '../../../utils/mergeRefs';

const TextAreaWrapper = styled.div<{ $height: string }>`
  position: relative;
  height: ${prop('$height')};
`;

type StyledTextAreaProps = {
  $height: string;
  $isInvalid: boolean;
  $hasMaxLength: boolean;
};
const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  resize: none;
  width: 100%;
  font-family: ${getFontFamily('base')};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('lg')};
  height: ${prop('$height')};

  /* height: inherit; */
  border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
  border-radius: ${getRadii('default')};
  box-shadow: inset 0 0 0 1px ${getFormStyle('bgColor')};
  color: ${getFormStyle('color')};
  ${({ $hasMaxLength, theme }) =>
    $hasMaxLength
      ? css`
          ${createPadding({ paddingSize: SpaceSizes.md, theme })};
          padding-bottom: ${getSpace(SpaceSizes.lg)};
        `
      : createPadding({ paddingSize: SpaceSizes.md, theme })};
  ${({ $isInvalid }) =>
    $isInvalid &&
    css`
      border-color: ${getFormStyle('invalidBorderColor')};
      box-shadow: inset 0 0 0 1px ${getFormStyle('invalidBorderColor')};
    `};

  &:disabled {
    background: ${getFormStyle('disabledBgColor')};
    border-color: ${getFormStyle('disabledBorderColor')};
    box-shadow: inset 0 0 0 1px ${getFormStyle('disabledBgColor')};
  }

  &:focus {
    outline: none;
    border-color: ${getFormStyle('focusBorderColor')};
    box-shadow: inset 0 0 0 1px ${getFormStyle('focusBorderColor')};
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${getFormStyle('placeholderColor')};
  }

  :-ms-input-placeholder {
    color: ${getFormStyle('placeholderColor')};
  }
`;

const Counter = styled.span<{ isInvalid: boolean }>`
  position: absolute;
  right: ${pxToRem(15)};
  bottom: ${pxToRem(10)};
  font-size: ${getFontSize('md')};
  color: ${getColor('neutral.700')};
  background: ${getFormStyle('bgColor')};
  ${({ isInvalid }) =>
    isInvalid &&
    css`
      color: ${getFormStyle('invalidBorderColor')};
    `}
`;

const TextArea = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps & ComponentPropsWithRef<'textarea'>
>(
  (
    { maxLength, isInvalid = false, isDisabled = false, className, ...props },
    ref,
  ) => {
    const { value, defaultValue, onChange } = props as {
      value: string;
      defaultValue: string;
      onChange: React.ChangeEventHandler;
    };
    const textAreaRef = useRef<HTMLTextAreaElement>();
    const mergedRef = mergeRefs(textAreaRef, ref);
    const isControlled = isNotUndefined(value) && isString(value);
    const { text, parentHeight, textAreaHeight, autosize } = useAutosize(
      mergedRef as MutableRefObject<HTMLTextAreaElement>,
      value ?? defaultValue ?? '',
    );
    const [currentValueLength, setCurrentValueLength] = useState(text.length);
    const runAfterUpdate = useRunAfterUpdate();

    const handleOnChange = (e) => {
      onChange?.(e);
      if (isControlled) {
        runAfterUpdate(() => {
          setCurrentValueLength(textAreaRef.current.value.length);
          autosize();
        });
      } else {
        setCurrentValueLength(textAreaRef.current.value.length);
        autosize();
      }
    };

    const isFieldInvalid = isInvalid || currentValueLength > maxLength;

    return (
      <TextAreaWrapper
        $height={parentHeight}
        className={cls(CLX_COMPONENT, className)}
      >
        <StyledTextArea
          ref={mergedRef}
          $hasMaxLength={isNotUndefined(maxLength)}
          $height={textAreaHeight}
          $isInvalid={isFieldInvalid}
          disabled={isDisabled}
          onChange={handleOnChange}
          {...omit(['onChange'], props)}
        />
        {isNotUndefined(maxLength) && (
          <Counter isInvalid={isFieldInvalid}>
            {maxLength - currentValueLength}
          </Counter>
        )}
      </TextAreaWrapper>
    );
  },
);

export default TextArea;
