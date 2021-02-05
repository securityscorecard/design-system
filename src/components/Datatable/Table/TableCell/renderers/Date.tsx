import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import {
  ColumnOptionsPropType,
  LinkCellRendererProps,
  LinkColumnOptionsPropType,
} from './renderers.types';
import Text from './Text';

const Date: React.FC<LinkCellRendererProps<string>> = ({ value, column }) => (
  <Text
    column={column}
    formater={(val) => dayjs(val).format('D MMMM YYYY')}
    value={value}
  />
);

Date.propTypes = {
  value: PropTypes.string.isRequired,
  column: PropTypes.oneOfType([
    ColumnOptionsPropType,
    LinkColumnOptionsPropType,
  ]),
};

export default Date;
