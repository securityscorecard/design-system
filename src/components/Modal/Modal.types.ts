import type { MouseEventHandler, ReactNode } from 'react';

import { ModalSizes } from './Modal.enums';

export type ModalSizes = (typeof ModalSizes)[keyof typeof ModalSizes];

export interface ModalProps {
  /** Modal window content */
  children: ReactNode;
  /** Callback triggered by clicking on close button */
  onClose?: MouseEventHandler<HTMLDivElement>;
  /** Content of modal window footer */
  footer?: ReactNode;
  /** Modal window title displayed in header */
  title?: string;
  /** Maximal size of the modal window */
  size?: ModalSizes;
  className?: string;
}
