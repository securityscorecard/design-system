import type { MutableRefObject } from 'react';

export interface FooterProps {
  width: number;
  offset: number;
  modalRef: MutableRefObject<HTMLElement>;
  scrollToTopButtonLabel: string;
}
