// Inspired by David Gilbertson (https://codepen.io/davidgilbertson/pen/ooXVyw)

import React, { useCallback } from 'react';

import {
  StyleProps,
  UseCalculatePortalPlacementOptions,
} from './useCalculatePortalPlacement.types';

export const useCalculatePortaPlacement = (
  { current }: React.MutableRefObject<HTMLSpanElement>,
  { placement, width = 270, space = 5 }: UseCalculatePortalPlacementOptions,
): (() => StyleProps) => {
  return useCallback(() => {
    const style: StyleProps = { width, space };
    if (current === null) return style;

    const dimensions = current.getBoundingClientRect();

    if (placement === 'bottom' || placement === 'top') {
      style.left = dimensions.left + dimensions.width / 2 - style.width / 2;
    }

    if (placement === 'left' || placement === 'right') {
      style.bottom =
        window.innerHeight - dimensions.top - dimensions.height / 2;
    }

    switch (placement) {
      case 'bottom-left':
        style.left = dimensions.left;
        style.top = dimensions.top + dimensions.height + space;
        break;
      case 'bottom-right':
        style.left = dimensions.right - width;
        style.top = dimensions.top + dimensions.height + space;
        break;
      case 'left':
        style.right = window.innerWidth - dimensions.left + space;
        break;
      case 'right':
        style.left = dimensions.left + dimensions.width + space;
        break;
      case 'top':
        style.bottom = window.innerHeight - dimensions.top + space;
        break;
      case 'bottom':
      default:
        style.top = dimensions.top + dimensions.height + space;
        break;
    }

    return style;
  }, [current, placement, width, space]);
};
