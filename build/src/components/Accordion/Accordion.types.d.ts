import { ReactNode } from 'react';
export declare type AccordionItemId = string | number;
export declare type AccordionItem = {
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
    className?: string;
}
export declare const AccordionItemIdPropType: any;
export declare const AccordionItemPropType: any;
