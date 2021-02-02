import { useEffect, useState } from 'react';

import { SSCIconNames } from '../../../theme/icons/icons.enums';
import { ColorTypes } from '../../../theme/colors.enums';
import { IconProps, StateButtonIconHook } from './useStateButton.types';

const timesIconColor = ColorTypes.graphite2B;
const checkIconColor = ColorTypes.graphiteB;
const hoverIconColor = ColorTypes.graphite5H;
const disabledIconColor = ColorTypes.graphiteHB;

const stateMap = {
  default: {
    iconName: SSCIconNames.times,
    iconColor: timesIconColor,
  },
  applied: {
    iconName: SSCIconNames.check,
    iconColor: checkIconColor,
  },
  disabled: {
    iconName: SSCIconNames.times,
    iconColor: disabledIconColor,
  },
  hover: {
    iconName: SSCIconNames.times,
    iconColor: hoverIconColor,
  },
};

const setIconState = (isDisabled, isApplied, setIconProps) => {
  if (isDisabled) {
    setIconProps(stateMap.disabled);
  } else if (isApplied) {
    setIconProps(stateMap.applied);
  } else {
    setIconProps(stateMap.default);
  }
};

export const useStateButtonIcon = (
  isApplied: boolean,
  isDisabled: boolean,
): StateButtonIconHook => {
  const [iconProps, setIconProps] = useState<IconProps>(stateMap.default);

  useEffect(() => {
    setIconState(isDisabled, isApplied, setIconProps);
  }, [isApplied, isDisabled]);

  const handleMouseOut = () => {
    setIconState(isDisabled, isApplied, setIconProps);
  };

  const handleMouseOver = () => {
    if (!isDisabled) {
      setIconProps(stateMap.hover);
    }
  };

  return { handleMouseOut, handleMouseOver, ...iconProps };
};
