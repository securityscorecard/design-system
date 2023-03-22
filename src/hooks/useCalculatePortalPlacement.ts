// Inspired by David Gilbertson (https://codepen.io/davidgilbertson/pen/ooXVyw)

import type { MutableRefObject } from 'react';
import type {
  StyleProps,
  UseCalculatePortalPlacementOptions,
} from './useCalculatePortalPlacement.types';

import { useCallback } from 'react';

export const useCalculatePortaPlacement = (
  { current }: MutableRefObject<HTMLSpanElement>,
  { placement, width = 270, space = 5 }: UseCalculatePortalPlacementOptions,
): (() => StyleProps) => {
  return useCallback(() => {
    const style: StyleProps = { width, space };
    if (current === null) return style;

    const dimensions = current.getBoundingClientRect();

    const scrollTop = dimensions.top + window.pageYOffset;
    const scrollBottom = dimensions.bottom + window.pageYOffset;
    const scrollLeft = dimensions.left + window.pageXOffset;
    const scrollRight = dimensions.right + window.pageXOffset;

    if (placement === 'bottom' || placement === 'top') {
      style.left = scrollLeft + dimensions.width / 2 - style.width / 2;
    }

    if (placement === 'left' || placement === 'right') {
      style.bottom = window.innerHeight - scrollTop - dimensions.height / 2;
    }

    switch (placement) {
      case 'bottom-left':
        style.left = scrollLeft;
        style.top = scrollBottom + space;
        break;
      case 'bottom-right':
        style.left = scrollRight - width;
        style.top = scrollBottom + space;
        break;
      case 'left':
        style.right = window.innerWidth - scrollLeft + space;
        break;
      case 'right':
        style.left = scrollRight + space;
        break;
      case 'top':
        style.bottom = window.innerHeight - scrollTop + space;
        break;
      case 'bottom':
      default:
        style.top = scrollBottom + space;
        break;
    }

    return style;
  }, [current, placement, width, space]);
};
