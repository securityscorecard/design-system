import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import type { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import type { FC } from 'react';
import type { Color } from '../../theme/colors.types';
import type { IconProps, SSCIcons, Types } from './Icon.types';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { includes } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import cls from 'classnames';

import { createSpacings, getColor } from '../../utils';
import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { ColorTypes } from '../../theme/colors.enums';
import { SpacingSizeValuePropType } from '../../types/spacing.types';
import { CLX_COMPONENT } from '../../theme/constants';

const StyledIcon = styled(FontAwesomeIcon).withConfig<{ color: Color }>({
  shouldForwardProp: (property) => !includes(property, ['margin', 'color']),
})`
  color: ${({ color, theme }) =>
    isNotUndefined(color) ? getColor(color, { theme }) : 'inherit'};
  ${createSpacings};
`;

const Icon: FC<
  IconProps &
    Omit<FontAwesomeIconProps, 'icon' | 'fixedWidth' | 'color' | 'size'>
> = ({
  name,
  type = IconTypes.ssc,
  color,
  className = '',
  hasFixedWidth = false,
  ...props
}) => (
  <StyledIcon
    className={cls(CLX_COMPONENT, className)}
    color={color}
    fixedWidth={hasFixedWidth}
    icon={findIconDefinition({
      iconName: name as IconName,
      prefix: type as IconPrefix,
    })}
    {...props}
  />
);

Icon.propTypes /* remove-proptypes */ = {
  //
  // =============== WARNING ================
  // | These PropTypes are auto-generated   |
  // | from the TypeScript type definitions  |
  // ========================================
  //
  color: PropTypes.oneOf([
    'brand.100',
    'brand.200',
    'brand.300',
    'brand.400',
    'brand.50',
    'brand.500',
    'brand.600',
    'brand.700',
    'brand.800',
    'brand.900',
    'brandSecondary.500',
    'error.100',
    'error.50',
    'error.500',
    'error.600',
    'error.700',
    'grade.A',
    'grade.B',
    'grade.C',
    'grade.D',
    'grade.F',
    'info.100',
    'info.50',
    'info.500',
    'info.600',
    'info.700',
    'neutral.0',
    'neutral.100',
    'neutral.1000',
    'neutral.200',
    'neutral.300',
    'neutral.400',
    'neutral.500',
    'neutral.600',
    'neutral.700',
    'neutral.800',
    'neutral.900',
    'primary.100',
    'primary.200',
    'primary.300',
    'primary.400',
    'primary.50',
    'primary.500',
    'primary.600',
    'primary.700',
    'primary.800',
    'primary.900',
    'severity.high',
    'severity.informational',
    'severity.low',
    'severity.medium',
    'severity.positive',
    'success.100',
    'success.50',
    'success.500',
    'success.600',
    'success.700',
    'warning.100',
    'warning.50',
    'warning.500',
    'warning.600',
    'warning.700',
  ]),
  hasFixedWidth: PropTypes.bool,
  margin: SpacingSizeValuePropType,
  padding: SpacingSizeValuePropType,
} as any;

export default Icon;
