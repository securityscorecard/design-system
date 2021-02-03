import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

import { DatePickerProps, DateRangePropTypes } from './DatePicker.types';
import { datePickerStyles } from './styles';

const Wrapper = styled.div`
  ${datePickerStyles}
`;

const DatePicker: React.FC<DatePickerProps> = ({
  value = { startDate: null, endDate: null },
  onChange,
}) => {
  const [focusedInput, setFocusedInput] = useState(null);

  const { startDate, endDate } = value;

  return (
    <Wrapper>
      <DateRangePicker
        endDate={endDate}
        endDateId="endDate"
        focusedInput={focusedInput}
        startDate={startDate}
        startDateId="startDate"
        onDatesChange={onChange}
        onFocusChange={(newFocusInput) => {
          setFocusedInput(newFocusInput);
        }}
      />
    </Wrapper>
  );
};

export default DatePicker;

DatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: DateRangePropTypes,
};
