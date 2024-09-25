import { ReactNode } from 'react';

export type AccordionItemId = string | number;

export type AccordionItem = {
  title: string | ReactNode;
  content: ReactNode;
  isOpen?: boolean;
  id: AccordionItemId;
};

export interface AccordionCollapsibleProps {
  className?: string;
  isOpen: boolean;
  title: ReactNode;
  handleHeaderClick?: (index?: AccordionItemId) => void;
  id: AccordionItemId;
  children: ReactNode;
}

export interface AccordionProps {
  /** If set to `true` only one accordion item can be opened at the same time */
  isCollapsedOnOpen?: boolean;
  /** Array of ids that can be changed by external state */
  items: AccordionItem[];
  className?: string;
  /** Array of currently opened accordion items */
  openItems?: AccordionItemId[];
  /** Callback fired when according state changes */
  onChange?: (openIds: AccordionItemId[]) => void;
}
