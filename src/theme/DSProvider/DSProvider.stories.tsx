import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import DsProvider from './DSProvider';

const meta = {
  component: DsProvider,
  args: {
    children: <span>DSProvider</span>,
  },
  tags: ['!dev'],
} satisfies Meta<typeof DsProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    screenshot: {
      skip: true,
    },
  },
};
