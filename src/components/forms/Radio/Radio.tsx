import styled, { css } from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';
import cls from 'classnames';

import { getFormStyle, getRadii, pxToRem } from '../../../utils';
import { Label } from '../Label';
import { TogglingInputProps } from '../types/forms.types';
import { RadioProps } from './Radio.types';
import { CLX_COMPONENT } from '../../../theme/constants';

const RadioContainer = styled.div`
  position: relative;
`;

const RadioLabel = styled(Label)<
  React.HTMLProps<HTMLLabelElement> & { hasLabel: boolean }
>`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
  font-weight: var(--sscds-font-weight-body-default);

  ${({ theme, hasLabel }) => {
    const toggleSize = getFormStyle('toggleSize')({ theme });
    const leftPadding = hasLabel ? toggleSize + theme.space.sm : toggleSize;

    return css`
      min-height: ${pxToRem(toggleSize)};
      line-height: ${pxToRem(toggleSize)};
      padding-left: ${pxToRem(leftPadding)};

      &::before,
      &::after {
        height: ${pxToRem(20)};
        width: ${pxToRem(20)};
      }
    `;
  }}

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    border-radius: ${getRadii('circle')};
  }

  &::before {
    border: 1px solid ${getFormStyle('borderColor')};
    background-color: ${getFormStyle('bgColor')};
  }

  &:hover::before {
    border-color: var(--sscds-color-border-input-hover);
    background: var(--sscds-color-background-input-hover);
  }
`;

const RadioInput = styled.input<TogglingInputProps>`
  opacity: 0;
  position: absolute;

  &:checked + ${/* sc-selector */ RadioLabel}::after {
    border: 6px solid ${getFormStyle('activeBorderColor')};
  }

  &:disabled + ${/* sc-selector */ RadioLabel} {
    color: ${getFormStyle('disabledColor')};
  }

  &:disabled + ${/* sc-selector */ RadioLabel}::before {
    border-color: ${getFormStyle('disabledBorderColor')};
    background: ${getFormStyle('disabledBgColor')};
  }

  &:disabled:checked + ${/* sc-selector */ RadioLabel}::after {
    color: ${getFormStyle('disabledActiveColor')};
  }

  &:focus + ${/* sc-selector */ RadioLabel}::before {
    border: 2px solid ${getFormStyle('activeBorderColor')};
  }

  &:focus-visible + ${/* sc-selector */ RadioLabel} {
    outline: var(--sscds-focus-indicator-width) solid
      var(--sscds-focus-indicator-color);
    outline-offset: var(--sscds-focus-outline-offset, -1px);
    box-shadow: none;
  }

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      & + ${RadioLabel}::before {
        border: 2px solid ${getFormStyle('invalidBorderColor')};
      }
      &:checked + ${RadioLabel}::after {
        border-color: ${getFormStyle('invalidBorderColor')};
      }
    `}
`;

const Radio = ({
  name,
  radioId,
  label,
  isDisabled = false,
  isInvalid = false,
  className,
  ...props
}: RadioProps) => {
  const hasLabel = isNotUndefined(label);

  return (
    <RadioContainer>
      <RadioInput
        className={cls(CLX_COMPONENT, className)}
        disabled={isDisabled}
        id={radioId}
        isInvalid={isInvalid}
        name={name}
        type="radio"
        {...props}
      />
      <RadioLabel hasLabel={hasLabel} htmlFor={radioId}>
        {label}
      </RadioLabel>
    </RadioContainer>
  );
};

export default Radio;
