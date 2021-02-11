import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconName,
  IconPrefix,
  findIconDefinition,
} from '@fortawesome/fontawesome-svg-core';
import { isNotUndefined } from 'ramda-adjunct';

import { createSpacings, getColor } from '../../utils/helpers';
import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { ColorTypes } from '../../theme/colors.enums';
import { Colors } from '../../theme/colors.types';
import { IconProps, SSCIcons, Types } from './Icon.types';
import { SpacingSizeValuePropType } from '../../types/spacing.types';

const StyledIcon = styled(FontAwesomeIcon)<{ color: keyof Colors }>`
  color: ${({ color, theme }) =>
    isNotUndefined(color) ? getColor(color, { theme }) : 'inherit'};
  ${createSpacings};
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
    icon={findIconDefinition({
      iconName: name as IconName,
      prefix: type as IconPrefix,
    })}
    {...props}
  />
);

Icon.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.oneOf<SSCIcons>(Object.values(SSCIconNames)),
    PropTypes.string,
  ]).isRequired,
  type: PropTypes.oneOfType([
    PropTypes.oneOf<Types>(Object.values(IconTypes)),
    PropTypes.string,
  ]),
  color: PropTypes.oneOf(Object.values(ColorTypes)),
  className: PropTypes.string,
  hasFixedWidth: PropTypes.bool,
  margin: SpacingSizeValuePropType,
  padding: SpacingSizeValuePropType,
};

export default Icon;
