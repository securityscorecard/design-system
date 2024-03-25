import React, { ComponentPropsWithoutRef, forwardRef, useState } from 'react';
import styled, { css } from 'styled-components';
import cls from 'classnames';
import { isNotUndefined } from 'ramda-adjunct';

import {
  getColor,
  getFontFamily,
  getFontSize,
  getFormStyle,
  getLineHeight,
  getRadii,
  getSpace,
  pxToRem,
} from '../../../utils';
import { Padbox } from '../../layout';
import { CLX_COMPONENT } from '../../../theme/constants';
import { useAutosize } from './hooks/useAutosize';
import { mergeRefs } from '../../../utils/mergeRefs';

interface TextAreaProps {
  maxLength?: number;
  isInvalid?: boolean;
  isDisabled?: boolean;
  maxHeight?: number;
  minHeight?: number;
}
type TextareaStyledProps = {
  $minHeight?: TextAreaProps['minHeight'];
  $maxHeight?: TextAreaProps['maxHeight'];
};
type TextareaRootProps = {
  $minHeight?: TextAreaProps['minHeight'];
  $maxHeight?: TextAreaProps['maxHeight'];
  $isDisabled?: TextAreaProps['isDisabled'];
  $isInvalid?: TextAreaProps['isInvalid'];
};

const TextareaStyled = styled.textarea<TextareaStyledProps>`
  display: block;
  border: 0 none;
  width: 100%;
  background-color: transparent;
  resize: none;
  font-family: ${getFontFamily('base')};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('lg')};
  color: ${getFormStyle('color')};
  padding: 0;

  ${({ $minHeight }) =>
    $minHeight &&
    css`
      min-height: ${pxToRem($minHeight)};
    `};
  ${({ $maxHeight }) =>
    $maxHeight &&
    css`
      max-height: ${pxToRem($maxHeight)};
    `};

  &:focus {
    outline: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${getFormStyle('placeholderColor')};
  }
  :-ms-input-placeholder {
    color: ${getFormStyle('placeholderColor')};
  }
`;

const TextareaRoot = styled(Padbox)<TextareaRootProps>`
  position: relative;
  border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
  border-radius: ${getRadii('default')};
  box-shadow: inset 0px 0px 0px 1px ${getFormStyle('bgColor')};
  color: ${getFormStyle('color')};
  cursor: text;
  background-color: ${getColor('neutral.0')};

  ${({ $hasMaxLength }) =>
    $hasMaxLength &&
    css`
      padding-bottom: ${getSpace('lg')};
    `};
  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      background: ${getFormStyle('disabledBgColor')};
      border-color: ${getFormStyle('disabledBorderColor')};
      box-shadow: inset 0px 0px 0px 1px ${getFormStyle('disabledBgColor')};
    `};
  ${({ $isInvalid }) =>
    $isInvalid &&
    css`
      border-color: ${getFormStyle('invalidBorderColor')};
      box-shadow: inset 0px 0px 0px 1px ${getFormStyle('invalidBorderColor')};
    `};

  &:focus-within {
    outline: none;
    border-color: ${getFormStyle('focusBorderColor')};
    box-shadow: inset 0px 0px 0px 1px ${getFormStyle('focusBorderColor')};
  }
`;

const Counter = styled.span<{ $isInvalid: boolean }>`
  position: absolute;
  right: ${pxToRem(14)};
  bottom: ${pxToRem(8)};
  font-size: ${getFontSize('md')};
  color: ${getColor('text.secondary')};

  ${({ $isInvalid }) =>
    $isInvalid &&
    css`
      color: ${getFormStyle('invalidBorderColor')};
    `}
`;

const getHeightBoundary = (
  height: number | undefined,
  hasMaxLength: boolean,
): number | null =>
  height
    ? height - (hasMaxLength ? 32 : 16) - 16 // height - bottom padding (lg of md) - top padding
    : null;

const TextArea = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps & Omit<ComponentPropsWithoutRef<'textarea'>, 'disabled'>
>(
  (
    {
      maxLength,
      isInvalid,
      isDisabled,
      className,
      maxHeight = 600,
      minHeight,
      ...props
    },
    ref,
  ) => {
    const { value, defaultValue, ...rest } = props;
    const [val, setVal] = useState((defaultValue as string) || '');
    const [textAreaRef, setTextAreaRef] = useState(null);
    const combinedRefs = mergeRefs(ref, setTextAreaRef);
    const isControlled = value !== undefined;
    const currentValueLength = isControlled
      ? (value as string).length
      : val.length;
    const isFieldInvalid = isInvalid || currentValueLength > maxLength;
    const hasMaxLength = isNotUndefined(maxLength);
    useAutosize(textAreaRef, isControlled ? (value as string) : val);

    return (
      <TextareaRoot
        $hasMaxLength={hasMaxLength}
        $isDisabled={isDisabled}
        $isInvalid={isFieldInvalid}
        className={cls(CLX_COMPONENT, className)}
        paddingSize="md"
        onClick={() => {
          textAreaRef.focus();
        }}
      >
        <TextareaStyled
          ref={combinedRefs}
          {...rest}
          $maxHeight={getHeightBoundary(maxHeight, hasMaxLength)}
          $minHeight={getHeightBoundary(minHeight, hasMaxLength)}
          disabled={isDisabled}
          {...(!isControlled
            ? {
                value: val,
                onChange: (e) => setVal(e.target.value),
              }
            : { value })}
        />
        {isNotUndefined(maxLength) && (
          <Counter $isInvalid={isFieldInvalid}>
            {maxLength - currentValueLength}
          </Counter>
        )}
      </TextareaRoot>
    );
  },
);

export default TextArea;
