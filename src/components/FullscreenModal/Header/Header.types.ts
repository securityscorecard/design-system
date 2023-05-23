import type { MutableRefObject, ReactNode } from 'react';

export interface HeaderProps {
  width: number;
  offset: number;
  modalRef: MutableRefObject<HTMLElement>;
  handleClose: () => void;
  children: ReactNode;
}
