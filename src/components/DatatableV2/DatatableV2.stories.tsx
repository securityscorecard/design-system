import type { Meta, StoryObj } from '@storybook/react';

import DatatableV2 from './DatatableV2';
import T from './index';

const meta = {
  component: T,
} satisfies Meta<typeof T>;

export default meta;

type Story = StoryObj<typeof T>;

export const Table: Story = {
  render: (args) => <T {...args} />,
};

export const POC: StoryObj<typeof DatatableV2> = {
  render: (args) => {
    return <DatatableV2 {...args} />;
  },
};
