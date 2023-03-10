import type { Meta, Story } from '@storybook/react/types-6-0';
import type { ParagraphProps } from './Paragraph.types';

import { Text } from '../index';
import { TextSizes, TextVariants } from '../Text/Text.enums';
import Paragraph from './Paragraph';
import { generateControl } from '../../../utils/tests/storybook';

export default {
  title: 'components/typography/Paragraph',
  component: Paragraph,
  argTypes: {
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      ...generateControl('select', TextSizes),
      table: {
        type: {
          summary: Object.keys(TextSizes)
            .map((size) => `"${size}"`)
            .join('|'),
        },
        defaultValue: {
          summary: `"${TextSizes.lg}"`,
        },
      },
    },
    variant: {
      ...generateControl('select', TextVariants),
      table: {
        type: {
          summary: Object.keys(TextVariants)
            .map((variant) => `"${variant}"`)
            .join('|'),
        },
        defaultValue: {
          summary: `"${TextVariants.primary}"`,
        },
      },
    },
    margin: { control: { disable: true } },
    padding: { control: { disable: true } },
  },
} as Meta;

const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra
magna lectus, a congue ex blandit vel. Donec id mi commodo eros porta tempus. Vivamus et elit ut
leo tincidunt vehicula non a dolor. Suspendisse placerat turpis nisl, quis gravida sem semper et.`;

export const Playground: Story<ParagraphProps> = (args) => (
  <Paragraph {...args} />
);
Playground.args = {
  children: lipsum,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const DefaultParagraph: Story = () => (
  <>
    <Paragraph size={TextSizes.md} variant={TextVariants.monospace}>
      {lipsum}
    </Paragraph>
    <Paragraph margin={{ top: 1, bottom: 3 }} size={TextSizes.sm}>
      {lipsum}
    </Paragraph>
    <Paragraph>{lipsum}</Paragraph>
  </>
);

export const TextInParagraph: Story = () => (
  <Paragraph>
    <Text variant={TextVariants.primary}>Lorem ipsum</Text> dolor sit amet,
    consectetur <Text variant={TextVariants.secondary}>adipiscing elit</Text>.
    Phasellus pharetra magna lectus, <Text isBold>a congue ex</Text> blandit
    vel. <Text variant={TextVariants.context}>Donec id mi commodo eros</Text>{' '}
    porta tempus. Vivamus et elit ut leo{' '}
    <Text variant={TextVariants.monospace}>tincidunt vehicula</Text> non a
    dolor. Suspendisse placerat turpis nisl, quis{' '}
    <Text variant={TextVariants.danger}>gravida sem semper et</Text>.
  </Paragraph>
);
