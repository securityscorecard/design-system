import type { AccordionVariants } from './Accordion.enums';
import type { ReactElement } from 'react';

export type AccordionVariant =
  (typeof AccordionVariants)[keyof typeof AccordionVariants];

export type AccordionItemId = string;

export type AccordionItemProps = {
  id: AccordionItemId;
};

type AccordionBaseProps = {
  /**  Accordion visual variant */
  variant?: AccordionVariant;
  className?: string;
  children: ReactElement | ReactElement[];
};

export interface AccordionSingleProps extends AccordionBaseProps {
  /** Defines if multiple accordion items can be opened simultaniously */
  type: 'single' | undefined;
  /** Controls current state of accordion, for controlled only */
  value?: AccordionItemId;
  /** Default state of accordion on first render, for uncontrolled only */
  defaultValue?: AccordionItemId;
  /** Handler called when state changes */
  onValueChange?: (value: AccordionItemId) => void;
}

export interface AccordionMultiProps extends AccordionBaseProps {
  /** Defines if multiple accordion items can be opened simultaniously */
  type: 'multiple';
  /** Controls current state of accordion, for controlled only */
  value?: AccordionItemId[];
  /** Default state of accordion on first render, for uncontrolled only */
  defaultValue?: AccordionItemId[];
  /** Handler called when state changes */
  onValueChange?: (value: AccordionItemId[]) => void;
}

export type AccordionProps = AccordionSingleProps | AccordionMultiProps;

export interface StyledAccordionVariantProp {
  $variant: AccordionBaseProps['variant'];
}
