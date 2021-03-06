import { isNotNull, isNotUndefined } from 'ramda-adjunct';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import usePortal from 'react-cool-portal';

import { useCalculatePortaPlacement } from '../../../../hooks/useCalculatePortalPlacement';
import { StyleProps } from '../../../../hooks/useCalculatePortalPlacement.types';
import { PortalPlacements } from '../../../../hooks/useCalculatePortalPlacements.enums';
import DropdownPane from '../DropdownPane';
import { UseDropdownOptions, UseDropdownReturnType } from './useDropdown.types';

const defaultTooltipPopupDimensions = { space: 8 };

export const useDropdown = (
  parentRef: React.MutableRefObject<HTMLSpanElement>,
  {
    defaultIsPaneDisplayed = false,
    paneWidth = 140,
    onClickOut,
  }: UseDropdownOptions,
): UseDropdownReturnType => {
  const { Portal, isShow, hide, toggle } = usePortal({
    defaultShow: defaultIsPaneDisplayed,
  });
  const [style, setStyle] = useState<StyleProps>({
    width: paneWidth,
    ...defaultTooltipPopupDimensions,
  });
  const getPlacementStyles = useCalculatePortaPlacement(parentRef, {
    placement: PortalPlacements.bottom,
    width: paneWidth,
    ...defaultTooltipPopupDimensions,
  });
  const scrollListener = useRef(null);
  const isListenersAdded = useRef(false);

  useEffect(() => {
    setStyle(getPlacementStyles());
  }, [getPlacementStyles, isShow]);

  useEffect(() => {
    scrollListener.current = () => {
      hide();
    };
    if (isListenersAdded.current && isNotNull(scrollListener.current)) {
      window.removeEventListener('scroll', scrollListener.current);
      isListenersAdded.current = false;
    }

    window.addEventListener('scroll', scrollListener.current);
    isListenersAdded.current = true;
    return () => {
      window.removeEventListener('scroll', scrollListener.current);
    };
  }, [hide]);

  const handleOnClickOut = useCallback(() => {
    if (isNotUndefined(onClickOut)) {
      onClickOut();
    }
    hide();
  }, [hide, onClickOut]);

  return {
    handleToggleTooltip: toggle,
    isPaneDisplayed: isShow,
    Pane: ({ children }) => (
      <Portal>
        <DropdownPane onClickOut={handleOnClickOut} {...style}>
          {children}
        </DropdownPane>
      </Portal>
    ),
  };
};
