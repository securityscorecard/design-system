import React, { useContext, useEffect, useState } from 'react';
import usePortal from 'react-cool-portal';

import { Stack } from '../../layout';
import { SpaceSizes } from '../../../theme';
import { useCalculatePortaPlacement } from '../../../hooks/useCalculatePortalPlacement';
import { StyleProps } from '../../../hooks/useCalculatePortalPlacement.types';
import { DSContext } from '../../../theme/DSProvider/DSProvider';
import { pxToRem } from '../../../utils';
import TooltipPopup from '../TooltipPopup';
import { UseTooltipOptions, UseTooltipReturnType } from './useTooltip.types';

const defaultTooltipPopupDimensions = { space: 8 };

export const useTooltip = (
  parentRef: React.MutableRefObject<HTMLSpanElement>,
  {
    defaultIsPopupDisplayed = false,
    placement,
    popupWidth = 270,
  }: UseTooltipOptions,
): UseTooltipReturnType => {
  const { portalsContainerId } = useContext(DSContext);
  const { Portal, isShow, show, hide } = usePortal({
    defaultShow: defaultIsPopupDisplayed,
    containerId: portalsContainerId,
    autoRemoveContainer: false,
  });
  const [style, setStyle] = useState<StyleProps>(defaultTooltipPopupDimensions);
  const getPlacementStyles = useCalculatePortaPlacement(parentRef, {
    placement,
    width: popupWidth,
    ...defaultTooltipPopupDimensions,
  });

  useEffect(() => {
    setStyle(getPlacementStyles());
  }, [getPlacementStyles, isShow]);

  return {
    handleShowTooltip: show,
    handleHideTooltip: hide,
    Popup: ({ children }) => {
      const { space, width, left, top, right, bottom } = style;
      return (
        <Portal>
          <TooltipPopup
            $placement={placement}
            $space={space}
            $width={width}
            style={{
              width: pxToRem(width),
              left: pxToRem(left),
              right: pxToRem(right),
              top: pxToRem(top),
              bottom: pxToRem(bottom),
            }}
          >
            <Stack gap={SpaceSizes.md} justify="flex-start">
              {children}
            </Stack>
          </TooltipPopup>
        </Portal>
      );
    },
  };
};
