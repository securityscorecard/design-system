import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router-dom';

import { actionsMock } from '../mocks/actions';
import { ElementCounter } from './ElementCounter';
import { BatchActions } from './BatchActions';
import BatchModule from './BatchModule';
import { BatchModuleProps } from './BatchModule.types';
import DatatableContext from '../DatatableContext';

export default {
  title: 'components/Datatable/components/BatchModule',
  component: BatchModule,
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
  subcomponents: { ElementCounter, BatchActions },
} as Meta;

export const playground: Story<BatchModuleProps> = (args) => (
  <DatatableContext.Provider value={{ totalLength: 1070000 }}>
    <BatchModule {...args} />
  </DatatableContext.Provider>
);
playground.args = {
  actions: actionsMock,
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
  <DatatableContext.Provider value={{ totalLength: 1070000 }}>
    <BatchModule actions={actionsMock} />
  </DatatableContext.Provider>
);

export const Selected: Story = () => (
  <DatatableContext.Provider
    value={{ totalLength: 1070000, selectedLength: 31 }}
  >
    <BatchModule actions={actionsMock} />
  </DatatableContext.Provider>
);
