import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { includes } from 'ramda';

import { Inline, Stack } from '../layout';
import { HexGrade } from '../HexGrade';
import Button from '../ButtonV2/Button';
import Accordion from './Accordion';
import { Text } from '../Text';
import { TextSizes } from '../Text/Text.enums';
import Paragraph from '../Paragraph/Paragraph';
import { AccordionItemId } from './Accordion.types';

const meta = {
  title: 'components/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;
export default meta;

type Story = StoryObj<typeof meta>;

const items = [
  { id: 1, title: 'Item 1', content: 'Content', isOpen: true },
  { id: 2, title: 'Item 2', content: 'Content' },
];

export const Playground: Story = {
  args: {
    items,
  },
  parameters: {
    screenshot: { skip: true },
  },
};

export const DefaultAccordion: Story = {
  args: Playground.args,
};

export const DoesNotCollapseOnOpen: Story = {
  args: {
    items: [items[0], { ...items[1], isOpen: true }],
    isCollapsedOnOpen: false,
  },
  parameters: {
    screenshot: { skip: true },
  },
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
export const CustomTitleElement: Story = {
  args: {
    items: [
      {
        id: 0,
        title: <AccordionItemTitle />,
        content: 'Content',
        isOpen: true,
      },
    ],
  },
};

export const AcordionWithExternalManagement: Story = {
  args: {
    items,
    isCollapsedOnOpen: false,
  },
  render: (args) => {
    const [openItems, setOpenItems] = useState<AccordionItemId[]>([]);
    const handleOnClick = (id: AccordionItemId) => {
      if (!openItems.includes(id)) {
        const newItems = [id];
        return setOpenItems(newItems);
      }
      return setOpenItems([...openItems]);
    };

    return (
      <Inline gap="xl" stretch="end">
        <Stack gap="sm" justify="flex-start">
          {args.items.map((item) => (
            <Button
              variant="ghost"
              onClick={() => {
                handleOnClick(item.id);
              }}
            >
              {includes(item.id, openItems) && '->'} {item.title.toString()}
            </Button>
          ))}
        </Stack>
        <Accordion
          {...args}
          openItems={openItems}
          onChange={(ids) => {
            setOpenItems(ids);
          }}
        />
      </Inline>
    );
  },
  parameters: {
    screenshot: { skip: true },
  },
};

export const DarkMode: Story = {
  args: Playground.args,
  parameters: {
    themes: {
      themeOverride: 'Dark',
    },
  },
};
