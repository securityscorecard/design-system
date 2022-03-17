import { css } from 'styled-components';
import { transparentize } from 'polished';

import {
  getColor,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getFormStyle,
  getLineHeight,
  getRadii,
  pxToRem,
} from '../../../utils';

export const datePickerStyles = css`
  .DateRangePicker-input {
    font-family: ${getFontFamily('base')};
    height: ${getFormStyle('fieldHeight')};
    padding: ${pxToRem(4, 16)};
    background: ${getFormStyle('bgColor')};
    border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
    border-radius: ${getRadii('default')};
    color: ${getFormStyle('color')};
    font-size: ${getFontSize('md')};
    line-height: ${getLineHeight('md')};
    font-weight: ${getFontWeight('regular')};
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
    font-size: ${getFontSize('md')};
    line-height: ${getLineHeight('md')};
    font-weight: ${getFontWeight('regular')};
    padding: ${pxToRem(16)};
    border-radius: ${getRadii('default')};
    box-shadow: 0 2px 6px 0 ${transparentize(0.85, '#000')};
    background: ${getColor('neutral.0')};
  }
  .react-datepicker {
    background-color: ${getColor('neutral.0')};
    border: 1px solid ${getColor('neutral.400')};
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
    font-size: ${getFontSize('h4')};
    line-height: ${getLineHeight('lg')};
    font-weight: ${getFontWeight('medium')};
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
    background-color: ${getColor('primary.400')};
    border-radius: 4px;
    font-weight: ${getFontWeight('bold')};
    color: ${getColor('neutral.0')};
  }
  .react-datepicker__day:focus {
    outline: 0;
  }
  .react-datepicker__navigation {
    top: ${pxToRem(36)};
    background: none;
    line-height: 1.7rem;
    text-align: center;
    cursor: pointer;
    position: absolute;
    padding: 0;
    border: 0.45rem solid transparent;
    z-index: 1;
    height: ${pxToRem(10)};
    width: ${pxToRem(10)};
    text-indent: -999em;
    overflow: hidden;
  }
  .react-datepicker__navigation--previous {
    border-right-color: ${getColor('neutral.600')};
    left: ${pxToRem(28)};
  }
  .react-datepicker__navigation--previous:hover {
    border-right-color: ${getColor('neutral.700')};
  }
  .react-datepicker__navigation--next {
    border-left-color: ${getColor('neutral.600')};
    right: ${pxToRem(28)};
  }
  .react-datepicker__navigation--next:hover {
    border-left-color: ${getColor('neutral.700')};
  }
  .react-datepicker__triangle {
    position: absolute;
    left: ${pxToRem(50)} !important; /* Needed for input with 100% width */
    border-bottom-color: ${getColor('neutral.0')};
  }
  .react-datepicker__triangle::before {
    border-bottom-color: ${getColor('neutral.600')};
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
    border-bottom-color: ${getColor('neutral.400')};
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
    border-top-color: ${getColor('neutral.400')};
  }
  .react-datepicker-popper[data-placement^='bottom'] {
    margin-top: ${pxToRem(10)};
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
    background-color: ${getColor('primary.400')};
    font-weight: ${getFontWeight('bold')};
    color: ${getColor('neutral.0')};
    border-radius: 16px;
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
