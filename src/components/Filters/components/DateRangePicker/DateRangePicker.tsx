import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { FlexContainer } from '../../../FlexContainer';
import { datePickerStyles, dateRangePickerStyles } from './styles';
import {
  DateRangePickerPropTypes,
  DateRangePickerProps,
} from './DateRangePicker.types';

const StyledDatePicker = styled(FlexContainer)`
  ${datePickerStyles}
  ${dateRangePickerStyles}
`;

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  value = { startDate: null, endDate: null },
  onChange,
}) => {
  const { startDate, endDate } = value;

  const handleStartDateChange = (newStartDate) => {
    onChange({ startDate: newStartDate, endDate });
  };

  const handleEndDateChange = (newEndDate) => {
    onChange({ startDate, endDate: newEndDate });
  };

  return (
    <StyledDatePicker>
      <DatePicker
        calendarClassName="DateRangePicker-calendar"
        className="DateRangePicker-input"
        endDate={endDate}
        placeholderText="Start date"
        selected={startDate}
        startDate={startDate}
        selectsStart
        onChange={handleStartDateChange}
      />
      <DatePicker
        calendarClassName="DateRangePicker-calendar"
        className="DateRangePicker-input"
        endDate={endDate}
        minDate={startDate}
        placeholderText="End date"
        selected={endDate}
        startDate={startDate}
        selectsEnd
        onChange={handleEndDateChange}
      />
    </StyledDatePicker>
  );
};

export default DateRangePicker;

DateRangePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: DateRangePickerPropTypes,
};
