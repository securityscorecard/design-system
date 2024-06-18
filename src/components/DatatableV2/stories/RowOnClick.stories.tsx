import React, { useCallback, useEffect, useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Drawer } from '../../Drawer';
import Datatable from '../Datatable';
import Template, { Story } from './Template';
import { DataSource } from '../mocks/data';
import { Stack } from '../../layout';
import { DatatableInstance, DatatableRow } from '../Datatable.types';

export default {
  title: 'components/DatatableV2/RowOnClick',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
} as ComponentMeta<typeof Datatable>;

export const RowOnClickEnabled: Story = Template.bind({});
RowOnClickEnabled.args = {
  ...Template.args,
  onRowClick: ({ row, table }) => action('row action')({ row, table }),
  enableRowActions: true,
  rowActions: [
    {
      iconName: 'eye-slash',
      label: 'Make private',
      onClick:
        ({ row, table }) =>
        (event) =>
          action('rowsAction button')({ row, table, event }),
    },
  ],
};

export const RowOnClickDisabled: Story = Template.bind({});
RowOnClickDisabled.args = {
  ...Template.args,
};

export const ActiveRow: Story = Template.bind({});
ActiveRow.args = {
  ...RowOnClickEnabled.args,
  initialState: {
    ...RowOnClickEnabled.args.initialState,
    activeRowId: 'e23968c3-3f19-44b2-aee9-c4a1d7c326ee',
  },
};
ActiveRow.parameters = {
  screenshot: { skip: false },
};

export const ActiveRowManagedState: Story = (args) => {
  const [activeRowId, setActiveRowId] = useState(
    'e23968c3-3f19-44b2-aee9-c4a1d7c326ee',
  );

  return (
    <>
      <Datatable
        state={{ activeRowId }}
        onActiveRowIdChange={setActiveRowId}
        {...args}
      />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(activeRowId, null, 2)}</pre>
      </div>
    </>
  );
};
ActiveRowManagedState.args = RowOnClickEnabled.args;

const useDatatableKeyboardNav = ({
  row,
  table,
}: {
  row: DatatableRow<DataSource>;
  table: DatatableInstance<DataSource>;
}) => {
  const { flatRows = [] } = table.getSortedRowModel?.() ?? {};
  const [rowIndex, setRowIndex] = useState(
    flatRows.findIndex?.((flatRow) => flatRow.id === row.id),
  );
  useEffect(() => {
    setRowIndex(flatRows?.findIndex?.((flatRow) => flatRow.id === row.id));
  }, [flatRows, row.id]);

  useEffect(() => {
    const keyboardNav = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        setRowIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
        table.setActiveRowId(flatRows[rowIndex - 1 >= 0 ? rowIndex - 1 : 0].id);
      }
      if (e.key === 'ArrowDown') {
        setRowIndex((prev) =>
          prev + 1 >= flatRows.length ? flatRows.length - 1 : prev + 1,
        );
        table.setActiveRowId(
          flatRows[
            rowIndex < flatRows.length - 1 ? rowIndex + 1 : flatRows.length - 1
          ].id,
        );
      }
    };

    document.addEventListener('keyup', keyboardNav);

    return () => {
      document.removeEventListener('keyup', keyboardNav);
    };
  }, [flatRows, flatRows.length, table, rowIndex]);

  return { rows: flatRows, rowIndex };
};
const renderKeyValue = ([key, value]) => {
  if (typeof value === 'object') {
    return (
      <Stack gap="sm">
        <div>{key}</div>
        {Object.entries(value).map(renderKeyValue)}
      </Stack>
    );
  }

  return (
    <div key={key}>
      {key}: {value.toString()}
    </div>
  );
};
const DataDrawer = ({
  row,
  table,
  onClose,
}: {
  row: DatatableRow<DataSource>;
  table: DatatableInstance<DataSource>;
  onClose: () => void;
}) => {
  const { rows, rowIndex } = useDatatableKeyboardNav({ row, table });

  return (
    <Drawer
      hasBackdrop={false}
      size="md"
      title={rows[rowIndex].original.organization.name}
      onClose={onClose}
    >
      <Stack gap="sm">
        {Object.entries(rows[rowIndex].original).map(renderKeyValue)}
      </Stack>
    </Drawer>
  );
};

export const OpenDrawerOnRowClick: Story = (args) => {
  const [activeRowId, setActiveRowId] = useState('');
  const [drawerData, setDrawerData] = useState<{
    row: DatatableRow<DataSource>;
    table: DatatableInstance<DataSource>;
  } | null>(null);

  const handleDrawerClose = useCallback(() => {
    setActiveRowId('');
    setDrawerData(null);
  }, [setDrawerData, setActiveRowId]);

  return (
    <>
      <Datatable
        state={{ activeRowId }}
        onActiveRowIdChange={setActiveRowId}
        onRowClick={(props) => {
          if (props.row.id === activeRowId) {
            setDrawerData(null);
          } else {
            setDrawerData(props);
          }
        }}
        {...args}
      />
      {drawerData !== null && (
        <DataDrawer
          row={drawerData.row}
          table={drawerData.table}
          onClose={handleDrawerClose}
        />
      )}
    </>
  );
};
OpenDrawerOnRowClick.args = Template.args;
