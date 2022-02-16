import React from 'react';

import { ToastVariants } from './Toast.enums';

export type Variants = typeof ToastVariants[keyof typeof ToastVariants];

export type ToastProps = {
  onClose: React.MouseEventHandler;
  width?: number;
  variant?: Variants;
};
