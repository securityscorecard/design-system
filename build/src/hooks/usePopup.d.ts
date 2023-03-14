import { PopperProps, usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';
import { Options as ArrowOptions } from '@popperjs/core/lib/modifiers/arrow';
declare type UsePopup<Trigger extends PopperProps<null>['referenceElement'] = HTMLElement, Pane extends HTMLElement | null = HTMLElement, Arrow extends ArrowOptions['element'] = undefined> = (config: {
    triggerEl: Trigger;
    paneEl: Pane;
    arrowEl?: Arrow;
    placement?: Placement;
}) => ReturnType<typeof usePopper>;
export declare const usePopup: UsePopup;
export {};
