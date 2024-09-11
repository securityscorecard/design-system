import type { Meta, StoryObj } from '@storybook/react';

import ChipIcon from './ChipIcon';

const meta = {
  title: 'components/Chip/ChipIcon',
  component: ChipIcon,
} satisfies Meta<typeof ChipIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { name: 'eye' } };
