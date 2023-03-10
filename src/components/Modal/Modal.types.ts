import type { MouseEventHandler, ReactNode } from 'react';
import type { ModalSizes } from './Modal.enums';

export type Sizes = typeof ModalSizes[keyof typeof ModalSizes];

export interface ModalProps {
  children: ReactNode;
  onClose?: MouseEventHandler;
  footer?: ReactNode;
  title?: string;
  size?: Sizes;
  className?: string;
}
