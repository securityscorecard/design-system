import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { datePickerStyles } from '../DateRangePicker/styles';
import { singleDatePickerStyles } from './styles';
import { SingleDatePickerProps } from './SingleDatePicker.types';

const StyledDatePicker = styled.div`
  ${datePickerStyles}
  ${singleDatePickerStyles}
`;

const SingleDatePicker: React.FC<SingleDatePickerProps> = ({
  value = null,
  onChange,
}) => (
  <StyledDatePicker>
    <DatePicker
      calendarClassName="DateRangePicker-calendar"
      className="DateRangePicker-input"
      placeholderText="Date"
      selected={value}
      onChange={onChange}
    />
  </StyledDatePicker>
);

export default SingleDatePicker;

SingleDatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date),
};
