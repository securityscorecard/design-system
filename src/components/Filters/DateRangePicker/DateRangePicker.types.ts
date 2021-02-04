import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import { Moment } from 'moment';

export interface DateRange {
  startDate: Moment | null;
  endDate: Moment | null;
}

export interface DatePickerProps {
  value: DateRange;
  onChange: () => void;
}

export const DateRangePropTypes = PropTypes.exact({
  startDate: momentPropTypes.momentObj,
  endDate: momentPropTypes.momentObj,
});
