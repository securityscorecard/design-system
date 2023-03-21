import type { Meta, Story } from '@storybook/react';
import type { BatchModuleProps } from './BatchModule.types';

import { useEffect } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { actionsMock } from '../mocks/actions';
import BatchModule from './BatchModule';
import { DatatableStore } from '../Datatable.store';
import { defaultTableConfig } from '../defaultConfigs';

export default {
  title: 'components/Datatable/internalComponents/BatchModule',
  component: BatchModule,
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
  parameters: {
    viewMode: 'story',
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

export const Playground: Story<BatchModuleProps> = (args) => (
  <BatchModule {...args} />
);
Playground.args = {
  actions: [],
  dataSize: 1070000,
  hasSelection: defaultTableConfig.hasSelection,
  hasOnlyPerPageSelection: defaultTableConfig.hasOnlyPerPageSelection,
  columns: { isButtonDisplayed: false },
};
Playground.parameters = {
  screenshot: { skip: true },
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
WithSelectedRows.args = Playground.args;

export const WithSelectedRowsAndExclusionLogic: Story<BatchModuleProps> = (
  args,
) => {
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
WithSelectedRowsAndExclusionLogic.args = {
  ...Playground.args,
  hasOnlyPerPageSelection: false,
};

export const WithBatchActions: Story<BatchModuleProps> = (args) => (
  <BatchModule {...args} />
);
WithBatchActions.args = {
  ...Playground.args,
  actions: actionsMock,
};

export const WithColumns: Story<BatchModuleProps> = (args) => (
  <BatchModule {...args} />
);
WithColumns.args = {
  ...Playground.args,
  columns: { isButtonDisplayed: true },
};
