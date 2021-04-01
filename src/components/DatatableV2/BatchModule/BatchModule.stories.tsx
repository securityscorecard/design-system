import React, { useEffect } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router-dom';

import { actionsMock } from '../mocks/actions';
import BatchModule from './BatchModule';
import { BatchModuleProps } from './BatchModule.types';
import { DatatableStore } from '../Datatable.store';
import { defaultTableConfig } from '../defaultConfigs';

export default {
  title: 'components/DatatableV2/internalComponents/BatchModule',
  component: BatchModule,
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
  parameters: {
    viewMode: 'story',
    docs: { disable: true },
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
  argTypes: {
    actions: {
      table: {
        defaultValue: { summary: '[]' },
        type: {
          summary: 'Action[]',
          detail: `| {
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
  }`,
        },
      },
    },
    shouldShowSelectionDropdown: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: defaultTableConfig.hasSelection } },
    },
  },
} as Meta;

export const Default: Story<BatchModuleProps> = (args) => (
  <BatchModule {...args} />
);
Default.args = {
  actions: [],
  dataSize: 1070000,
  shouldShowSelectionDropdown: defaultTableConfig.hasSelection,
};

export const WithSelectedRows: Story<BatchModuleProps> = (args) => {
  useEffect(() => {
    DatatableStore.update((s) => {
      s.selectedIds = ['a', 'b', 'c', 'd', 'e', 'f'];
    });

    return () => {
      DatatableStore.update((s) => {
        s.selectedIds = [];
      });
    };
  }, []);
  return <BatchModule {...args} />;
};
WithSelectedRows.args = Default.args;

export const WithBatchActions: Story<BatchModuleProps> = (args) => (
  <BatchModule {...args} />
);
WithBatchActions.args = {
  ...Default.args,
  actions: actionsMock,
};
