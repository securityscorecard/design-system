import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta, Story } from '@storybook/react/types-6-0';

import Dropdown from './Dropdown';
import { subactionsMock } from '../mocks/actions';
import { DropdownProps } from './Dropdown.types';

export default {
  title: 'components/Datatable/internalComponents/Dropdown',
  component: Dropdown,
  parameters: {
    docs: { disable: true },
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
  decorators: [
    (storyFn) => (
      <MemoryRouter>
        <div style={{ margin: '0 auto', width: '200px' }}>{storyFn()}</div>
      </MemoryRouter>
    ),
  ],
  argTypes: {
    actions: {
      table: {
        type: {
          summary: 'ActionKinds[]',
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
  }`,
        },
      },
    },
    defaultIsOpen: { control: 'boolean' },
  },
} as Meta;

export const Default: Story<DropdownProps> = (args) => (
  <Dropdown {...args}>Dropdown handler</Dropdown>
);
Default.args = {
  actions: subactionsMock,
};

export const OpenedOnInit: Story<DropdownProps> = (args) => (
  <Dropdown {...args}>Dropdown handler</Dropdown>
);
OpenedOnInit.args = {
  ...Default.args,
  defaultIsOpen: true,
};

export const WithCustomWidth: Story<DropdownProps> = (args) => (
  <Dropdown {...args}>Dropdown handler</Dropdown>
);
WithCustomWidth.args = {
  ...OpenedOnInit.args,
  paneWidth: 300,
};
