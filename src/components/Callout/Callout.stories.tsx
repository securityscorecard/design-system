import { Meta, StoryObj } from '@storybook/react';

import Callout from './Callout';
import { Link } from '../Link';
import { Strong } from '../Text';
import { Stack } from '../layout';

const meta = {
  title: 'components/Callout',
  component: Callout,
  args: {
    children: (
      <>
        <Strong>Did you know?</Strong> This is a callout message that may
        include <Link href="#">links</Link> even!
      </>
    ),
  },
} satisfies Meta<typeof Callout>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: { screenshot: { skip: true } },
};

export const InfoCallout: Story = {
  args: { color: 'info' },
};

export const NeutralCallout: Story = {
  args: { color: 'neutral' },
};

export const SizedIcon: Story = {
  render: (args) => (
    <Stack gap="md">
      <Callout {...args} icon={{ name: 'lightbulb', size: 'xs' }} />
      <Callout {...args} icon={{ name: 'lightbulb', size: 'sm' }} />
      <Callout {...args} icon={{ name: 'lightbulb', size: 'md' }} />
    </Stack>
  ),
  args: { color: 'neutral' },
};

export const ColorsDark: Story = {
  render: (args) => (
    <Stack gap="md">
      <Callout {...args} color="info" />
      <Callout {...args} color="neutral" />
    </Stack>
  ),
  parameters: {
    themes: {
      themeOverride: 'Dark',
    },
  },
};
