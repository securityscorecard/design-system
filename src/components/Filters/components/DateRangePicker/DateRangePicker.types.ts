import PropTypes from 'prop-types';

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export interface DateRangePickerProps {
  value: DateRange;
  onChange: (value: DateRange) => void;
  minDate: Date;
  maxDate: Date;
}

export const DateRangePickerPropTypes = PropTypes.exact({
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
});
