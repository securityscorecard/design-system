import type { ReactElement } from 'react';

export interface TooltipWrapperProps {
  popupRenderer: () => ReactElement;
  shouldRender: boolean;
}
