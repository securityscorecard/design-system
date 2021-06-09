import { isNotUndefined } from 'ramda-adjunct';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import usePortal from 'react-cool-portal';

import { useCalculatePortaPlacement } from './useCalculatePortalPlacement';
import { StyleProps } from './useCalculatePortalPlacement.types';
import { PortalPlacements } from './useCalculatePortalPlacements.enums';
import DropdownPane from './components/DropdownPane';
import { UseDropdownOptions, UseDropdownReturnType } from './useDropdown.types';
import { DSContext } from '../theme/DSProvider/DSProvider';
import { pxToRem } from '../utils';

const defaultTooltipPopupDimensions = { space: 8 };

export const useDropdown = (
  parentRef: React.MutableRefObject<HTMLSpanElement>,
  {
    defaultIsPaneDisplayed = false,
    paneWidth = 140,
    onClickOut,
    onShow,
    onHide,
    placement = PortalPlacements.bottom,
    isElevated = false,
    hasInternalShowHide = true,
  }: UseDropdownOptions,
): UseDropdownReturnType => {
  const { portalsContainerId } = useContext(DSContext);
  const { Portal, isShow, show, hide, toggle } = usePortal({
    defaultShow: defaultIsPaneDisplayed,
    containerId: portalsContainerId,
    autoRemoveContainer: false,
    internalShowHide: hasInternalShowHide,
    onShow,
    onHide,
  });
  const [style, setStyle] = useState<StyleProps>({
    width: paneWidth,
    ...defaultTooltipPopupDimensions,
  });
  const getPlacementStyles = useCalculatePortaPlacement(parentRef, {
    placement,
    width: paneWidth,
    ...defaultTooltipPopupDimensions,
  });

  useEffect(() => {
    if (isShow || defaultIsPaneDisplayed) {
      setStyle(getPlacementStyles());
    }
  }, [getPlacementStyles, isShow, defaultIsPaneDisplayed]);

  const handleOnClickOut = useCallback(() => {
    if (isNotUndefined(onClickOut)) {
      onClickOut();
    }
    hide();
  }, [hide, onClickOut]);

  return {
    handleToggleDropdown: toggle,
    handleShowDropdown: show,
    handleHideDropdown: hide,
    isPaneDisplayed: isShow,
    Pane: ({ children }) => {
      const { width, left, top, right, bottom } = style;
      return (
        <Portal>
          <DropdownPane
            isElevated={isElevated}
            style={{
              width: pxToRem(width),
              left: pxToRem(left),
              right: pxToRem(right),
              top: pxToRem(top),
              bottom: pxToRem(bottom),
            }}
            onClickOut={handleOnClickOut}
          >
            {children}
          </DropdownPane>
        </Portal>
      );
    },
  };
};
