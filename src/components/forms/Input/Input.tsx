import styled, { css } from 'styled-components';

import { createPadding, getFormStyle } from '../../../utils';
import { InputProps } from './Input.types';
import { SpaceSizes } from '../../../theme';
import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';
import { CLX_COMPONENT } from '../../../theme/constants';

const Input = styled.input.attrs<InputProps>(
  ({ isDisabled = false, isInvalid = false, type = 'text' }) => ({
    disabled: isDisabled,
    isInvalid,
    className: CLX_COMPONENT,
    type,
  }),
)<InputProps>`
  display: block;
  width: 100%;
  height: ${getFormStyle('fieldHeight')};
  ${({ theme }) =>
    createPadding({
      paddingSize: SpaceSizes.md,
      paddingType: PaddingTypes.squish,
      theme,
    })};
  background: ${getFormStyle('bgColor')};
  box-shadow: inset 0px 0px 0px 1px ${getFormStyle('borderColor')};
  border: 0 transparent none;
  border-radius: var(--sscds-radii-input);
  color: ${getFormStyle('color')};
  font-family: var(--sscds-font-family-body);
  font-size: var(--sscds-font-size-body-md);
  line-height: ${getFormStyle('fieldLineHeight')};
  outline: none;

  &:hover:not(:disabled, :focus, .focus) {
    box-shadow: inset 0px 0px 0px 1px var(--sscds-color-border-input-hover);
    background: var(--sscds-color-background-input-hover);
  }

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      &,
      &:hover {
        box-shadow: inset 0px 0px 0px 2px ${getFormStyle('invalidBorderColor')} !important;
      }
    `};

  &:focus,
  &.focus {
    box-shadow: inset 0px 0px 0px 2px ${getFormStyle('focusBorderColor')};
  }

  &:disabled {
    color: var(--sscds-color-text-disabled);
    background: ${getFormStyle('disabledBgColor')};
    border-color: ${getFormStyle('disabledBorderColor')};
    cursor: not-allowed;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: var(--sscds-color-text-disabled);
    }
    :-ms-input-placeholder {
      color: var(--sscds-color-text-disabled);
    }
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${getFormStyle('placeholderColor')};
  }
  :-ms-input-placeholder {
    color: ${getFormStyle('placeholderColor')};
  }

  &[type='search']::-webkit-search-decoration,
  &[type='search']::-webkit-search-cancel-button,
  &[type='search']::-webkit-search-results-button,
  &[type='search']::-webkit-search-results-decoration {
    display: none;
  }
  &[type='number'][data-has-spin='false'] {
    appearance: textfield;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      appearance: none;
      margin: 0;
    }
  }
`;

export default Input;
