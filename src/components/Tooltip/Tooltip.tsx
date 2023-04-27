import type { FC } from 'react';
import type { TooltipProps } from './Tooltip.types';

import { forwardRef, useRef } from 'react';
import { isFalsy } from 'ramda-adjunct';

import { PortalPlacements } from '../../hooks/useCalculatePortalPlacements.enums';
import { Dropdown } from '../Dropdown';
import { mergeRefs } from '../../utils/mergeRefs';

const Tooltip: FC<TooltipProps> = forwardRef(
  (
    {
      children,
      popup,
      placement = PortalPlacements.bottom,
      width = 270,
      defaultIsPopupDisplayed = false,
      ...props
    },
    ref,
  ) => {
    const parentRef = useRef(null);
    const mergedRef = mergeRefs(ref, parentRef);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    if (isFalsy(popup)) return <>{children}</>;

    return (
      <Dropdown
        defaultIsOpen={defaultIsPopupDisplayed}
        maxPaneWidth={width}
        placement={placement}
        trigger={
          <span ref={mergedRef} {...props}>
            {children}
          </span>
        }
        triggerEvents={['hover']}
        hasPaneArrow
        isPaneElevated
      >
        {popup}
      </Dropdown>
    );
  },
);

export default Tooltip;
