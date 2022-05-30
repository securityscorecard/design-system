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
  isCollapsedOnOpen?: boolean;
  items: AccordionItem[];
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
