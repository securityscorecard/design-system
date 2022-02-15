import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { isNotUndefined, noop } from 'ramda-adjunct';
import { omit, prop } from 'ramda';

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
import { TextAreaProps } from './TextArea.types';
import { useAutosize } from './hooks/useAutosize';
import { useRunAfterUpdate } from './hooks/useRunAfterUpdate';
import { SpaceSizes } from '../../../theme';

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
  line-height: ${getLineHeight('md')};
  height: ${prop('height')};
  border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
  border-radius: ${getRadii('default')};
  box-shadow: inset 0px 0px 0px 1px ${getFormStyle('bgColor')};
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
      box-shadow: inset 0px 0px 0px 1px ${getFormStyle('invalidBorderColor')};
    `};

  &:disabled {
    background: ${getFormStyle('disabledBgColor')};
    border-color: ${getFormStyle('disabledBorderColor')};
    box-shadow: inset 0px 0px 0px 1px ${getFormStyle('disabledBgColor')};
  }

  &:focus {
    outline: none;
    border-color: ${getFormStyle('focusBorderColor')};
    box-shadow: inset 0px 0px 0px 1px ${getFormStyle('focusBorderColor')};
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
  color: ${getColor('graphite2B')};
  background: ${getFormStyle('bgColor')};
  ${({ isInvalid }) =>
    isInvalid &&
    css`
      color: ${getFormStyle('invalidBorderColor')};
    `}
`;

const TextArea: React.FC<
  TextAreaProps & React.PropsWithRef<JSX.IntrinsicElements['textarea']>
> = ({
  maxLength,
  isInvalid = false,
  isDisabled = false,
  style,
  className,
  ...props
}) => {
  const { value = '', defaultValue = '', onChange = noop } = props as {
    value: string;
    defaultValue: string;
    onChange: React.ChangeEventHandler;
  };
  const textAreaRef = useRef<HTMLTextAreaElement>();
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
    <TextAreaWrapper className={className} height={parentHeight} style={style}>
      <StyledTextArea
        ref={textAreaRef}
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
};

TextArea.propTypes = {
  maxLength: PropTypes.number,
  isInvalid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextArea;
