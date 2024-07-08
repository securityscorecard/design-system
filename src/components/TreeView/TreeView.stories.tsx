import React, { useState } from 'react';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TreeView from './TreeView';
import { Inline, Stack } from '../layout';
import { Text } from '../Text';
import { HexGrade } from '../HexGrade';
import { DataSource, makeData } from './mocks/data';

export default {
  title: 'components/TreeView',
  component: TreeView,
  args: {
    data: makeData(1, 2, 2),
    renderPrimaryContent: ({ name }) => <Text isBold>{name}</Text>,
  },
} as ComponentMeta<typeof TreeView<DataSource>>;

type Story = ComponentStoryObj<typeof TreeView<DataSource>>;

export const Playground: Story = {
  args: {
    renderPrimaryContent: ({ name, industry }) => (
      <Stack>
        <Text isBold>{name}</Text>
        <Text variant="secondary">{industry}</Text>
      </Stack>
    ),
    renderSecondaryContent: ({ domain, grade }) => (
      <Inline stretch="start" style={{ width: '30ch' }}>
        <Text variant="secondary">{domain}</Text>
        <Inline align="center" gap="sm">
          <HexGrade grade={grade} size={24} />
        </Inline>
      </Inline>
    ),
    onDragEnd: action('onDragEnd'),
    onRowClick: action('onRowClick'),
    rowActions: [
      {
        iconName: 'eye-slash',
        label: 'Make private',
        onClick:
          ({ row }) =>
          (event) =>
            action('row action')({ row, event }),
        isDisabled: ({ row }) => row.grade === 'D',
      },
      {
        iconName: 'times',
        label: 'Archive item',
        onClick:
          ({ row }) =>
          (event) =>
            action('row action')({ row, event }),
      },
      null,
      {
        iconName: 'ban',
        label: 'Remove',
        isDestructive: true,
        onClick:
          ({ row }) =>
          (event) =>
            action('row action')({ row, event }),
      },
    ],
  },
  render: function Render(args) {
    const [activeRow, setActiveRow] = useState('');

    return (
      <TreeView
        activeRowId={activeRow}
        onActiveRowIdChange={setActiveRow}
        {...args}
      />
    );
  },
  parameters: {
    screenshot: { skip: true },
  },
};

export const ContentRenderers: Story = {
  args: {
    renderPrimaryContent: Playground.args?.renderPrimaryContent,
    renderSecondaryContent: Playground.args?.renderSecondaryContent,
  },
};

export const DisabledSorting: Story = {
  args: {
    isSortable: false,
  },
};

export const DisabledCollapsing: Story = {
  args: {
    isCollapsible: false,
  },
};

export const DisabledSortingAndCollapsing: Story = {
  args: {
    isSortable: false,
    isCollapsible: false,
  },
};

export const RowActionsMenu: Story = {
  args: {
    rowActions: Playground.args?.rowActions,
  },
};

export const TwoRowActions: Story = {
  args: {
    rowActions: [
      {
        iconName: 'eye-slash',
        label: 'Make private',
        onClick:
          ({ row }) =>
          (event) =>
            action('row action')({ row, event }),
        isDisabled: ({ row }) => row.grade === 'D',
      },
      {
        iconName: 'times',
        label: 'Remove',
        isDestructive: true,
        onClick:
          ({ row }) =>
          (event) =>
            action('row action')({ row, event }),
      },
    ],
  },
};
export const RowOnClickEnabled: Story = {
  args: {
    onRowClick: action('onRowClick'),
  },
  render: function Render(args) {
    const [activeRow, setActiveRow] = useState('');

    return (
      <TreeView
        activeRowId={activeRow}
        onActiveRowIdChange={setActiveRow}
        {...args}
      />
    );
  },
};

export const CustomRowHeight: Story = {
  args: {
    ...ContentRenderers.args,
    rowHeight: 100,
  },
};
