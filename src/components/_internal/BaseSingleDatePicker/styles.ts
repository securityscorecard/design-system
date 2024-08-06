import { css } from 'styled-components';

import { getColor, getFormStyle, getRadii, pxToRem } from '../../../utils';

export const datePickerStyles = css`
  .DateRangePicker-input {
    font-family: var(--sscds-font-family-body);
    height: ${getFormStyle('fieldHeight')};
    padding: ${pxToRem(4, 16)};
    background: ${getFormStyle('bgColor')};
    border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
    border-radius: ${getRadii('default')};
    color: ${getFormStyle('color')};
    font-size: var(--sscds-font-size-body-md);
    line-height: var(--sscds-font-lineheight-body-md);
    font-weight: var(--sscds-font-weight-body-default);
  }
  .DateRangePicker-input:focus {
    border: ${getFormStyle('statefulBorderWidth')} solid
      ${getFormStyle('focusBorderColor')};
    outline: none;
    padding: ${pxToRem(3, 15)};
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
    padding: ${pxToRem(16)};
    border-radius: ${getRadii('default')};
    box-shadow: 0 2px 6px 0 var(--sscds-slateA-slateA6);
    background: ${getColor('neutral.0')};
  }
  .react-datepicker {
    background-color: ${getColor('neutral.0')};
    border: 1px solid ${getColor('neutral.300')};
    border-radius: 0.3rem;
    display: inline-block;
    position: relative;
  }
  .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .react-datepicker__input-container .DateRangePicker-input {
    display: block;
    width: 100%;
  }
  .react-datepicker__header {
    text-align: center;
    position: relative;
    background: ${getColor('neutral.0')};
    border-bottom: 0;
    padding-top: 0;
  }
  .react-datepicker__current-month {
    font-size: var(--sscds-font-size-heading-4);
    line-height: var(--sscds-font-lineheight-heading-4);
    font-weight: var(--sscds-font-weight-heading);
    margin-top: ${pxToRem(16)};
    margin-bottom: ${pxToRem(20)};
    color: ${getColor('neutral.900')};
  }
  .react-datepicker__day {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: ${pxToRem(32)};
    width: ${pxToRem(32)};
    margin: 0;
  }
  .react-datepicker__day:hover,
  .react-datepicker__day--keyboard-selected {
    background-color: ${getColor('primary.600')};
    border-radius: 4px;
    font-weight: var(--sscds-font-weight-elementlabel-strong);
    color: ${getColor('neutral.0')};
  }
  .react-datepicker__triangle {
    position: absolute;
    left: ${pxToRem(50)} !important; /* Needed for input with 100% width */
    border-bottom-color: ${getColor('neutral.0')};
  }
  .react-datepicker__triangle::before {
    border-bottom-color: ${getColor('neutral.300')};
  }
  .react-datepicker__day-name {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    margin: 0;
    height: ${pxToRem(32)};
    width: ${pxToRem(32)};
  }
  .react-datepicker__day--outside-month {
    visibility: hidden;
  }
  .react-datepicker__day--disabled {
    cursor: default;
    color: ${getColor('neutral.400')};
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
    width: ${pxToRem(1)};
    transform: none !important;
  }
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before {
    content: '';
    z-index: -1;
    border-width: 8px;
    left: ${pxToRem(-8)};
    border-bottom-color: ${getColor('neutral.0')};
  }
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle {
    top: 0;
    margin-top: ${pxToRem(-8)};
  }
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before {
    border-top: none;
    border-bottom-color: ${getColor('neutral.0')};
  }
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before {
    top: ${pxToRem(-1)};
    border-bottom-color: ${getColor('neutral.300')};
  }
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle {
    bottom: 0;
    margin-bottom: ${pxToRem(-8)};
  }
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before {
    border-bottom: none;
    border-top-color: ${getColor('neutral.0')};
  }
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before {
    bottom: ${pxToRem(-1)};
    border-top-color: ${getColor('neutral.300')};
  }
  .react-datepicker-popper[data-placement='bottom-end']
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement='top-end']
    .react-datepicker__triangle {
    left: auto;
    right: ${pxToRem(50)};
  }
  .react-datepicker-popper[data-placement^='top'] {
    margin-bottom: ${pxToRem(10)};
  }
`;

export const singleDatePickerStyles = css`
  .react-datepicker__day--selected {
    background-color: ${getColor('primary.500')};
    font-weight: var(--sscds-font-weight-elementlabel-strong);
    color: ${getColor('neutral.0')};
    border-radius: ${getRadii('default')};
  }
  .react-datepicker__year-wrapper {
    width: 224px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .react-datepicker__year-text {
    width: 56px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: ${getColor('primary.500')};
    color: ${getColor('neutral.0')};
    border-radius: ${getRadii('default')};
  }
  .react-datepicker__year-text--disabled {
    color: ${getColor('neutral.600')};
  }
`;
