import { ColumnOrderState } from '@tanstack/react-table';
import React, { ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import Datatable from '../Datatable';
import Template, { Story } from './Template';

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
InitialColumnOrdering.parameters = {
  screenshot: { skip: false },
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
