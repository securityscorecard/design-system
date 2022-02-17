import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta, Story } from '@storybook/react/types-6-0';

import DropdownMenu from './DropdownMenu';
import { subactionsMock } from '../../Datatable/mocks/actions';
import { DropdownMenuProps } from './DropdownMenu.types';
import { FlexContainer } from '../../FlexContainer';

export default {
  title: 'components/Datatable/internalComponents/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    docs: { disable: true },
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
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
    placement: {
      options: ['bottom', 'bottom-left', 'bottom-right'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Default: Story<DropdownMenuProps> = (args) => (
  <FlexContainer justifyContent="center">
    <DropdownMenu {...args}>Dropdown handler</DropdownMenu>
  </FlexContainer>
);
Default.args = {
  actions: subactionsMock,
};

export const OpenedOnInit: Story<DropdownMenuProps> = (args) => (
  <FlexContainer justifyContent="center">
    <DropdownMenu {...args}>Dropdown handler</DropdownMenu>
  </FlexContainer>
);
OpenedOnInit.args = {
  ...Default.args,
  defaultIsOpen: true,
};

export const WithCustomWidth: Story<DropdownMenuProps> = (args) => (
  <FlexContainer justifyContent="center">
    <DropdownMenu {...args}>Dropdown handler</DropdownMenu>
  </FlexContainer>
);
WithCustomWidth.args = {
  ...OpenedOnInit.args,
  paneWidth: 300,
};

export const Placements: Story<DropdownMenuProps> = (args) => (
  <>
    <FlexContainer justifyContent="center" margin={{ bottom: 5 }}>
      <DropdownMenu {...args} placement="bottom">
        Bottom
      </DropdownMenu>
    </FlexContainer>
    <FlexContainer justifyContent="flex-start" margin={{ bottom: 5 }}>
      <DropdownMenu {...args} placement="bottom-start">
        Left
      </DropdownMenu>
    </FlexContainer>
    <FlexContainer justifyContent="flex-end" margin={{ bottom: 5 }}>
      <DropdownMenu {...args} placement="bottom-end">
        Right
      </DropdownMenu>
    </FlexContainer>
  </>
);
Placements.args = {
  ...OpenedOnInit.args,
  paneWidth: 300,
};
