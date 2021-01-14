import { useEffect, useState } from 'react';

import { StateButtonIconHook } from './useStateButton.types';
import { SSCIconNames } from '../../Icon/Icon.enums';
import { Color } from '../../../theme/colors.types';
import { ColorTypes } from '../../../theme/colors.enums';

const timesIconColor = ColorTypes.graphite2B;
const checkIconColor = ColorTypes.graphiteB;
const hoverIconColor = ColorTypes.graphite5H;

export const useStateButtonIcon = (
  isFilterApplied: boolean,
): StateButtonIconHook => {
  const [iconName, setIconName] = useState<string>(SSCIconNames.times);
  const [iconColor, setIconColor] = useState<Color>(timesIconColor);

  useEffect(() => {
    if (isFilterApplied) {
      setIconName(SSCIconNames.check);
      setIconColor(checkIconColor);
    }
  }, [isFilterApplied]);

  const handleMouseOut = () => {
    if (isFilterApplied) {
      setIconName(SSCIconNames.check);
      setIconColor(checkIconColor);
    } else {
      setIconColor(timesIconColor);
    }
  };

  const handleMouseOver = () => {
    setIconName(SSCIconNames.times);
    setIconColor(hoverIconColor);
  };

  return { iconName, iconColor, handleMouseOut, handleMouseOver };
};
