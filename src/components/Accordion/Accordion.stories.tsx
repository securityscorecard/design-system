import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import AccordionTrigger from './AccordionTrigger';
import AccordionContent from './AccordionContent';
import { Inline, Stack } from '../layout';
import { Paragraph, Text } from '../typographyLegacy';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { ArgTypesGroups } from '../../../.storybook/storybook.enums';

const AccordionItemTitle = () => (
  <Stack gap="sm">
    <Inline align="center" gap="md">
      <Icon color="grade.F" name="lightbulb" />
      <Text>Exploring the Multiverse in Marvel Comics</Text>
    </Inline>
    <Paragraph>
      The concept of the multiverse has always been a key part of Marvel Comics,
      &hellip;
    </Paragraph>
  </Stack>
);

const items = [
  {
    id: 'item1',
    title: 'The Evolution of the Marvel Cinematic Universe',
    content: `Over the past decade, the Marvel Cinematic Universe has become a cultural phenomenon, grossing billions of dollars at the box office and introducing audiences around the world to a host of beloved characters. But the success of the MCU didn't happen overnight. It was the result of years of planning, hard work, and a deep understanding of what makes these characters so special.`,
  },
  {
    id: 'item2',
    title: <AccordionItemTitle />,
    content: (
      <Paragraph>
        &hellip;allowing for endless possibilities and variations on beloved
        characters. But in recent years, the idea of the multiverse has taken on
        even greater significance, with major storylines like Secret Wars and
        the upcoming &ldquo;What If...?&rdquo; Disney+ series exploring the
        concept in depth.
      </Paragraph>
    ),
  },
];

/**
 * The Accordion component is mostly used to organize and present a large amount of information in a compact and
 * easy-to-navigate manner, while still providing users with the ability to selectively view the content they are interested in.
 *
 * The Accordion component is commonly used in documentation, FAQs, and other types of content-heavy pages.
 *
 * ## Usage
 * ```js
 * import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@securityscorecard/design-system'
 * ```
 *
 * ## Playground
 */
const meta = {
  component: Accordion,
  argTypes: {
    variant: { table: { category: ArgTypesGroups.appearance } },
    type: { table: { category: ArgTypesGroups.behaviour } },
    defaultValue: { table: { category: ArgTypesGroups.state } },
    value: { table: { category: ArgTypesGroups.state } },
    onValueChange: {
      action: 'onValueChange',
      table: { category: ArgTypesGroups.state },
    },
    className: { table: { category: ArgTypesGroups.common } },
  },
  subcomponents: { AccordionItem, AccordionTrigger, AccordionContent },
  parameters: {
    docs: {
      // page: subcomponentsTemplate,
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof Accordion>;

const AccordionTemplate: Story = {
  render: (args) => (
    <Accordion {...args}>
      {items.map((item) => (
        <AccordionItem key={item.id} id={item.id}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};

export const Playground: Story = {
  ...AccordionTemplate,
};

export const InlineVariant: Story = {
  ...AccordionTemplate,
  args: {
    variant: 'inline',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const [first, second] = canvas.getAllByRole('button');

    await step('Keyboard navigation', async () => {
      await step('item is focusable by Tab', async () => {
        await userEvent.tab();
        await expect(first).toHaveFocus();
      });
      await step('navigation with arrow keys is working', async () => {
        await userEvent.keyboard('[ArrowDown]');
        await expect(second).toHaveFocus();
        await userEvent.keyboard('[ArrowUp]');
        await expect(first).toHaveFocus();
      });
      await step('item can be controlled by Space and Enter keys', async () => {
        await userEvent.keyboard('[Space]');
        await expect(first).toHaveAttribute('data-state', 'open');
        await userEvent.keyboard('[Enter]');
        await expect(first).toHaveAttribute('data-state', 'closed');
      });
      await step(
        'navigation from first to last and opposite is working',
        async () => {
          await userEvent.keyboard('[ArrowUp]');
          await expect(second).toHaveFocus();
          await userEvent.keyboard('[ArrowDown]');
          await expect(first).toHaveFocus();
        },
      );
    });

    await step('Only one item can be opened at the same time', async () => {
      await userEvent.keyboard('[Space]');
      await expect(first).toHaveAttribute('data-state', 'open');
      await userEvent.keyboard('[ArrowDown]');
      await userEvent.keyboard('[Space]');
      await expect(first).toHaveAttribute('data-state', 'closed');
      await expect(second).toHaveAttribute('data-state', 'open');
    });
  },
};

export const RegularVariant: Story = {
  ...AccordionTemplate,
  args: {
    variant: 'regular',
  },
};

export const WithMultipleOpenItems: Story = {
  ...AccordionTemplate,
  args: {
    type: 'multiple',
    defaultValue: ['item1', 'item2'],
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const [first, second] = canvas.getAllByRole('button');

    await step('Multiple items can be opened at the same time', async () => {
      await userEvent.keyboard('[Space]');
      await userEvent.keyboard('[ArrowDown]');
      await userEvent.keyboard('[Space]');
      await expect(first).toHaveAttribute('data-state', 'open');
      await expect(second).toHaveAttribute('data-state', 'open');
    });
  },
};

const ControlledAccordionCompnent = (args) => {
  const [value, setValue] = useState([]);

  return (
    <Stack gap="md">
      <Inline align="center" gap="md">
        <Button
          variant="outline"
          onClick={() => {
            setValue(['item1']);
          }}
        >
          Open first
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setValue(['item2']);
          }}
        >
          Open second
        </Button>
      </Inline>

      <Accordion
        {...args}
        value={value}
        onValueChange={(v) => {
          action('onValueChange')(v);
          setValue(v);
        }}
      >
        {items.map((item) => (
          <AccordionItem key={item.id} id={item.id}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Stack>
  );
};

export const ControlledAccordion: Story = {
  render: ControlledAccordionCompnent,
  args: {
    type: 'multiple',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('Accordion can be controlled from outside', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Open first' }));
      await expect(
        canvas.getByRole('button', { name: items[0].title as string }),
      ).toHaveAttribute('data-state', 'open');
    });
  },
  parameters: {
    screenshot: { skip: true },
  },
};
