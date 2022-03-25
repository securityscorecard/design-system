import { css } from 'styled-components';

import { getColor, getFontWeight } from '../../../utils';

export const dateRangePickerStyles = css`
  .react-datepicker__day--in-selecting-range {
    background-color: ${getColor('neutral.0')};
    color: ${getColor('neutral.900')};
  }
  .react-datepicker__day--in-range {
    background-color: ${getColor('primary.50')};
    color: ${getColor('neutral.900')};
    border-radius: 0;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--range-start,
  .react-datepicker__day--range-end,
  .react-datepicker__day--selecting-range-start {
    background-color: ${getColor('primary.400')};
    font-weight: ${getFontWeight('bold')};
    color: ${getColor('neutral.0')};
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
`;
