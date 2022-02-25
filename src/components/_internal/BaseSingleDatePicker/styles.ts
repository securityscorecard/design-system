import { css } from 'styled-components';

import { getColor, getFontWeight } from '../../../utils';

export const singleDatePickerStyles = css`
  .react-datepicker__day--selected {
    background-color: ${getColor('primary.400')};
    font-weight: ${getFontWeight('bold')};
    color: ${getColor('neutral.0')};
    border-radius: 16px;
  }
`;
