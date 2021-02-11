import React from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import {
  LinkCellRendererProps,
  LinkColumnOptionsPropType,
} from './renderers.types';

const Link: React.FC<LinkCellRendererProps<string | number>> = ({
  value,
  formatter,
  column,
}) => {
  return (
    <Text
      column={column}
      formatter={formatter}
      isLinkDiscrete={false}
      value={value}
    />
  );
};

Link.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  formatter: PropTypes.func,
  column: LinkColumnOptionsPropType,
};

export default Link;
