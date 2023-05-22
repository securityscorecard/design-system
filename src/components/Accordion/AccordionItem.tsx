import type {
  AccordionItemProps,
  StyledAccordionVariantProp,
} from './Accordion.types';
import type { ComponentPropsWithRef, PropsWithChildren } from 'react';

import { forwardRef } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import styled, { css } from 'styled-components';

import { useAccordionContext } from './Accordion';
import { AccordionVariants } from './Accordion.enums';

const AccordionItemRoot = styled(
  RadixAccordion.Item,
)<StyledAccordionVariantProp>`
  ${({ $variant }) =>
    $variant === AccordionVariants.regular &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.neutral['400']};
      border-radius: 4px;
    `}
`;

const AccordionItem = forwardRef<
  HTMLDivElement,
  PropsWithChildren<AccordionItemProps & ComponentPropsWithRef<'div'>>
>(({ children, id, ...props }, forwardedRef) => {
  const { variant } = useAccordionContext();
  return (
    <AccordionItemRoot
      ref={forwardedRef}
      $variant={variant}
      value={id}
      {...props}
    >
      {children}
    </AccordionItemRoot>
  );
});

export default AccordionItem;
