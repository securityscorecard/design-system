import React, { ReactNode } from 'react';

export interface TooltipWrapperProps {
  popupRenderer: () => React.ReactElement;
  shouldRender: boolean;
  children: ReactNode;
}
