import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router-dom';

import { actionsMock } from '../mocks/actions';
import BatchModule from './BatchModule';
import { BatchModuleProps } from './BatchModule.types';

export default {
  title: 'components/Datatable/components/BatchModule',
  component: BatchModule,
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
} as Meta;

export const playground: Story<BatchModuleProps> = (args) => (
  <BatchModule {...args} />
);
playground.args = {
  actions: actionsMock,
  totalLength: 1070000,
};
playground.argTypes = {
  actions: {
    table: {
      type: {
        summary: 'Action[]',
        detail: `
| {
    label: string;
    name: string;
    onClick: () => void;
  }
| {
    label: string;
    name: string;
    to: To;
    onClick?: () => void;
    href?: never;
    subActions?: never;
  }
| {
    label: string;
    name: string;
    href: string;
    onClick?: () => void;
    to?: never;
    subActions?: never;
  }
| {
    label: string;
    name: string;
    subActions: ActionKinds[];
    onClick?: () => void;
    href?: never;
    to?: never;
  }
        `,
      },
    },
  },
};

export const Default: Story = () => (
  <BatchModule actions={actionsMock} totalLength={1070000} />
);

export const Filtered: Story = () => (
  <BatchModule
    actions={actionsMock}
    filteredLength={52813}
    totalLength={1070000}
  />
);

export const Selected: Story = () => (
  <BatchModule
    actions={actionsMock}
    filteredLength={52813}
    selectedLength={31}
    totalLength={1070000}
  />
);
