import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router-dom';

import BatchActions from './BatchActions';
import { actionsMock } from '../../mocks/actions';
import { BatchActionsProps } from './BatchActions.types';

export default {
  title: 'components/DatatableV2/internalComponents/BatchModule/BatchActions',
  component: BatchActions,
  parameters: {
    viewMode: 'story',
    docs: { disable: true },
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
} as Meta;

export const Menu: Story<BatchActionsProps> = (args) => (
  <BatchActions {...args} />
);
Menu.args = { actions: actionsMock };
Menu.argTypes = {
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
