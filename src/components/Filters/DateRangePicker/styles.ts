import { css } from 'styled-components';
import { transparentize } from 'polished';

import {
  getBorderRadius,
  getColor,
  getFontSize,
  getFontWeight,
  getFormStyle,
  getLineHeight,
  pxToRem,
} from '../../../utils/helpers';

// TODO make it reusable with SingleDatePicker
export const dateRangePickerStyles = css`
  .DateRangePicker-input {
    height: ${pxToRem(32)};
    width: 100%;
    padding: ${pxToRem(4, 16)};
    background: ${getFormStyle('bgColor')};
    border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
    border-radius: ${getBorderRadius};
    color: ${getFormStyle('color')};
    font-size: ${pxToRem(13)};
    line-height: ${pxToRem(15)};
    font-weight: ${getFontWeight('regular')};
  }
  .DateRangePicker-input:focus {
    border: ${getFormStyle('statefulBorderWidth')} solid
      ${getFormStyle('focusBorderColor')};
    outline: none;
  }
  .DateRangePicker-calendar {
    font-size: ${getFontSize('md')};
    line-height: ${getLineHeight('md')};
    font-weight: ${getFontWeight('regular')};
    padding: ${pxToRem(16)};
    border-radius: ${getBorderRadius};
    box-shadow: 0px 2px 6px 0px ${transparentize(0.85, '#000')};
  }
  .react-datepicker-wrapper:first-of-type {
    margin-right: ${pxToRem(8)};
  }
  .react-datepicker__header {
    background: ${getColor('graphite5H')};
    border-bottom: 0;
    padding-top: 0;
  }
  .react-datepicker__current-month {
    font-size: ${pxToRem(18)};
    line-height: ${pxToRem(20)};
    font-weight: ${getFontWeight('medium')};
    margin-top: ${pxToRem(16)};
    margin-bottom: ${pxToRem(20)};
    color: ${getColor('graphite4B')};
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
    background-color: ${getColor('radiantBlueberry')};
    border-radius: 4px;
    font-weight: 700;
    color: ${getColor('graphite5H')};
  }
  .react-datepicker__day:focus {
    outline: 0;
  }
  .react-datepicker__day--in-selecting-range {
    background-color: ${getColor('graphite5H')};
    color: ${getColor('graphite4B')};
  }
  .react-datepicker__day--in-range {
    background-color: ${getColor('blueberry0')};
    color: ${getColor('graphite4B')};
    border-radius: 0;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--range-start,
  .react-datepicker__day--range-end,
  .react-datepicker__day--selecting-range-start {
    background-color: ${getColor('radiantBlueberry')};
    font-weight: 700;
    color: ${getColor('graphite5H')};
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--selecting-range-start {
    border-radius: 16px;
  }
  .react-datepicker__day--range-start {
    border-radius: 16px 0 0 16px;
  }
  .react-datepicker__day--range-end {
    border-radius: 0 16px 16px 0;
  }
  .react-datepicker__navigation {
    top: ${pxToRem(36)};
  }
  .react-datepicker__navigation--previous {
    border-right-color: ${getColor('graphiteB')};
    left: ${pxToRem(28)};
  }
  .react-datepicker__navigation--previous:hover {
    border-right-color: ${getColor('graphite2B')};
  }
  .react-datepicker__navigation--next {
    border-left-color: ${getColor('graphiteB')};
    right: ${pxToRem(28)};
  }
  .react-datepicker__navigation--next:hover {
    border-left-color: ${getColor('graphite2B')};
  }
  .react-datepicker__triangle {
    border-bottom-color: ${getColor('graphite5H')};
  }
  .react-datepicker__triangle::before {
    border-bottom-color: ${getColor('graphiteB')};
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
`;
