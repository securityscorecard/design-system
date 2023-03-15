import React from 'react';

import { DrawerSizes } from './Drawer.enums';

export type Sizes = typeof DrawerSizes[keyof typeof DrawerSizes];

export interface DrawerProps {
  children: React.ReactNode;
  onClose: React.MouseEventHandler;
  footer?: React.ReactNode;
  title: string;
  size?: Sizes;
  adornment?: React.ReactNode;
  hasBackdrop?: boolean;
  className?: string;
  [key: string]: unknown;
}
