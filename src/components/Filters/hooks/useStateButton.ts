import { useEffect, useState } from 'react';

import { SSCIconNames } from '../../../theme/icons/icons.enums';
import { ColorTypes } from '../../../theme/colors.enums';
import { IconProps, StateButtonIconHook } from './useStateButton.types';

const timesIconColor = ColorTypes.graphite2B;
const checkIconColor = ColorTypes.graphiteB;
const hoverIconColor = ColorTypes.graphite5H;

const stateMap = {
  default: {
    iconName: SSCIconNames.times,
    iconColor: timesIconColor,
  },
  applied: {
    iconName: SSCIconNames.check,
    iconColor: checkIconColor,
  },
  hover: {
    iconName: SSCIconNames.times,
    iconColor: hoverIconColor,
  },
};

export const useStateButtonIcon = (isApplied: boolean): StateButtonIconHook => {
  const [iconProps, setIconProps] = useState<IconProps>(stateMap.default);

  useEffect(() => {
    setIconProps(isApplied ? stateMap.applied : stateMap.default);
  }, [isApplied]);

  const handleMouseOut = () => {
    setIconProps(isApplied ? stateMap.applied : stateMap.default);
  };

  const handleMouseOver = () => {
    setIconProps(stateMap.hover);
  };

  return { handleMouseOut, handleMouseOver, ...iconProps };
};
