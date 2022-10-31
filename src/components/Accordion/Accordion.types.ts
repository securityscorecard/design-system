import { ReactNode } from 'react';
import PropTypes from 'prop-types';

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
  isCard?: boolean;
}

export interface AccordionProps {
  /**
   * Allow multiple item to be open at the same time
   */
  isCollapsedOnOpen?: boolean;
  /**
   * List of accordion items
   */
  items: AccordionItem[];
  /** 
   * Is accordion item to be wrapped in shadowed box when open
   */
  isCard?: boolean;
}

export const AccordionItemIdPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);

export const AccordionItemPropType = PropTypes.exact({
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  id: AccordionItemIdPropType.isRequired,
});
