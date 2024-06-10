import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import { Inline, Stack } from '../layout';
import Text, { Code, Strong } from './Text';
import { TextProps } from './Text.types';
import { TextSizes, TextVariants } from './Text.enums';
import { generateControl } from '../../utils/tests/storybook';
import { DSThemeOverride } from '../../theme';
import { getColor, getRadii } from '../../utils';
import { Paragraph } from '../Paragraph';
import { Heading } from '../Heading';

export default {
  title: 'typography/Text',
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
Playground.parameters = {
  screenshot: { skip: true },
};

export const LargeText: Story = () => <Text size={TextSizes.lg}>{lipsum}</Text>;

export const MediumText: Story = () => (
  <Text size={TextSizes.md}>{lipsum}</Text>
);

export const SmallText: Story = () => <Text size={TextSizes.sm}>{lipsum}</Text>;
export const TextHeading1: Story = () => (
  <Stack>
    <Text size={TextSizes.h1}>{lipsum}</Text>
    <Text size={TextSizes.h1} variant="secondary">
      {lipsum}
    </Text>
  </Stack>
);
export const TextHeading2: Story = () => (
  <Stack>
    <Text size={TextSizes.h2}>{lipsum}</Text>
    <Text size={TextSizes.h2} variant="secondary">
      {lipsum}
    </Text>
  </Stack>
);
export const TextHeading3: Story = () => (
  <Stack>
    <Text size={TextSizes.h3}>{lipsum}</Text>
    <Text size={TextSizes.h3} variant="secondary">
      {lipsum}
    </Text>
  </Stack>
);
export const TextHeading4: Story = () => (
  <Stack>
    <Text size={TextSizes.h4}>{lipsum}</Text>
    <Text size={TextSizes.h4} variant="secondary">
      {lipsum}
    </Text>
  </Stack>
);
export const TextHeading5: Story = () => (
  <Stack>
    <Text size={TextSizes.h5}>{lipsum}</Text>
    <Text size={TextSizes.h5} variant="secondary">
      {lipsum}
    </Text>
  </Stack>
);

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

const DarkBox = styled.div`
  background: linear-gradient(
    130deg,
    ${getColor('brand.900')} 0%,
    ${getColor('brand.800')} 100%
  );
  padding: 2rem;
  border-radius: ${getRadii('double')};
  max-width: 30rem;
`;

export const DarkMode: Story = () => (
  <DarkBox>
    <DSThemeOverride
      overrides={(theme) => ({
        colors: {
          text: {
            primary: theme.colors.neutral[0],
            secondary: theme.colors.neutral[500],
            danger: '#fd4a4a',
          },
        },
      })}
    >
      <Stack gap="lg">
        <Stack as="hgroup" gap="sm">
          <Heading>Very cool feature title</Heading>
          <Paragraph variant="secondary">
            Morbi auctor consectetur ex ut pellentesque. Vestibulum vitae
            pretium odio, non dignissim dui. Pellentesque congue purus purus,
            ultricies ullamcorper leo finibus quis.
          </Paragraph>
        </Stack>
        <Inline gap="lg" justify="space-between">
          <Stack>
            <Text size="h2" variant={TextVariants.primary}>
              200
            </Text>
            <Text variant={TextVariants.secondary}>First metric</Text>
          </Stack>
          <Stack>
            <Text size="h2" variant={TextVariants.danger}>
              -53
            </Text>
            <Text variant={TextVariants.secondary}>Negative metric</Text>
          </Stack>
          <Stack>
            <Text size="h2" variant={TextVariants.primary}>
              31
            </Text>
            <Text variant={TextVariants.secondary}>Third metric</Text>
          </Stack>
        </Inline>
      </Stack>
    </DSThemeOverride>
  </DarkBox>
);
DarkMode.parameters = {
  docs: {
    source: { type: 'code' },
  },
};
