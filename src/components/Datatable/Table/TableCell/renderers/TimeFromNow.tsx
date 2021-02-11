import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import {
  ColumnOptionsPropType,
  LinkCellRendererProps,
  LinkColumnOptionsPropType,
} from './renderers.types';
import Text from './Text';

export const timeFromNowFormatter = (value: string): string => {
  dayjs.extend(relativeTime);
  const date = dayjs(value);
  const now = dayjs();

  // value is today
  if (date.isSame(now, 'day')) return 'Today';
  // value is in last 7 days
  if (date.isAfter(now.subtract(7, 'day'))) return date.format('dddd');
  return date.from(now, true);
};

const TimeFromNow: React.FC<LinkCellRendererProps<string>> = ({
  value,
  column,
}) => <Text column={column} formatter={timeFromNowFormatter} value={value} />;

TimeFromNow.propTypes = {
  value: PropTypes.string.isRequired,
  column: PropTypes.oneOfType([
    ColumnOptionsPropType,
    LinkColumnOptionsPropType,
  ]),
};

export default TimeFromNow;
