import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { ColumnPinningState } from '@tanstack/react-table';

import Datatable from '../Datatable';
import Template, { Story, columns } from './Template';

export default {
  title: 'components/DatatableV2/ColumnPinning',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
} as ComponentMeta<typeof Datatable>;

export const ColumnPinningEnabled: Story = Template.bind({});
ColumnPinningEnabled.args = Template.args;

export const DisabledColumnPinning: Story = Template.bind({});
DisabledColumnPinning.args = { ...Template.args, enableColumnPinning: false };

export const DisabledColumnPinningForColumn: Story = Template.bind({});
DisabledColumnPinningForColumn.args = {
  ...Template.args,
  columns: [
    ...columns,
    { accessorKey: 'country', header: 'Country', enablePinning: false },
  ],
};

export const InitialColumnPinning: Story = Template.bind({});
InitialColumnPinning.args = {
  ...Template.args,
  initialState: {
    columnPinning: { left: ['score'] },
  },
  enableRowSelection: true,
};

export const ColumnPinningManagedState: Story = (args) => {
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
    left: ['score'],
  });

  return (
    <>
      <Datatable
        state={{ columnPinning }}
        enableRowSelection
        onColumnPinningChange={setColumnPinning}
        {...args}
      />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(columnPinning, null, 2)}</pre>
      </div>
    </>
  );
};
ColumnPinningManagedState.args = Template.args;
