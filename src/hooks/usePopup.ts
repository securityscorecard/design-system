import type { PopperProps } from 'react-popper';
import type { Placement } from '@popperjs/core';
import type { Options as ArrowOptions } from '@popperjs/core/lib/modifiers/arrow';

import { usePopper } from 'react-popper';
import { isNotUndefined } from 'ramda-adjunct';
import { useTheme } from 'styled-components';

type UsePopup<
  Trigger extends PopperProps<null>['referenceElement'] = HTMLElement,
  Pane extends HTMLElement | null = HTMLElement,
  Arrow extends ArrowOptions['element'] = undefined,
> = (config: {
  triggerEl: Trigger;
  paneEl: Pane;
  arrowEl?: Arrow;
  placement?: Placement;
}) => ReturnType<typeof usePopper>;

export const usePopup: UsePopup = ({
  triggerEl,
  paneEl,
  arrowEl,
  placement = 'bottom-start',
}) => {
  const { space } = useTheme();
  const arrowMod = isNotUndefined(arrowEl)
    ? [{ name: 'arrow', options: { element: arrowEl } }]
    : [];
  return usePopper(triggerEl, paneEl, {
    placement,
    modifiers: [
      ...arrowMod,
      {
        name: 'offset',
        options: {
          offset: [0, space.sm],
        },
      },
      {
        name: 'flip',
        options: {
          padding: space.sm,
        },
      },
    ],
  });
};
