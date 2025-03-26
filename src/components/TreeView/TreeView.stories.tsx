import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TreeView from './TreeView';
import { Inline, Stack } from '../layout';
import { Text } from '../Text';
import { HexGrade } from '../HexGrade';
import { DataSource, makeData } from './mocks/data';
import Button from '../ButtonV2/Button';

const meta = {
  title: 'components/TreeView',
  component: TreeView,
  args: {
    data: makeData(1, 2, 2),
    renderPrimaryContent: ({ name }) => <Text isBold>{name}</Text>,
  },
} satisfies Meta<typeof TreeView<DataSource>>;

export default meta;

type Story = StoryObj<typeof TreeView<DataSource>>;

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

export const EnabledSelection: Story = {
  args: {
    isSelectable: true,
    onSelectionChange: action('select'),
  },
  tags: ['new'],
};
export const WithSelectedRows: Story = {
  args: {
    ...EnabledSelection.args,
    defaultSelectedIds: [
      '07130ea7-598b-4e23-b968-c33f194b2ee9',
      'a1edd975-1154-4a5a-8b9a-4e8761fbdcb8',
      'ee85c1e5-5e14-43a6-90d5-d40288673b14',
      'f5d6b48d-95f4-4984-824c-210f6c63400d',
    ],
  },
  tags: ['new'],
};
export const WithRecursiveSelection: Story = {
  args: {
    ...EnabledSelection.args,
    hasRecursiveSelection: true,
    defaultSelectedIds: [
      '07130ea7-598b-4e23-b968-c33f194b2ee9',
      'a1edd975-1154-4a5a-8b9a-4e8761fbdcb8',
      'ee85c1e5-5e14-43a6-90d5-d40288673b14',
      'f5d6b48d-95f4-4984-824c-210f6c63400d',
    ],
  },
  tags: ['new'],
};
export const WithSelectionActions: Story = {
  args: {
    ...EnabledSelection.args,
    renderRowSelectionActions: ({ selectedIds }) => (
      <Button
        variant="ghost"
        onClick={() => action('selection action')(selectedIds)}
      >
        Remove ({selectedIds.length.toLocaleString()})
      </Button>
    ),
    defaultSelectedIds: [
      '07130ea7-598b-4e23-b968-c33f194b2ee9',
      'a1edd975-1154-4a5a-8b9a-4e8761fbdcb8',
      'ee85c1e5-5e14-43a6-90d5-d40288673b14',
      'f5d6b48d-95f4-4984-824c-210f6c63400d',
    ],
  },
  tags: ['new'],
};
export const ControlledSelection: Story = {
  args: {
    isSelectable: true,
  },
  render: function Render(args) {
    const [selected, setSelected] = useState([]);

    return (
      <TreeView
        {...args}
        selectedIds={selected}
        onSelectionChange={(ids) => {
          setSelected(ids);
          action('select')(ids);
        }}
      />
    );
  },
  tags: ['new'],
  parameters: {
    screenshot: { skip: true },
  },
};

export const RowActionsMenu: Story = {
  args: {
    rowActions: Playground.args?.rowActions,
  },
};

export const SingleRowAction: Story = {
  args: {
    rowActions: [
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
    rowActions: Playground.args?.rowActions,
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
