import { ReactNode } from 'react';
import PropTypes from 'prop-types';

export type AccordionItemId = string | number;

export type AccordionItem = {
  title: string;
  content: ReactNode;
  isOpen?: boolean;
  id: AccordionItemId;
};

export interface AccordionCollapsibleProps {
  className?: string;
  isOpen: boolean;
  title: string;
  handleHeaderClick?: (index?: AccordionItemId) => void;
  id: AccordionItemId;
}

export interface AccordionProps {
  isCollapsedOnOpen?: boolean;
  items: AccordionItem[];
}

export const AccordionItemPropType = PropTypes.exact({
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
});
