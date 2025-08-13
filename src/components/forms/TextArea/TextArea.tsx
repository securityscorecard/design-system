import { ComponentPropsWithoutRef, forwardRef, useState } from 'react';
import styled, { css } from 'styled-components';
import cls from 'classnames';
import { isNotUndefined } from 'ramda-adjunct';

import { getFormStyle, getSpace, pxToRem } from '../../../utils';
import { Padbox } from '../../layout';
import { CLX_COMPONENT } from '../../../theme/constants';
import { useAutosize } from './hooks/useAutosize';
import { mergeRefs } from '../../../utils/mergeRefs';
import { Text } from '../../Text';

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
  $hasMaxLength: boolean;
};

const TextareaStyled = styled.textarea<TextareaStyledProps>`
  display: block;
  border: 0 none;
  width: 100%;
  background-color: transparent;
  resize: none;
  font-family: var(--sscds-font-family-body);
  font-size: var(--sscds-font-size-body-md);
  line-height: var(--sscds-font-lineheight-body-md);
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
  :disabled {
    cursor: not-allowed;
    color: var(--sscds-color-text-disabled);
    ::placeholder,
    ::-webkit-input-placeholder {
      color: var(--sscds-color-text-disabled);
    }
    :-ms-input-placeholder {
      color: var(--sscds-color-text-disabled);
    }
  }
`;

const TextareaRoot = styled(Padbox)<TextareaRootProps>`
  position: relative;
  border-radius: var(--sscds-radii-input);
  box-shadow: inset 0px 0px 0px 1px ${getFormStyle('borderColor')};
  color: ${getFormStyle('color')};
  cursor: text;
  background-color: ${getFormStyle('bgColor')};

  ${({ $hasMaxLength }) =>
    $hasMaxLength &&
    css`
      padding-bottom: ${getSpace('lg')};
    `};
  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      background: ${getFormStyle('disabledBgColor')} !important;
      box-shadow: inset 0px 0px 0px 1px ${getFormStyle('disabledBorderColor')} !important;
      cursor: not-allowed;
    `};
  ${({ $isInvalid }) =>
    $isInvalid &&
    css`
      box-shadow: inset 0px 0px 0px 2px ${getFormStyle('invalidBorderColor')} !important;
    `};

  &:hover:not(:focus-within) {
    box-shadow: inset 0px 0px 0px 1px var(--sscds-color-border-input-hover);
    background: var(--sscds-color-background-input-hover);
  }

  &:focus-within {
    outline: none;
    box-shadow: inset 0px 0px 0px 2px ${getFormStyle('focusBorderColor')};
  }
`;

const Counter = styled.span`
  position: absolute;
  right: ${pxToRem(14)};
  bottom: ${pxToRem(8)};
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
          aria-disabled={isDisabled || undefined}
          aria-invalid={isFieldInvalid || undefined}
          disabled={isDisabled}
          {...(!isControlled
            ? {
                value: val,
                onChange: (e) => setVal(e.target.value),
              }
            : { value })}
        />
        {isNotUndefined(maxLength) && (
          <Counter aria-hidden="true">
            <Text variant={isFieldInvalid ? 'danger' : 'subtle'}>
              {maxLength - currentValueLength}
            </Text>
          </Counter>
        )}
      </TextareaRoot>
    );
  },
);

export default TextArea;
