import { Meta, StoryObj } from '@storybook/react';

import HintTooltip from './HintTooltip';
import { Inline, Stack } from '../layout';
import { Paragraph } from '../Paragraph';
import { Link } from '../Link';
import { Text } from '../Text';

const meta = {
  component: HintTooltip,
  argTypes: {
    children: {
      control: { disable: true },
    },
  },
} satisfies Meta<typeof HintTooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Stack gap="md">
        <Paragraph size="md">This is the tooltip content</Paragraph>
        <Link>Here is some link</Link>
      </Stack>
    ),
  },
};

export const InlineHintTooltip: Story = {
  args: Default.args,
  decorators: [
    (storyFn) => (
      <Inline align="center" gap="sm">
        <Text size="lg">Heading</Text>
        {storyFn()}
      </Inline>
    ),
  ],
};
