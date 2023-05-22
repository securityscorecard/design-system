import type { StyledAccordionVariantProp } from './Accordion.types';
import type { ComponentPropsWithRef, PropsWithChildren } from 'react';

import { forwardRef } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import styled, { css } from 'styled-components';

import { useAccordionContext } from './Accordion';
import { AccordionVariants } from './Accordion.enums';

const AccordionContentRoot = styled(RadixAccordion.Content)`
  overflow: hidden;

  &[data-state='open'] {
    animation: ssc-ds-slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state='closed'] {
    animation: ssc-ds-slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  @keyframes ssc-ds-slide-down {
    from {
      height: 0;
    }

    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes ssc-ds-slide-up {
    from {
      height: var(--radix-accordion-content-height);
    }

    to {
      height: 0;
    }
  }
`;
const AccordionContentText = styled.div<StyledAccordionVariantProp>`
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 1rem 0;

  ${({ $variant }) =>
    $variant === AccordionVariants.regular &&
    css`
      padding: 1rem 2em;
      border-top: 1px solid ${({ theme }) => theme.colors.neutral['400']};
    `}
`;

const AccordionContent = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ComponentPropsWithRef<'div'>>
>(({ children, ...props }, forwardedRef) => {
  const { variant } = useAccordionContext();
  return (
    <AccordionContentRoot {...props} ref={forwardedRef}>
      <AccordionContentText $variant={variant}>{children}</AccordionContentText>
    </AccordionContentRoot>
  );
});

export default AccordionContent;
