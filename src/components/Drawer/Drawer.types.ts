import type { MouseEventHandler, ReactNode } from 'react';

import { DrawerSizes } from './Drawer.enums';

export type DrawerSizes = (typeof DrawerSizes)[keyof typeof DrawerSizes];

export interface DrawerProps {
  children: ReactNode;
  onClose: MouseEventHandler;
  footer?: ReactNode;
  title: string;
  size?: DrawerSizes;
  adornment?: ReactNode;
  hasBackdrop?: boolean;
  clickOutsideToHide?: boolean;
  className?: string;
  [key: string]: unknown;
}
