import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Accordion from './Accordion';
import { AccordionProps } from './Accordion.types';

export default {
  title: 'components/Accordion',
  component: Accordion,
  argTypes: {
    items: {
      table: {
        type: {
          summary: 'AccordionItem[]',
          detail:`{
  title: string | ReactNode;
  content: ReactNode;
  isOpen?: boolean;
  id: string | number;
}`
        }
      }
    }
  },
} as Meta;

const items = [
  { id: 1, title: 'Item 1', content: 'Content', isOpen: true },
  { id: 2, title: 'Item 2', content: 'Content' },
];

export const Playground: Story<AccordionProps> = (args) => (
  <Accordion {...args} />
);
Playground.args = { items };
Playground.parameters = {
  screenshot: { skip: true },
};

export const DefaultAccordion: Story = () => (
  <Accordion items={items}>Accordion</Accordion>
);
DefaultAccordion.storyName = 'DefaultAccordion';

export const DoesNotCollapsOnOpen: Story = () => (
  <Accordion isCollapsedOnOpen={false} items={items}>
    Accordion
  </Accordion>
);
DoesNotCollapsOnOpen.storyName = 'Does not collapse on open';

export const NoCardAccordion: Story = () => (
  <Accordion isCard={false} items={items}>
    Accordion
  </Accordion>
);
NoCardAccordion.storyName = 'Accordion without card wrapper';
