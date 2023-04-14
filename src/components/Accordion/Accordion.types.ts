import type { ReactNode } from 'react';

export type AccordionItemId = string | number;

export type AccordionItem = {
  title: string | ReactNode;
  content: ReactNode;
  isOpen?: boolean;
  id: AccordionItemId;
};

export interface AccordionCollapsibleProps {
  children?: ReactNode;
  className?: string;
  isOpen: boolean;
  title: ReactNode;
  handleHeaderClick?: (index?: AccordionItemId) => void;
  id: AccordionItemId;
}

export interface AccordionProps {
  isCollapsedOnOpen?: boolean;
  items: AccordionItem[];
  className?: string;
  openItems?: AccordionItemId[];
  onChange?: (openIds: AccordionItemId[]) => void;
}
