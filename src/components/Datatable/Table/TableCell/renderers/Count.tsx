import React from 'react';
import PropTypes from 'prop-types';

import { abbreviateNumber } from '../../../../../utils/helpers';
import {
  ColumnOptionsPropType,
  LinkCellRendererProps,
  LinkColumnOptionsPropType,
} from './renderers.types';
import Text from './Text';

const Count: React.FC<LinkCellRendererProps<number>> = ({ value, column }) => (
  <Text column={column} formatter={abbreviateNumber} value={value} />
);

Count.propTypes = {
  value: PropTypes.number.isRequired,
  column: PropTypes.oneOfType([
    ColumnOptionsPropType,
    LinkColumnOptionsPropType,
  ]),
};

export default Count;
