import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Accordion from './Accordion';

export default {
  title: 'components/Accordion',
  component: Accordion,
} as Meta;

const items = [
  { id: 1, title: 'Item 1', content: 'Content', isOpen: true },
  { id: 2, title: 'Item 2', content: 'Content' },
];

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
