import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { allPass } from 'ramda';
import { isNonEmptyString, isNotUndefined } from 'ramda-adjunct';

import { createMarginSpacing, getFormStyle, pxToRem } from '../../../utils';
import { Label } from '../Label';
import { TogglingInputProps } from '../types/forms.types';
import { RadioProps } from './Radio.types';

const RadioWrapper = styled.div`
  & + & {
    ${createMarginSpacing({ top: 0.25 })};
  }
`;

const RadioLabel = styled(Label)<
  React.HTMLProps<HTMLLabelElement> & { hasLabel: boolean }
>`
  position: relative;
  display: inline-block;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;

  ${({ theme, hasLabel }) => {
    const toggleSize = getFormStyle('toggleSize')({ theme });
    const leftPadding = hasLabel ? toggleSize + 10 : toggleSize;

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
    border-radius: 100%;
  }

  &::before {
    border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
  }
`;

const RadioInput = styled.input<TogglingInputProps>`
  display: none;

  &:checked + ${/* sc-selector */ RadioLabel}::after {
    border: 6px solid ${getFormStyle('activeBorderColor')};
  }

  &:disabled + ${/* sc-selector */ RadioLabel}::before {
    border-color: ${getFormStyle('disabledBorderColor')};
    background: ${getFormStyle('disabledBgColor')};
  }

  &:disabled:checked + ${/* sc-selector */ RadioLabel}::after {
    color: ${getFormStyle('disabledActiveColor')};
  }

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      & + ${RadioLabel}::before {
        border: ${getFormStyle('statefulBorderWidth')} solid
          ${getFormStyle('invalidBorderColor')};
      }
      &:checked + ${RadioLabel}::after {
        border-color: ${getFormStyle('invalidBorderColor')};
      }
    `}
`;

const Radio: React.FC<RadioProps> = ({
  name,
  radioId,
  label,
  isDisabled = false,
  isInvalid = false,
  ...props
}) => {
  const hasLabel = allPass([isNotUndefined, isNonEmptyString])(label);

  return (
    <RadioWrapper>
      <RadioInput
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
    </RadioWrapper>
  );
};

Radio.propTypes = {
  radioId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
};

export default Radio;
