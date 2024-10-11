import { useRef, useState } from 'react';
import styled from 'styled-components';
import { noop } from 'ramda-adjunct';
import ReactDatePicker from 'react-datepicker';

import { datePickerStyles } from './styles';
import { SingleDatePickerProps } from './SingleDatePicker.types';
import { DatePickerCustomHeader } from './CustomHeader';
import { CLX_COMPONENT } from '../../../theme/constants';
import { Icon } from '../../Icon';

/**
 * The imports in "react-datepicker" are strangely done and after migration to Vite
 * the default import stopped working. This should point React to use the coorect import
 */
const DatePicker =
  (ReactDatePicker as unknown as { default: typeof ReactDatePicker }).default ??
  ReactDatePicker;

const StyledDatePicker = styled.div`
  ${datePickerStyles}
`;

const SingleDatePicker = ({
  value = null,
  onChange = noop,
  minDate,
  maxDate,
  placeholder = 'Enter date…',
  defaultIsOpen,
  defaultIsYearPickerOpen,
  startDate,
  endDate,
  isDisabled = false,
}: SingleDatePickerProps) => {
  const [showYearPicker, setShowYearPicker] = useState(defaultIsYearPickerOpen);
  const pickerRef = useRef({ calendar: { instanceRef: { changeYear: noop } } });
  const toggleYearPicker = () => setShowYearPicker(!showYearPicker);
  return (
    <StyledDatePicker className={CLX_COMPONENT}>
      <DatePicker
        ref={pickerRef}
        calendarClassName="DateRangePicker-calendar"
        className="DateRangePicker-input"
        dateFormat="d MMM, yyyy"
        disabled={isDisabled}
        endDate={endDate}
        icon={<Icon name="calendar" size="sm" hasFixedSize />}
        maxDate={maxDate}
        minDate={minDate}
        open={defaultIsOpen}
        placeholderText={placeholder}
        popperModifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 10],
            },
          },
        ]}
        renderCustomHeader={(props) => {
          return (
            <DatePickerCustomHeader
              {...props}
              showYearPicker={showYearPicker}
              toggleYearPicker={toggleYearPicker}
            />
          );
        }}
        selected={value}
        shouldCloseOnSelect={!showYearPicker}
        showYearPicker={showYearPicker}
        startDate={startDate}
        yearItemNumber={24}
        showIcon
        toggleCalendarOnIconClick
        onChange={(newValue) => {
          if (showYearPicker) {
            setShowYearPicker(false);
            const year = newValue.getFullYear();
            pickerRef?.current?.calendar?.instanceRef?.changeYear(year);
          } else {
            onChange(newValue);
          }
        }}
      />
    </StyledDatePicker>
  );
};

export default SingleDatePicker;
