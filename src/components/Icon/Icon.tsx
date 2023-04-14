import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import type { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import type { FC } from 'react';
import type { Color } from '../../theme/colors.types';
import type { IconProps } from './Icon.types';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { includes } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import cls from 'classnames';

import { createSpacings, getColor } from '../../utils';
import { IconTypes } from '../../theme/icons/icons.enums';
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

export default Icon;
