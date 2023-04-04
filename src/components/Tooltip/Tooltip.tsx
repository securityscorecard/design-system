import type { FC } from 'react';
import type { TooltipProps } from './Tooltip.types';

import { useRef } from 'react';
import PropTypes from 'prop-types';
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

Tooltip.propTypes /* remove-proptypes */ = {
  //
  // =============== WARNING ================
  // | These PropTypes are auto-generated   |
  // | from the TypeScript type definitions  |
  // ========================================
  //
  className: PropTypes.string,
  defaultIsPopupDisplayed: PropTypes.bool,
  placement: PropTypes.oneOf([
    'auto-end',
    'auto-start',
    'auto',
    'bottom-end',
    'bottom-start',
    'bottom',
    'left-end',
    'left-start',
    'left',
    'right-end',
    'right-start',
    'right',
    'top-end',
    'top-start',
    'top',
  ]),
  popup: PropTypes.node,
  width: PropTypes.number,
} as any;

export default Tooltip;
