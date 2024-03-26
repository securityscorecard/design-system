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
  const ref = useRef<SVGSVGElement>(null);
  return (
    <StyledIcon
      ref={ref}
      $color={color}
      $size={size}
      className={cls(CLX_COMPONENT, className)}
      fixedWidth={hasFixedWidth}
      icon={findIconDefinition({
        iconName: name as IconName,
        prefix: type as IconPrefix,
      })}
      {...props}
    />
  );
};

export default Icon;
