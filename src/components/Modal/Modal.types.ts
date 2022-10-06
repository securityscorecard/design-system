import React from 'react';

import { ModalSizes } from './Modal.enums';

export type Sizes = typeof ModalSizes[keyof typeof ModalSizes];

export interface ModalProps {
  children: React.ReactNode;
  onClose: React.MouseEventHandler;
  footer?: React.ReactNode;
  title?: string;
  size?: Sizes;
  className?: string;
}
