import PropTypes from 'prop-types';

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export interface DateRangePlaceholderProps {
  startDate: string;
  endDate: string;
}

export interface DateRangePickerProps {
  value: DateRange;
  onChange: (value: DateRange) => void;
  minDate: Date;
  maxDate: Date;
  placeholder?: DateRangePlaceholderProps;
}

export const DateRangePlaceholderPropTypes = PropTypes.exact({
  startDate: PropTypes.string,
  endDate: PropTypes.string,
});

export const DateRangePickerPropTypes = PropTypes.exact({
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
});
