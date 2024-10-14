import { css } from 'styled-components';

import { getFormStyle } from '../../../utils';

export const datePickerStyles = css`
  .DateRangePicker-input {
    font-family: var(--sscds-font-family-body);
    height: ${getFormStyle('fieldHeight')};
    padding: var(--sscds-space-1x) var(--sscds-space-10x) var(--sscds-space-1x)
      var(--sscds-space-4x);
    background: ${getFormStyle('bgColor')};
    border: 0 none transparent;
    box-shadow: inset 0 0 0 1px ${getFormStyle('borderColor')};
    border-radius: var(--sscds-radii-input);
    color: ${getFormStyle('color')};
    font-size: var(--sscds-font-size-body-md);
    line-height: var(--sscds-font-lineheight-body-md);
    font-weight: var(--sscds-font-weight-body-default);
  }
  .DateRangePicker-input:disabled {
    box-shadow: inset 0px 0px 0px 1px var(--sscds-color-border-input-disabled);
    background: var(--sscds-color-background-input-disabled);
  }
  .DateRangePicker-input:hover:not(:disabled, :focus) {
    box-shadow: inset 0px 0px 0px 1px var(--sscds-color-border-input-hover);
    background: var(--sscds-color-background-input-hover);
  }
  .DateRangePicker-input:focus {
    box-shadow: inset 0 0 0 2px ${getFormStyle('focusBorderColor')};
    outline: none;
  }
  .DateRangePicker-input::placeholder,
  .DateRangePicker-input::-webkit-input-placeholder {
    color: ${getFormStyle('placeholderColor')};
  }
  .DateRangePicker-input:-ms-input-placeholder {
    color: ${getFormStyle('placeholderColor')};
  }
  .DateRangePicker-calendar {
    font-size: var(--sscds-font-size-body-md);
    line-height: var(--sscds-font-lineheight-body-md);
    font-weight: var(--sscds-font-weight-body-default);
    padding: var(--sscds-space-4x);
    border-radius: var(--sscds-radii-surface-md);
    box-shadow: var(--sscds-shadow-1x);
    background: var(--sscds-color-background-surface-default);
    border: 1px solid var(--sscds-color-border-surface-default);
    display: inline-block;
    position: relative;
  }
  .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .react-datepicker__input-container .DateRangePicker-input {
    display: block;
    width: 100%;
  }
  .react-datepicker__input-container {
    position: relative;
  }
  .react-datepicker__input-container .sscds-iconbox {
    position: absolute;
    right: calc(var(--sscds-space-3x) + var(--sscds-space-half-x));
    top: 50%;
    transform: translateY(-50%);
    color: var(--sscds-color-icon-subtle);
  }
  .react-datepicker__input-container:focus-within .sscds-iconbox {
    color: var(--sscds-color-icon-default);
  }
  .react-datepicker__input-container:has(input:disabled) .sscds-iconbox {
    color: var(--sscds-color-icon-disabled);
  }
  .react-datepicker__header {
    text-align: center;
    position: relative;
    border-bottom: 0;
    padding-top: 0;
  }
  .react-datepicker__day {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    margin: 0;
  }
  .react-datepicker__day:hover,
  .react-datepicker__year-text:hover,
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: var(--sscds-color-primary-9);
    border-radius: var(--sscds-radii-default);
    font-weight: var(--sscds-font-weight-elementlabel-strong);
    color: var(--sscds-color-text-white);
  }
  .react-datepicker__triangle {
    position: absolute;
    left: var(
      --sscds-space-12x
    ) !important; /* Needed for input with 100% width */
  }
  .react-datepicker__day-name {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    margin: 0;
    height: 2rem;
    width: 2rem;
  }
  .react-datepicker__day--outside-month {
    visibility: hidden;
  }
  .react-datepicker__day--disabled {
    cursor: default;
    color: var(--sscds-color-text-subtle);
  }
  .react-datepicker-popper {
    z-index: 10;
    width: 16.25rem;
  }
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before {
    box-sizing: content-box;
    position: absolute;
    border: 8px solid transparent;
    height: 0;
    width: 1px;
    transform: none !important;
  }
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before {
    content: '';
    z-index: -1;
    border-width: 8px;
    left: var(--sscds-space-negative-2x);
  }
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle {
    top: 0;
    margin-top: var(--sscds-space-negative-2x);
  }
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before {
    border-top: none;
    border-bottom-color: var(--sscds-color-background-surface-default);
  }
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before {
    top: -1px;
    border-bottom-color: var(--sscds-color-border-surface-default);
  }
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle {
    bottom: 0;
    margin-bottom: var(--sscds-space-negative-2x);
  }
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before {
    border-bottom: none;
    border-top-color: var(--sscds-color-border-surface-default);
  }
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before {
    bottom: 1px;
    border-top-color: var(--sscds-color-background-surface-default);
  }
  .react-datepicker-popper[data-placement='bottom-end']
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement='top-end']
    .react-datepicker__triangle {
    left: auto;
    right: var(--sscds-space-12x);
  }
  .react-datepicker-popper[data-placement^='top'] {
    margin-bottom: var(--sscds-space-2x);
  }
  .react-datepicker__year-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .react-datepicker__year-text {
    width: 25%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: var(--sscds-color-primary-9);
    color: var(--sscds-color-text-white);
    border-radius: var(--sscds-radii-default);
  }
  .react-datepicker__year-text--disabled {
    color: var(--sscds-color-text-subtle);
  }
  .react-datepicker__aria-live {
    border: 0;
    clip-path: circle(0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;
