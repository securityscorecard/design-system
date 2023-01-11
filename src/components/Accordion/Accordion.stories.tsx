import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Inline, Stack } from '../layout';
import { HexGrade } from '../HexGrade';
import { Paragraph, Text } from '../typographyLegacy';
import Accordion from './Accordion';
import { AccordionProps } from './Accordion.types';

export default {
  title: 'components/Accordion',
  component: Accordion,
  argTypes: {
    isCollapsedOnOpen: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const items = [
  { id: 1, title: 'Item 1', content: 'Content', isOpen: true },
  { id: 2, title: 'Item 2', content: 'Content' },
];

const AccordionTemplate: Story<AccordionProps> = (args) => (
  <Accordion {...args} />
);

export const Playground = AccordionTemplate.bind({});
Playground.args = { items };
Playground.parameters = {
  screenshot: { skip: true },
};

export const DefaultAccordion = AccordionTemplate.bind({});
DefaultAccordion.args = Playground.args;

export const DoesNotCollapsOnOpen = AccordionTemplate.bind({});
DoesNotCollapsOnOpen.args = {
  ...Playground.args,
  isCollapsedOnOpen: false,
};
DoesNotCollapsOnOpen.storyName = 'Does not collapse on open';

export const NoCardAccordion = AccordionTemplate.bind({});
NoCardAccordion.args = {
  ...Playground.args,
  isCard: false,
};
NoCardAccordion.storyName = 'Accordion without card wrapper';

const AccordionItemTitle = () => (
  <Stack gap="sm">
    <Inline align="center" gap="md">
      <HexGrade grade="A" size={24} />
      <Text>Company Name</Text>
    </Inline>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor.
    </Paragraph>
  </Stack>
);
export const CustomTitleElement: Story<AccordionProps> = AccordionTemplate.bind(
  {},
);
CustomTitleElement.args = {
  items: [
    { id: 0, title: <AccordionItemTitle />, content: 'Content', isOpen: true },
  ],
};
