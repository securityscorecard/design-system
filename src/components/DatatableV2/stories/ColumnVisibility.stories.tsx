import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { VisibilityState } from '@tanstack/react-table';

import Datatable from '../Datatable';
import Template, { Story, columns } from './Template';

export default {
  title: 'components/DatatableV2/ColumnVisibility',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
} as ComponentMeta<typeof Datatable>;

export const ColumnVisibilityEnabled: Story = Template.bind({});
ColumnVisibilityEnabled.args = Template.args;

export const DisabledColumnVisibility: Story = Template.bind({});
DisabledColumnVisibility.args = { ...Template.args, enableHiding: false };

export const DisabledColumnVisibilityForColumn: Story = Template.bind({});
DisabledColumnVisibilityForColumn.args = {
  ...Template.args,
  columns: [
    ...columns,
    { accessorKey: 'country', header: 'Country', enableHiding: false },
  ],
};

export const InitialColumnVisibility: Story = Template.bind({});
InitialColumnVisibility.args = {
  ...Template.args,
  initialState: {
    columnVisibility: { organization_grade: false },
  },
};

export const ColumnVisibilityManagedState: Story = (args) => {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  return (
    <>
      <Datatable
        state={{ columnVisibility }}
        onColumnVisibilityChange={setColumnVisibility}
        {...args}
      />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(columnVisibility, null, 2)}</pre>
      </div>
    </>
  );
};
ColumnVisibilityManagedState.args = Template.args;
