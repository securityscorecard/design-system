import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconPrefix,
  findIconDefinition,
} from '@fortawesome/fontawesome-svg-core';
import { isNotUndefined } from 'ramda-adjunct';

import { getColor } from '../../utils/helpers';
import { ColorTypes } from '../../theme/colors.enums';
import { Colors } from '../../theme/colors.types';
import { IconProps } from './Icon.types';
import { IconTypes, SSCIconNames } from './Icon.enums';

const StyledIcon = styled(FontAwesomeIcon)<{ color: keyof Colors }>`
  color: ${({ color, theme }) =>
    isNotUndefined(color) ? getColor(color, { theme }) : 'inherit'};
`;

const Icon: React.FC<IconProps> = ({
  name,
  type = IconTypes.ssc,
  color,
  className = '',
  hasFixedWidth = false,
  ...props
}) => (
  <StyledIcon
    className={className}
    color={color}
    fixedWidth={hasFixedWidth}
    icon={findIconDefinition({ iconName: name, prefix: type as IconPrefix })}
    {...props}
  />
);

Icon.propTypes = {
  name: PropTypes.oneOf(Object.values(SSCIconNames)).isRequired,
  type: PropTypes.oneOf(Object.values(IconTypes)),
  color: PropTypes.oneOf(Object.values(ColorTypes)),
  className: PropTypes.string,
  hasFixedWidth: PropTypes.bool,
};

export default Icon;
