import React from 'react';

export interface TooltipWrapperProps {
  popupRenderer: () => React.ReactElement;
  shouldRender: boolean;
}
