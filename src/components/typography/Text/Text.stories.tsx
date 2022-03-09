import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Text, { Code, Strong } from './Text';
import { TextProps } from './Text.types';
import { TextSizes, TextVariants } from './Text.enums';
import { generateControl } from '../../../utils/tests/storybook';

export default {
  title: 'components/typography/Text',
  component: Text,
  argTypes: {
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      ...generateControl('select', TextSizes),
    },
    variant: {
      ...generateControl('select', TextVariants),
    },
  },
} as Meta;

const lipsum = `Lorem ipsum dolor sit amet`;

export const Playground: Story<TextProps & { children: React.ReactChild }> = (
  args,
) => <Text {...args} />;
Playground.args = {
  children: 'Playground Text',
};

export const LargeText: Story = () => <Text size={TextSizes.lg}>{lipsum}</Text>;

export const MediumText: Story = () => (
  <Text size={TextSizes.md}>{lipsum}</Text>
);

export const SmallText: Story = () => <Text size={TextSizes.sm}>{lipsum}</Text>;

SmallText.storyName = 'Small Text (DEPRECATED)';

export const PrimaryText: Story = () => (
  <>
    <Text>{lipsum}</Text>
    <br />
    <Text isBold>{lipsum}</Text>
  </>
);

export const SecondaryText: Story = () => (
  <>
    <Text variant={TextVariants.secondary}>{lipsum}</Text>
    <br />
    <Text variant={TextVariants.secondary} isBold>
      {lipsum}
    </Text>
  </>
);

export const ContextText: Story = () => (
  <>
    <Text variant={TextVariants.context}>{lipsum}</Text>
    <br />
    <Text variant={TextVariants.context} isBold>
      {lipsum}
    </Text>
  </>
);

ContextText.storyName = 'Context Text (DEPRECATED)';

export const MonospaceText: Story = () => (
  <>
    <Text variant={TextVariants.monospace}>{lipsum}</Text>
    <br />
    <Text variant={TextVariants.monospace} isBold>
      {lipsum}
    </Text>
  </>
);

MonospaceText.storyName = 'Monospace Text (DEPRECATED)';

export const DangerText: Story = () => (
  <>
    <Text variant={TextVariants.danger}>{lipsum}</Text>
    <br />
    <Text variant={TextVariants.danger} isBold>
      {lipsum}
    </Text>
  </>
);

export const ShorthandComponents: Story = () => (
  <>
    <Code>This is shorthand Code component</Code>
    <br />
    <br />
    <Strong>This is shorthand Strong component</Strong>
  </>
);
