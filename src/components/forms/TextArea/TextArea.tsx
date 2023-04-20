import type { ChangeEventHandler, FC, PropsWithRef } from 'react';
import type { TextAreaProps } from './TextArea.types';

import { forwardRef, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { isNotUndefined, noop } from 'ramda-adjunct';
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

const TextAreaWrapper = styled.div<{ height: string }>`
  position: relative;
  height: ${prop('height')};
`;

const StyledTextArea = styled.textarea<{
  height: string;
  isInvalid: boolean;
  hasMaxLength: boolean;
}>`
  resize: none;
  width: 100%;
  font-family: ${getFontFamily('base')};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('lg')};
  height: ${prop('height')};
  border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
  border-radius: ${getRadii('default')};
  box-shadow: inset 0 0 0 1px ${getFormStyle('bgColor')};
  color: ${getFormStyle('color')};
  ${({ hasMaxLength, theme }) =>
    hasMaxLength
      ? css`
          ${createPadding({ paddingSize: SpaceSizes.md, theme })};
          padding-bottom: ${getSpace(SpaceSizes.lg)};
        `
      : createPadding({ paddingSize: SpaceSizes.md, theme })};
  ${({ isInvalid }) =>
    isInvalid &&
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

const TextArea: FC<
  TextAreaProps & PropsWithRef<JSX.IntrinsicElements['textarea']>
> = forwardRef(
  (
    {
      maxLength,
      isInvalid = false,
      isDisabled = false,
      style,
      className,
      ...props
    },
    ref,
  ) => {
    const {
      value = '',
      defaultValue = '',
      onChange = noop,
    } = props as {
      value: string;
      defaultValue: string;
      onChange: ChangeEventHandler;
    };
    const textAreaRef = useRef<HTMLTextAreaElement>();
    const mergedRef = mergeRefs(textAreaRef, ref);
    const { text, parentHeight, textAreaHeight, autosize } = useAutosize(
      textAreaRef,
      value || defaultValue,
    );
    const [currentValueLength, setCurrentValueLength] = useState(text.length);
    const runAfterUpdate = useRunAfterUpdate();

    const handleOnChange = (e) => {
      onChange(e);
      runAfterUpdate(() => {
        setCurrentValueLength(textAreaRef.current.value.length);
        autosize();
      });
    };

    const isFieldInvalid = isInvalid || currentValueLength > maxLength;

    return (
      <TextAreaWrapper
        className={cls(CLX_COMPONENT, className)}
        height={parentHeight}
        style={style}
      >
        <StyledTextArea
          ref={mergedRef}
          disabled={isDisabled}
          hasMaxLength={isNotUndefined(maxLength)}
          height={textAreaHeight}
          isInvalid={isFieldInvalid}
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
