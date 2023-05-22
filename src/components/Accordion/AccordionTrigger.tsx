import type { StyledAccordionVariantProp } from './Accordion.types';
import type { ComponentPropsWithRef, PropsWithChildren } from 'react';

import { forwardRef } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import styled, { css } from 'styled-components';

import { useAccordionContext } from './Accordion';
import { Icon } from '../Icon';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import { AccordionVariants } from './Accordion.enums';

const AccordionHeaderRoot = styled(
  RadixAccordion.Header,
)<StyledAccordionVariantProp>`
  display: flex;
  ${({ $variant }) =>
    $variant === 'inline' &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.colors.neutral['400']};
    `}
`;
const AccordionTriggerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
`;
const AccordionTriggerRoot = styled(
  RadixAccordion.Trigger,
)<StyledAccordionVariantProp>`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex: 1;
  padding: 0.75rem 0;
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5;

  ${({ $variant }) =>
    $variant === AccordionVariants.regular &&
    css`
      padding: 0.75rem 1.5rem;
    `}

  &:hover {
    background-color: rgb(0 0 0 / 4%);
  }

  &:focus-visible {
    position: relative;
    z-index: 1;
    outline: 4px solid ${({ theme }) => theme.colors.primary['200']};
    border-radius: 4px;
  }

  &[data-state='open'] > ${AccordionTriggerIcon} {
    transform: rotate(90deg);
  }
`;

const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ComponentPropsWithRef<'button'>>
>(({ children, ...props }, forwardedRef) => {
  const { variant } = useAccordionContext();
  return (
    <AccordionHeaderRoot $variant={variant}>
      <AccordionTriggerRoot {...props} ref={forwardedRef} $variant={variant}>
        <AccordionTriggerIcon>
          <Icon name={SSCIconNames.angleRight} aria-hidden />
        </AccordionTriggerIcon>
        {children}
      </AccordionTriggerRoot>
    </AccordionHeaderRoot>
  );
});

export default AccordionTrigger;
