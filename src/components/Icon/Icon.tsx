import { useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconName,
  IconPrefix,
  findIconDefinition,
} from '@fortawesome/fontawesome-svg-core';
import { includes } from 'ramda';
import cls from 'classnames';

import { createSpacings, getColor } from '../../utils';
import { IconTypes } from '../../theme/icons/icons.enums';
import { IconProps } from './Icon.types';
import { CLX_COMPONENT } from '../../theme/constants';
import { useLogger } from '../../hooks/useLogger';

const fontSizes: Record<IconProps['size'], string> = {
  sm: '0.875rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
};
const boxSizes: Record<IconProps['size'], string> = {
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '2.5rem',
};

const IconBox = styled.div<{
  $size: IconProps['size'];
}>`
  display: inline-grid;
  place-items: center;
  width: ${({ $size }) => boxSizes[$size]};
  height: ${({ $size }) => boxSizes[$size]};
`;

const getIconColor = ({ $color, theme }): string | undefined => {
  if (typeof $color === 'undefined') return 'inherit';
  if ($color.startsWith('var(')) return $color;
  return getColor($color, { theme });
};

const StyledIcon = styled(FontAwesomeIcon).withConfig<{
  $color: IconProps['color'];
  $size: IconProps['size'];
  $hasFixedSize: IconProps['hasFixedSize'];
}>({
  shouldForwardProp: (property) => !includes(property, ['margin']),
})`
  color: ${getIconColor};
  font-size: ${({ $size }) => $size && fontSizes[$size]};
  ${createSpacings};
  transition: transform 200ms var(--sscds-transition-fn);
`;

const Icon = ({
  name,
  type = IconTypes.ssc,
  color,
  size,
  className = '',
  hasFixedWidth = false,
  hasFixedSize,
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
  const icon = (
    <StyledIcon
      ref={ref}
      $color={color}
      $hasFixedSize={hasFixedSize}
      $size={size}
      className={cls(CLX_COMPONENT, className)}
      fixedWidth={hasFixedWidth}
      icon={iconDefinition}
      {...props}
    />
  );

  if (hasFixedSize) {
    return (
      <IconBox $size={size} className="sscds-iconbox">
        {icon}
      </IconBox>
    );
  }

  return icon;
};

export default Icon;
