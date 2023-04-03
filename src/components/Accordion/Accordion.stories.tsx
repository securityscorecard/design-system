import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Inline, Stack } from '../layout';
import { HexGrade } from '../HexGrade';
import { Paragraph, Text } from '../typographyLegacy';
import { Button } from '../Button';
import Accordion from './Accordion';
import { AccordionProps } from './Accordion.types';
import { CollapsibleVariants } from '../Collapsible/Collapsible.enums';

export default {
  title: 'components/Accordion',
  component: Accordion,
  argTypes: {
    isCollapsedOnOpen: {
      control: { type: 'boolean' },
    },
    openItems: {
      description: 'Array of ids that can be changed by external state',
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

export const InlineAccordion = AccordionTemplate.bind({});
InlineAccordion.args = {
  ...Playground.args,
  variant: CollapsibleVariants.inline,
};

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

export const AcordionWithExternalManagement: Story<AccordionProps> = () => {
  const [openItems, setOpenItems] = useState([]);
  const handleOnClick = (id: string) => {
    if (!openItems.includes(id)) {
      const newItems = [id];
      return setOpenItems(newItems);
    }
    return setOpenItems([...openItems]);
  };

  const localItems = [
    { id: 'first', title: 'Item 1', content: 'Content', isOpen: true },
    { id: 'second', title: 'Item 2', content: 'Content' },
    { id: 'third', title: 'Item 3', content: 'Content' },
  ];

  return (
    <Inline gap="xl">
      <Stack gap="sm" justify="flex-start">
        <Button variant="text" onClick={() => handleOnClick('first')}>
          First section
        </Button>
        <Button variant="text" onClick={() => handleOnClick('second')}>
          Second section
        </Button>
        <Button variant="text" onClick={() => handleOnClick('third')}>
          Third section
        </Button>
      </Stack>
      <Accordion items={localItems} openItems={openItems} />
    </Inline>
  );
};
