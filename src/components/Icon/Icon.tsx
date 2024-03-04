import React, { useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconName,
  IconPrefix,
  findIconDefinition,
} from '@fortawesome/fontawesome-svg-core';
import { includes } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import cls from 'classnames';

import { createSpacings, getColor } from '../../utils';
import { IconTypes } from '../../theme/icons/icons.enums';
import { IconProps } from './Icon.types';
import { CLX_COMPONENT } from '../../theme/constants';
import { useLogger } from '../../hooks/useLogger';

const sizes: Record<IconProps['size'], string> = {
  sm: '0.875rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
};

const StyledIcon = styled(FontAwesomeIcon).withConfig<{
  $color: IconProps['color'];
  $size: IconProps['size'];
}>({
  shouldForwardProp: (property) => !includes(property, ['margin']),
})`
  color: ${({ $color, theme }) =>
    isNotUndefined($color) ? getColor($color, { theme }) : 'inherit'};
  height: ${({ $size }) => (isNotUndefined($size) ? sizes[$size] : undefined)};
  ${createSpacings};
`;

const Icon = ({
  name,
  type = IconTypes.ssc,
  color,
  size,
  className = '',
  hasFixedWidth = false,
  ...props
}: IconProps) => {
  const { warn } = useLogger('Icon');
  const ref = useRef<SVGSVGElement>(null);
  const iconDefinition = findIconDefinition({
    iconName: name as IconName,
    prefix: type as IconPrefix,
  });
  if (iconDefinition === undefined) {
    warn(
      `Used icon was not found. You need to import it in the icon library. Looking for prefix: ${type}, name: ${name}`,
    );
    return null;
  }
  return (
    <StyledIcon
      ref={ref}
      $color={color}
      $size={size}
      className={cls(CLX_COMPONENT, className)}
      fixedWidth={hasFixedWidth}
      icon={iconDefinition}
      {...props}
    />
  );
};

export default Icon;
