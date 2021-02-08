import React from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import {
  LinkCellRendererProps,
  LinkColumnOptionsPropType,
} from './renderers.types';

const Link: React.FC<LinkCellRendererProps<string | number>> = ({
  value,
  formater,
  column,
}) => {
  return (
    <Text
      column={column}
      formater={formater}
      isLinkDiscrete={false}
      value={value}
    />
  );
};

Link.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  formater: PropTypes.func,
  column: LinkColumnOptionsPropType,
};

export default Link;
