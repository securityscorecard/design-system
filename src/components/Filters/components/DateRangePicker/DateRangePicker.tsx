import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { any } from 'ramda';
import { isNotNull } from 'ramda-adjunct';

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

const isRangeDefined = any(isNotNull);

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  value = { startDate: null, endDate: null },
  onChange,
  minDate,
  maxDate,
}) => {
  const { startDate, endDate } = value;

  const handleStartDateChange = (newStartDate) => {
    onChange(
      isRangeDefined([newStartDate, endDate])
        ? { startDate: newStartDate, endDate }
        : undefined,
    );
  };

  const handleEndDateChange = (newEndDate) => {
    onChange(
      isRangeDefined([startDate, newEndDate])
        ? { startDate, endDate: newEndDate }
        : undefined,
    );
  };

  return (
    <StyledDatePicker>
      <DatePicker
        calendarClassName="DateRangePicker-calendar"
        className="DateRangePicker-input"
        dateFormat="d MMM, yyyy"
        endDate={endDate}
        maxDate={maxDate}
        minDate={minDate}
        placeholderText="Start date"
        selected={startDate}
        startDate={startDate}
        selectsStart
        onChange={handleStartDateChange}
      />
      <DatePicker
        calendarClassName="DateRangePicker-calendar"
        className="DateRangePicker-input"
        dateFormat="d MMM, yyyy"
        endDate={endDate}
        maxDate={maxDate}
        minDate={startDate || minDate}
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
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
};
