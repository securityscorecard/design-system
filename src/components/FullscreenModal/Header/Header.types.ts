import type { MutableRefObject } from 'react';

export interface HeaderProps {
  width: number;
  offset: number;
  modalRef: MutableRefObject<HTMLElement>;
  handleClose: () => void;
}
