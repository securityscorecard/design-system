import type { MouseEventHandler, ReactNode } from 'react';

import { ModalSizes } from './Modal.enums';

export type ModalSizes = (typeof ModalSizes)[keyof typeof ModalSizes];

export interface ModalProps {
  children: ReactNode;
  onClose?: MouseEventHandler<HTMLDivElement>;
  footer?: ReactNode;
  title?: string;
  size?: ModalSizes;
  className?: string;
}
