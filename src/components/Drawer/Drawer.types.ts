import type { MouseEventHandler, ReactNode } from 'react';
import type { DrawerSizes } from './Drawer.enums';

export type DrawerSizes = (typeof DrawerSizes)[keyof typeof DrawerSizes];

export interface DrawerProps {
  children: ReactNode;
  onClose: MouseEventHandler;
  footer?: ReactNode;
  title: string;
  size?: DrawerSizes;
  adornment?: ReactNode;
  hasBackdrop?: boolean;
  className?: string;
  [key: string]: unknown;
}
