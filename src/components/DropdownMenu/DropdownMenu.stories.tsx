import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta, Story } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import DropdownMenu from '../_internal/BaseDropdownMenu/DropdownMenu';
import { subactionsMock } from '../Datatable/mocks/actions';
import { DropdownMenuProps } from '../_internal/BaseDropdownMenu/DropdownMenu.types';
import { Inline, Padbox } from '../layout';
import { pxToRem } from '../../utils';
import { ActionKinds } from '../../types/action.types';
import { Button } from '../Button';

const Wrapper = styled(Padbox)`
  margin-bottom: ${pxToRem(100)};
`;

export default {
  title: 'components/DropdownMenu',
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
  <Inline justify="center">
    <DropdownMenu {...args}>
      <Button>Handler</Button>
    </DropdownMenu>
  </Inline>
);
Default.args = {
  actions: subactionsMock as unknown as ActionKinds<React.MouseEvent[]>[],
};
Default.parameters = {
  screenshot: { skip: true },
};

export const OpenedOnInit: Story<DropdownMenuProps> = (args) => (
  <Inline justify="center">
    <DropdownMenu {...args}>Dropdown handler</DropdownMenu>
  </Inline>
);
OpenedOnInit.args = {
  ...Default.args,
  defaultIsOpen: true,
};

export const WithCustomWidth: Story<DropdownMenuProps> = (args) => (
  <Inline justify="center">
    <DropdownMenu {...args}>Dropdown handler</DropdownMenu>
  </Inline>
);
WithCustomWidth.args = {
  ...OpenedOnInit.args,
  paneWidth: 300,
};

export const Placements: Story<DropdownMenuProps> = (args) => (
  <>
    <Wrapper>
      <Inline justify="center">
        <DropdownMenu {...args} placement="bottom">
          Bottom
        </DropdownMenu>
      </Inline>
    </Wrapper>
    <Wrapper>
      <Inline justify="flex-start">
        <DropdownMenu {...args} placement="bottom-start">
          Left
        </DropdownMenu>
      </Inline>
    </Wrapper>
    <Wrapper>
      <Inline justify="flex-end">
        <DropdownMenu {...args} placement="bottom-end">
          Right
        </DropdownMenu>
      </Inline>
    </Wrapper>
  </>
);
Placements.args = {
  ...OpenedOnInit.args,
  paneWidth: 300,
};
