import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Accordion from './Accordion';

export default {
  title: 'components/Accordion',
  component: Accordion,
} as Meta;

const items = [
  { title: 'Item 1', content: 'Content', isOpen: true },
  { title: 'Item 2', content: 'Content' },
];

export const DefaultAccordion: Story = () => (
  <Accordion items={items}>Accordion</Accordion>
);
DefaultAccordion.storyName = 'DefaultAccordion';

export const CollapsesOnOpen: Story = () => (
  <Accordion items={items} isCollapsedOnOpen>
    Accordion
  </Accordion>
);
CollapsesOnOpen.storyName = 'Collapses on open';
