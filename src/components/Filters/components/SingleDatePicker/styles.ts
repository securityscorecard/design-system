import { css } from 'styled-components';

import { getColor, getFontWeight } from '../../../../utils/helpers';

export const singleDatePickerStyles = css`
  .react-datepicker__day--selected {
    background-color: ${getColor('radiantBlueberry')};
    font-weight: ${getFontWeight('bold')};
    color: ${getColor('graphite5H')};
    border-radius: 16px;
  }
`;
