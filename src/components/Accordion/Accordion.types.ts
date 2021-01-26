import { ReactNode } from 'react';

export type AccordionItem = {
  title: string;
  content: ReactNode;
  isOpen?: boolean;
};

export interface AccordionCollapsibleProps {
  className?: string;
  isOpen: boolean;
  title: string;
  handleHeaderClick?: (index?: number) => void;
  index: number;
}

export interface AccordionProps {
  isCollapsedOnOpen?: boolean;
  items: AccordionItem[];
}
