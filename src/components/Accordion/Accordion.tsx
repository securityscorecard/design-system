import type {
  AccordionMultiProps,
  AccordionProps,
  AccordionSingleProps,
  AccordionVariant,
  StyledAccordionVariantProp,
} from './Accordion.types';

import { forwardRef, useMemo } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import styled, { css } from 'styled-components';

import { createCtx } from '../../managers/common/createCtx';
import { AccordionVariants } from './Accordion.enums';

export const { useContext: useAccordionContext, Provider } = createCtx<{
  variant: AccordionVariant;
}>(
  'AccordionContext',
  '"useAccordionContext" must be inside a "AccordionContext" with a value',
);

const AccordionRoot = styled(RadixAccordion.Root)<StyledAccordionVariantProp>`
  background-color: ${({ theme }) => theme.colors.neutral['0']};
  ${({ $variant }) =>
    $variant === AccordionVariants.regular &&
    css`
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    `}
`;

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    { children, variant = AccordionVariants.inline, ...props },
    forwardedRef,
  ) => {
    const singleProps = {
      ...props,
      type: props.type,
      collapsible: true,
    } as AccordionSingleProps & { collapsible: true };
    const multiProps = {
      ...props,
      type: props.type,
    } as AccordionMultiProps;
    const type = props.type === 'single' ? singleProps : multiProps;
    const ctx = useMemo(() => ({ variant }), [variant]);

    return (
      <Provider value={ctx}>
        <AccordionRoot {...type} ref={forwardedRef} $variant={variant}>
          {children}
        </AccordionRoot>
      </Provider>
    );
  },
);

Accordion.defaultProps = {
  type: 'single',
};

export default Accordion;
