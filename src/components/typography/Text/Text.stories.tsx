import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Text, { Code, Strong } from './Text';
import { TextProps } from './Text.types';
import { TextSizes, TextVariants } from './Text.enums';

export default {
  title: 'components/typography/Text',
  component: Text,
} as Meta;

const lipsum = `Lorem ipsum dolor sit amet`;

export const playground: Story<TextProps> = (args) => <Text {...args} />;
playground.parameters = {
  chromatic: { disable: true },
};
playground.argTypes = {
  children: {
    control: { type: 'text' },
    table: {
      type: { summary: 'string' },
    },
    defaultValue: 'Playground Text',
  },
  size: {
    control: {
      type: 'select',
      options: TextSizes,
    },
    defaultValue: TextSizes.lg,
  },
  variant: {
    control: {
      type: 'select',
      options: TextVariants,
    },
    defaultValue: TextVariants.primary,
  },
  isBold: { control: { type: 'boolean' } },
};

export const largeText: Story = () => <Text size={TextSizes.lg}>{lipsum}</Text>;

export const mediumText: Story = () => (
  <Text size={TextSizes.md}>{lipsum}</Text>
);

export const smallText: Story = () => <Text size={TextSizes.sm}>{lipsum}</Text>;

export const primaryText: Story = () => (
  <>
    <Text>{lipsum}</Text>
    <br />
    <Text isBold>{lipsum}</Text>
  </>
);

export const secondaryText: Story = () => (
  <>
    <Text variant={TextVariants.secondary}>{lipsum}</Text>
    <br />
    <Text variant={TextVariants.secondary} isBold>
      {lipsum}
    </Text>
  </>
);

export const contextText: Story = () => (
  <>
    <Text variant={TextVariants.context}>{lipsum}</Text>
    <br />
    <Text variant={TextVariants.context} isBold>
      {lipsum}
    </Text>
  </>
);

export const monospaceText: Story = () => (
  <>
    <Text variant={TextVariants.monospace}>{lipsum}</Text>
    <br />
    <Text variant={TextVariants.monospace} isBold>
      {lipsum}
    </Text>
  </>
);

export const dangerText: Story = () => (
  <>
    <Text variant={TextVariants.danger}>{lipsum}</Text>
    <br />
    <Text variant={TextVariants.danger} isBold>
      {lipsum}
    </Text>
  </>
);

export const shorthandComponents: Story = () => (
  <>
    <Code>This is shorthand Code component</Code>
    <br />
    <br />
    <Strong>This is shorthand Strong component</Strong>
  </>
);
