import type { Meta, StoryObj } from '@storybook/react';

import ChipLabel from './ChipLabel';

const meta = {
  title: 'components/Chip/ChipLabel',
  component: ChipLabel,
} satisfies Meta<typeof ChipLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: 'companies' } };
export const Strong: Story = { args: { children: '325', isStrong: true } };
