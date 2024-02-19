import type { ColumnOrderState } from '@tanstack/react-table';
import type { ComponentMeta } from '@storybook/react';
import type { Story } from './Template';

import { useState } from 'react';

import Datatable from '../Datatable';
import Template, { columns } from './Template';

export default {
  title: 'components/DatatableV2/ColumnOrdering',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
} as ComponentMeta<typeof Datatable>;

export const ColumnOrderingEnabled: Story = Template.bind({});
ColumnOrderingEnabled.args = {
  ...Template.args,
};

export const DisabledColumnOrdering: Story = Template.bind({});
DisabledColumnOrdering.args = {
  ...Template.args,
  enableColumnOrdering: false,
};

export const DisabledColumnOrderingForColumn: Story = Template.bind({});
DisabledColumnOrderingForColumn.args = {
  ...Template.args,
  columns: [
    ...columns,
    { accessorKey: 'country', header: 'Country', enableOrdering: false },
  ],
};

export const ColumnOrderingWithPinnedColumns: Story = Template.bind({});
ColumnOrderingWithPinnedColumns.args = {
  ...Template.args,
  initialState: {
    columnPinning: { left: ['score'] },
  },
};

export const ColumnOrderingWithSelection: Story = Template.bind({});
ColumnOrderingWithSelection.args = {
  ...Template.args,
  enableRowSelection: true,
};

export const InitialColumnOrdering: Story = Template.bind({});
InitialColumnOrdering.args = {
  ...Template.args,
  enableRowSelection: true,
  initialState: {
    columnOrder: [
      'detectionMethod',
      'score',
      'organization.name',
      'organization.domain',
    ],
  },
};

/**
 * For managed state all columns has to be provided as a default value
 */
export const ColumnOrderingManagedState: Story = (args) => {
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([
    'detectionMethod',
    'score',
    'organization.name',
    'organization.domain',
  ]);

  return (
    <>
      <Datatable
        state={{ columnOrder }}
        onColumnOrderChange={setColumnOrder}
        {...args}
      />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(columnOrder, null, 2)}</pre>
      </div>
    </>
  );
};
ColumnOrderingManagedState.args = Template.args;
