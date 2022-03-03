import PropTypes from 'prop-types';

export interface BaseDateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export interface BaseDateRangePlaceholderProps {
  startDate: string;
  endDate: string;
}

export interface BaseDateRangePickerProps {
  value: BaseDateRange;
  onChange: (value: BaseDateRange) => void;
  minDate: Date;
  maxDate: Date;
  placeholder?: BaseDateRangePlaceholderProps;
}

export const BaseDateRangePlaceholderPropTypes = PropTypes.exact({
  startDate: PropTypes.string,
  endDate: PropTypes.string,
});

export const BaseDateRangePickerPropTypes = PropTypes.exact({
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
});
