import type { MouseEventHandler, ReactNode } from 'react';
import type { DrawerSizes } from './Drawer.enums';

export type Sizes = typeof DrawerSizes[keyof typeof DrawerSizes];

export interface DrawerProps {
  children: ReactNode;
  onClose: MouseEventHandler;
  footer?: ReactNode;
  title: string;
  size?: Sizes;
  adornment?: ReactNode;
  hasBackdrop?: boolean;
  className?: string;
  [key: string]: unknown;
}
