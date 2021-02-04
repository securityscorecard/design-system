import { css } from 'styled-components';

import {
  getBorderRadius,
  getColor,
  getFontSize,
  getFontWeight,
  getFormStyle,
  getLineHeight,
  pxToRem,
} from '../../../utils/helpers';

export const datePickerStyles = css`
  .DateRangePickerInput {
    display: flex;
  }
  .DateRangePickerInput__withBorder {
    border: none;
  }
  .DateInput {
    width: auto;
  }
  .DateInput:first-of-type {
    margin-right: ${pxToRem(8)};
  }
  .DateInput_input {
    height: ${pxToRem(32)};
    padding: ${pxToRem(4, 16)};
    background: ${getFormStyle('bgColor')};
    border: ${getFormStyle('borderWidth')} solid ${getFormStyle('borderColor')};
    border-radius: ${getBorderRadius};
    color: ${getFormStyle('color')};
    font-size: ${pxToRem(13)};
    line-height: ${pxToRem(15)};
    font-weight: ${getFontWeight('regular')};
  }
  .DateRangePickerInput_arrow {
    display: none;
  }
  .DayPickerNavigation_button {
    padding: ${pxToRem(7, 7)};
  }
  .CalendarMonth_caption {
    font-weight: ${getFontWeight('medium')};
    padding-top: ${pxToRem(25)};
    padding-bottom: ${pxToRem(55)};
  }
  .CalendarDay {
    border: none;
    vertical-align: middle;
  }
  .DayPicker_weekHeader {
    color: ${getColor('graphite4B')};
    top: ${pxToRem(70)};
  }
  .DayPickerKeyboardShortcuts_showSpan {
    display: none;
  }
  .DayPickerKeyboardShortcuts_show__bottomRight::before {
    content: 'Help';
    border: none;
    color: ${getColor('radiantBlueberry')};
    font-size: ${getFontSize('md')};
    line-height: ${getLineHeight('md')};
    bottom: ${pxToRem(15)};
    right: ${pxToRem(16)};
  }
  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${getColor('blueberryClassic')};
  }
  .CalendarDay__selected_span {
    background: ${getColor('dietBlueberry')};
  }
  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:hover {
    background: ${getColor('dietBlueberry')};
    color: ${getColor('graphite5H')};
  }
  .CalendarDay__selected_span:hover {
    background: ${getColor('radiantBlueberry')};
  }
`;
