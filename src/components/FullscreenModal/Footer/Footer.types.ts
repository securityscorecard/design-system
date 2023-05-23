import type { MutableRefObject, ReactNode } from 'react';

export interface FooterProps {
  width: number;
  offset: number;
  modalRef: MutableRefObject<HTMLElement>;
  scrollToTopButtonLabel: string;
  children: ReactNode;
}
