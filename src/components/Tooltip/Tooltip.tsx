import type { FC } from 'react';
import type { TooltipProps } from './Tooltip.types';

import { useRef } from 'react';
import { isFalsy } from 'ramda-adjunct';

import { PortalPlacements } from '../../hooks/useCalculatePortalPlacements.enums';
import { Dropdown } from '../Dropdown';

const Tooltip: FC<TooltipProps> = ({
  children,
  popup,
  placement = PortalPlacements.bottom,
  width = 270,
  defaultIsPopupDisplayed = false,
  ...props
}) => {
  const parentRef = useRef(null);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (isFalsy(popup)) return <>{children}</>;

  return (
    <Dropdown
      defaultIsOpen={defaultIsPopupDisplayed}
      maxPaneWidth={width}
      placement={placement}
      trigger={
        <span ref={parentRef} {...props}>
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
};

export default Tooltip;
