import type { MouseEventHandler, ReactNode } from 'react';
import type { ModalSizes } from './Modal.enums';

export type ModalSizes = typeof ModalSizes[keyof typeof ModalSizes];

export interface ModalProps {
  children: ReactNode;
  onClose?: MouseEventHandler;
  footer?: ReactNode;
  title?: string;
  size?: ModalSizes;
  className?: string;
  isOverlayBlurred?: boolean;
}
