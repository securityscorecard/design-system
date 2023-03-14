import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconProps } from './Icon.types';
declare const Icon: React.FC<IconProps & Omit<FontAwesomeIconProps, 'icon' | 'fixedWidth' | 'color' | 'size'>>;
export default Icon;
