import { ReactNode } from 'react';

export type AccordionItem = {
  title: string;
  content: ReactNode;
  isOpen?: boolean;
  id: string | number;
};

export interface AccordionCollapsibleProps {
  className?: string;
  isOpen: boolean;
  title: string;
  handleHeaderClick?: (index?: number | string) => void;
  id: string | number;
}

export interface AccordionProps {
  isCollapsedOnOpen?: boolean;
  items: AccordionItem[];
}
