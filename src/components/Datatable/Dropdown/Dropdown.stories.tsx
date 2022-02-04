import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta, Story } from '@storybook/react/types-6-0';

import Dropdown from './Dropdown';
import { subactionsMock } from '../mocks/actions';
import { DropdownProps } from './Dropdown.types';
import { FlexContainer } from '../../FlexContainer';

export default {
  title: 'components/Datatable/internalComponents/Dropdown',
  component: Dropdown,
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

export const Default: Story<DropdownProps> = (args) => (
  <FlexContainer justifyContent="center">
    <Dropdown {...args}>Dropdown handler</Dropdown>
  </FlexContainer>
);
Default.args = {
  actions: subactionsMock,
};

export const OpenedOnInit: Story<DropdownProps> = (args) => (
  <FlexContainer justifyContent="center">
    <Dropdown {...args}>Dropdown handler</Dropdown>
  </FlexContainer>
);
OpenedOnInit.args = {
  ...Default.args,
  defaultIsOpen: true,
};

export const WithCustomWidth: Story<DropdownProps> = (args) => (
  <FlexContainer justifyContent="center">
    <Dropdown {...args}>Dropdown handler</Dropdown>
  </FlexContainer>
);
WithCustomWidth.args = {
  ...OpenedOnInit.args,
  paneWidth: 300,
};

export const Placements: Story<DropdownProps> = (args) => (
  <>
    <FlexContainer justifyContent="center" margin={{ bottom: 5 }}>
      <Dropdown {...args} placement="bottom">
        Bottom
      </Dropdown>
    </FlexContainer>
    <FlexContainer justifyContent="flex-start" margin={{ bottom: 5 }}>
      <Dropdown {...args} placement="bottom-start">
        Left
      </Dropdown>
    </FlexContainer>
    <FlexContainer justifyContent="flex-end" margin={{ bottom: 5 }}>
      <Dropdown {...args} placement="bottom-end">
        Right
      </Dropdown>
    </FlexContainer>
  </>
);
Placements.args = {
  ...OpenedOnInit.args,
  paneWidth: 300,
};
