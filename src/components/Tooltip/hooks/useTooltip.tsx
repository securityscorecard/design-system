import { isNotNull } from 'ramda-adjunct';
import React, { useEffect, useRef, useState } from 'react';
import usePortal from 'react-cool-portal';

import { useCalculatePortaPlacement } from '../../../hooks/useCalculatePortalPlacement';
import { StyleProps } from '../../../hooks/useCalculatePortalPlacement.types';
import TooltipPopup from '../TooltipPopup';
import { UseTooltipOptions, UseTooltipReturnType } from './useTooltip.types';

const defaultTooltipPopupDimensions = { width: 270, space: 8 };

export const useTooltip = (
  parentRef: React.MutableRefObject<HTMLSpanElement>,
  { defaultIsPopupDisplayed = false, placement }: UseTooltipOptions,
): UseTooltipReturnType => {
  const { Portal, isShow, show, hide } = usePortal({
    defaultShow: defaultIsPopupDisplayed,
  });
  const [style, setStyle] = useState<StyleProps>(defaultTooltipPopupDimensions);
  const getPlacementStyles = useCalculatePortaPlacement(parentRef, {
    placement,
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

  return {
    handleShowTooltip: show,
    handleHideTooltip: hide,
    Popup: ({ children }) => (
      <Portal>
        <TooltipPopup placement={placement} {...style}>
          {children}
        </TooltipPopup>
      </Portal>
    ),
  };
};
