import { Meta, StoryObj } from '@storybook/react';
import { faker } from '@faker-js/faker';
import { action } from '@storybook/addon-actions';
import { useEffect, useState } from 'react';

import ListView from './ListView';
import { Inline } from '../layout';
import { Text } from '../Text';
import Button from '../ButtonV2/Button';

type FakeData = {
  id: string;
  name: string;
  email: string;
};

faker.seed(42);
const generateData = (): FakeData[] => {
  const data = [];

  for (let i = 0; i < 50; i += 1) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    data.push({
      id: faker.string.uuid(),
      name: `${firstName} ${lastName}`,
      email: faker.internet.email({
        firstName: firstName.toLowerCase(),
        lastName: lastName.toLowerCase(),
        allowSpecialCharacters: false,
      }),
    });
  }

  return data;
};
const fakeData = generateData();

/**
 * ```jsx
 * import { ListView } from '@securityscorecard/design-system';
 *
 * <ListView data={[...]} renderListViewRow={({row}) => (...)} />
 * ```
 */
const meta = {
  component: ListView,
  argTypes: {
    data: {
      control: { disable: true },
    },
  },
  args: {
    data: fakeData,
    renderListViewRow: ({ row }) => {
      return (
        <Inline align="baseline" data-id={row.id} gap="sm">
          <Text size="lg">{row.name}</Text>
          <Text variant="subtle">{row.email}</Text>
        </Inline>
      );
    },
    getRowId: (row) => row.id,
  },
  tags: ['new'],
} satisfies Meta<typeof ListView<FakeData>>;

export default meta;

type Story = StoryObj<typeof ListView<FakeData>>;

export const Playground: Story = {
  parameters: {
    screenshot: { skip: true },
  },
};

/* --- PAGINATION --- */
export const PaginationEnabled: Story = {
  args: { enablePagination: true },
};
export const DisabledPagination: Story = {
  args: { enablePagination: false },
};
export const EnabledRowsPerPage: Story = {
  args: { ...PaginationEnabled.args, enableRowsPerPage: true },
};
export const CustomRowsPerPageOptions: Story = {
  args: { ...EnabledRowsPerPage.args, rowsPerPageOptions: [5, 10, 15] },
  parameters: {
    screenshot: { skip: true },
  },
};
export const InitialPagination: Story = {
  args: {
    ...PaginationEnabled.args,
    initialState: {
      pagination: { pageSize: 10, pageIndex: 1 },
    },
  },
};

/* --- SELECTION --- */
export const SelectionEnabled: Story = {
  args: { enableRowSelection: true },
};
export const DisabledSelection: Story = {
  args: { enableRowSelection: false },
};
export const SingleRowSelection: Story = {
  args: { ...SelectionEnabled.args, enableMultiRowSelection: false },
};
export const ConditionallyEnabledSelection: Story = {
  args: {
    enableRowSelection: (row) => row.original.email.endsWith('@hotmail.com'),
  },
};
export const InitialSelection: Story = {
  args: {
    ...SelectionEnabled.args,
    initialState: {
      rowSelection: {
        '6204f537-1c93-468f-9970-d9a2710fff9c': true,
        'a197d02e-642a-4c46-a838-920fdc7f6ee9': true,
        'f5d6b48d-95f4-4984-824c-210f6c63400d': true,
      },
    },
  },
};
export const RowSelectionActions: Story = {
  args: {
    ...InitialSelection.args,
    renderRowSelectionActions: ({ selectedRows, table }) => {
      return (
        <Button
          iconStart={{ name: 'plus' }}
          variant="subtle"
          onClick={() => {
            action('selectedRows')(selectedRows);
            table.toggleAllRowsSelected(true);
          }}
        >
          Select all
        </Button>
      );
    },
  },
};

/* --- ROW ACTIONS --- */
export const RowActionsEnabled: Story = {
  args: {
    rowActions: [
      {
        iconName: 'ban',
        label: 'Remove',
        onClick:
          ({ row, table }) =>
          (event) =>
            action('row action')({ row, table, event }),
      },
    ],
  },
};
export const MultipleRowActions: Story = {
  args: {
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
  },
};
export const ConditionallyDisabledRowAction: Story = {
  args: {
    rowActions: [
      {
        iconName: 'ban',
        label: 'Remove',
        onClick:
          ({ row, table }) =>
          (event) =>
            action('row action')({ row, table, event }),
        isDisabled: ({ row }) => row.original.email.endsWith('@hotmail.com'),
      },
    ],
  },
};

/* --- ROW ONCLICK --- */
export const RowOnClickEnabled: Story = {
  args: {
    onRowClick: action('onRowClick'),
  },
};
export const InitialActiveRow: Story = {
  args: {
    ...RowOnClickEnabled.args,
    initialState: {
      activeRowId: '6204f537-1c93-468f-9970-d9a2710fff9c',
    },
  },
};

/* --- LOADING --- */
export const Loading: Story = {
  args: {
    enableRowSelection: true,
    state: {
      isLoading: true,
    },
  },
};

/* --- MANAGED STATE --- */
type Result = { entries: FakeData[]; rowCount: number };
const fetchData = (pageIndex: number, pageSize: number): Promise<Result> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        entries: fakeData.slice(
          pageIndex * pageSize,
          (pageIndex + 1) * pageSize,
        ),
        rowCount: fakeData.length,
      });
    }, 1500);
  });

export const ManagedState: Story = {
  render: function Render(args) {
    const [activeRowId, setActiveRowId] = useState('');
    const [pagination, setPagination] = useState({
      pageSize: 10,
      pageIndex: 0,
    });
    const [rowSelection, setRowSelection] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Result | null>(null);

    useEffect(() => {
      setIsLoading(true);
      fetchData(pagination.pageIndex, pagination.pageSize).then((result) => {
        setData(result);
        setIsLoading(false);
      });
    }, [pagination.pageIndex, pagination.pageSize]);

    return (
      <>
        <ListView
          {...args}
          data={data?.entries ?? []}
          rowCount={data?.rowCount}
          state={{
            activeRowId,
            pagination,
            rowSelection,
            isLoading,
          }}
          manualPagination
          onActiveRowIdChange={setActiveRowId}
          onPaginationChange={setPagination}
          onRowSelectionChange={setRowSelection}
        />
        <div>
          <strong>Debug:</strong>
          <pre>
            {JSON.stringify(
              {
                activeRowId,
                pagination,
                rowSelection,
                isLoading,
              },
              null,
              2,
            )}
          </pre>
        </div>
      </>
    );
  },
  args: {
    onRowClick: action('onRowClick'),
    enableRowSelection: true,
  },
  parameters: {
    screenshot: { skip: true },
  },
};
