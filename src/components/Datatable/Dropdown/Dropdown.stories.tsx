import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta, Story } from '@storybook/react/types-6-0';

import Dropdown from './Dropdown';
import { subactionsMock } from '../mocks/actions';
import { DropdownProps } from './Dropdown.types';

export default {
  title: 'components/Datatable/components/Dropdown',
  component: Dropdown,
  decorators: [
    (storyFn) => (
      <MemoryRouter>
        <div style={{ margin: '0 auto', width: '200px' }}>{storyFn()}</div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 150,
    },
  },
} as Meta;

export const Default: Story<DropdownProps> = (args) => (
  <Dropdown {...args}>Dropdown handler</Dropdown>
);
Default.args = {
  actions: subactionsMock,
  defaultIsOpen: true,
};
Default.argTypes = {
  actions: {
    table: {
      type: {
        summary: 'ActionKinds[]',
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
          `,
      },
    },
  },
  defaultIsOpen: { control: 'boolean' },
};
