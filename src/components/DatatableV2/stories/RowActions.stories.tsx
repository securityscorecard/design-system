import { ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Datatable from '../Datatable';
import Template, { Story } from './Template';

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
      iconName: 'times',
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
      isDestructive: true,
      onClick:
        ({ row, table }) =>
        (event) =>
          action('row action')({ row, table, event }),
    },
  ],
};
RowActionsEnabled.parameters = {
  screenshot: { skip: false },
};

export const DisabledRowActions: Story = Template.bind({});
DisabledRowActions.args = {
  ...Template.args,
  enableRowActions: false,
};
DisabledRowActions.parameters = {
  screenshot: { skip: false },
};

export const NoRowActions: Story = Template.bind({});
NoRowActions.args = {
  ...Template.args,
  enableRowActions: true,
};
NoRowActions.parameters = {
  screenshot: { skip: false },
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
SingleRowAction.parameters = {
  screenshot: { skip: false },
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
      isDisabled: ({ row }) => row.original.organization.grade === 'D',
    },
    {
      iconName: 'times',
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
      isDestructive: true,
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
      isDisabled: ({ row }) => row.original.organization.grade === 'D',
    },
  ],
};
ConditionallyDisabledSingleRowAction.parameters = {
  screenshot: { skip: false },
};
