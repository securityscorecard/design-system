import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { includes } from 'ramda';

import { Inline, Stack } from '../layout';
import { HexGrade } from '../HexGrade';
import { Paragraph, Text } from '../typographyLegacy';
import { Button } from '../Button';
import Accordion from './Accordion';
import { AccordionProps } from './Accordion.types';
import { TextSizes } from '../typographyLegacy/Text/Text.enums';

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

export const DoesNotCollapseOnOpen = AccordionTemplate.bind({});
DoesNotCollapseOnOpen.args = {
  ...Playground.args,
  isCollapsedOnOpen: false,
};
DoesNotCollapseOnOpen.storyName = 'Does not collapse on open';
DoesNotCollapseOnOpen.parameters = {
  screenshot: { skip: true },
};

const AccordionItemTitle = () => (
  <Stack gap="sm">
    <Inline align="center" gap="md">
      <HexGrade grade="A" size={24} />
      <Text size={TextSizes.lg}>Company Name</Text>
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
  const [openItems, setOpenItems] = useState<(string | number)[]>([]);
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
          {includes('first', openItems) && '->'} First section
        </Button>
        <Button variant="text" onClick={() => handleOnClick('second')}>
          {includes('second', openItems) && '->'} Second section
        </Button>
        <Button variant="text" onClick={() => handleOnClick('third')}>
          {includes('third', openItems) && '->'} Third section
        </Button>
      </Stack>
      <Accordion
        isCollapsedOnOpen={false}
        items={localItems}
        openItems={openItems}
        onChange={(ids) => {
          setOpenItems(ids);
        }}
      />
    </Inline>
  );
};
AcordionWithExternalManagement.parameters = {
  screenshot: { skip: true },
};
