import { css } from 'styled-components';

export const dateRangePickerStyles = css`
  .react-datepicker__day--in-selecting-range {
    background-color: var(--sscds-color-neutral-0);
    color: var(--sscds-color-text-default);
  }
  .react-datepicker__day--in-range {
    background-color: var(--sscds-color-background-selectable-active);
    color: var(--sscds-color-text-default);
    border-radius: 0;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--range-start,
  .react-datepicker__day--range-end,
  .react-datepicker__day--selecting-range-start {
    background-color: var(--sscds-color-primary-9);
    font-weight: var(--sscds-font-weight-elementlabel-strong);
    color: var(--sscds-color-text-white);
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--selecting-range-start {
    border-radius: var(--sscds-radii-default);
  }
  .react-datepicker__day--range-start {
    border-radius: var(--sscds-radii-rounded) 0 0 var(--sscds-radii-rounded);
  }
  .react-datepicker__day--range-end {
    border-radius: 0 var(--sscds-radii-rounded) var(--sscds-radii-rounded) 0;
  }

  .react-datepicker__day--in-range:not(
      .react-datepicker__day--range-start,
      .react-datepicker__day--range-end
    ):hover {
    border-radius: 0;
  }
`;
