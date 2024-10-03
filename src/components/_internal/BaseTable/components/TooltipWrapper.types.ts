import type { ReactElement, ReactNode } from 'react';

export interface TooltipWrapperProps {
  popupRenderer: () => ReactElement;
  shouldRender: boolean;
  children: ReactNode;
}
