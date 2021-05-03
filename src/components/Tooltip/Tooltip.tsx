import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { isFalsy } from 'ramda-adjunct';

import { TooltipProps } from './Tooltip.types';
import { PortalPlacements } from '../../hooks/useCalculatePortalPlacements.enums';
import { useTooltip } from './hooks/useTooltip';

const Tooltip: React.FC<TooltipProps> = ({
  children,
  popup,
  placement = PortalPlacements.bottom,
  defaultIsPopupDisplayed = false,
  ...props
}) => {
  const parentRef = useRef(null);
  const { Popup, handleShowTooltip, handleHideTooltip } = useTooltip(
    parentRef,
    { placement, defaultIsPopupDisplayed },
  );

  const delayedHandleHideTooltip = () => {
    setTimeout(handleHideTooltip, 200);
  };

  if (isFalsy(popup)) return <>{children}</>;

  return (
    <span
      ref={parentRef}
      onMouseEnter={handleShowTooltip}
      onMouseLeave={delayedHandleHideTooltip}
      {...props}
    >
      {children}
      <Popup>{popup}</Popup>
    </span>
  );
};

Tooltip.propTypes = {
  popup: PropTypes.node,
  className: PropTypes.string,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  defaultIsPopupDisplayed: PropTypes.bool,
};

export default Tooltip;
