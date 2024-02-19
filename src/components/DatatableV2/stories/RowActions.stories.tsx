import type { ComponentMeta } from '@storybook/react';
import type { Story } from './Template';

import { action } from '@storybook/addon-actions';

import Datatable from '../Datatable';
import Template from './Template';

export default {
  title: 'components/DatatableV2/RowActions',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
} as ComponentMeta<typeof Datatable>;

export const RowActionsEnabled: Story = Template.bind({});
RowActionsEnabled.args = {
  ...Template.args,
  enableRowActions: true,
  rowActions: [
    {
      iconName: 'eye-slash',
      label: 'Make private',
      onClick:
        ({ row, table }) =>
        (event) =>
          action('row action')({ row, table, event }),
    },
    {
      iconName: 'lock',
      label: 'Archive item',
      onClick:
        ({ row, table }) =>
        (event) =>
          action('row action')({ row, table, event }),
    },
    null,
    {
      iconName: 'ban',
      label: 'Remove',
      onClick:
        ({ row, table }) =>
        (event) =>
          action('row action')({ row, table, event }),
    },
  ],
};

export const DisabledRowActions: Story = Template.bind({});
DisabledRowActions.args = {
  ...Template.args,
  enableRowActions: false,
};

export const NoRowActions: Story = Template.bind({});
NoRowActions.args = {
  ...Template.args,
  enableRowActions: true,
};

export const SingleRowAction: Story = Template.bind({});
SingleRowAction.args = {
  ...Template.args,
  enableRowActions: true,
  rowActions: [
    {
      iconName: 'eye-slash',
      label: 'Make private',
      onClick:
        ({ row, table }) =>
        (event) =>
          action('row action')({ row, table, event }),
    },
  ],
};

export const ConditionallyDisabledRowActions: Story = Template.bind({});
ConditionallyDisabledRowActions.args = {
  ...Template.args,
  enableRowActions: true,
  rowActions: [
    {
      iconName: 'eye-slash',
      label: 'Make private',
      onClick:
        ({ row, table }) =>
        (event) =>
          action('row action')({ row, table, event }),
      isDisabled: ({ row }) => row.original.organization.grade === 'A',
    },
    {
      iconName: 'lock',
      label: 'Archive item',
      onClick:
        ({ row, table }) =>
        (event) =>
          action('row action')({ row, table, event }),
    },
    null,
    {
      iconName: 'ban',
      label: 'Remove',
      onClick:
        ({ row, table }) =>
        (event) =>
          action('row action')({ row, table, event }),
    },
  ],
};

export const ConditionallyDisabledSingleRowAction: Story = Template.bind({});
ConditionallyDisabledSingleRowAction.args = {
  ...Template.args,
  enableRowActions: true,
  rowActions: [
    {
      iconName: 'eye-slash',
      label: 'Make private',
      onClick:
        ({ row, table }) =>
        (event) =>
          action('row action')({ row, table, event }),
      isDisabled: ({ row }) => row.original.organization.grade === 'A',
    },
  ],
};
