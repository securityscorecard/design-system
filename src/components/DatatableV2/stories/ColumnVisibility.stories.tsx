import type { ComponentMeta } from '@storybook/react';
import type { VisibilityState } from '@tanstack/react-table';
import type { Story } from './Template';

import { useState } from 'react';

import Datatable from '../Datatable';
import Template, { columns } from './Template';

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
    columnVisibility: { score: false },
  },
};

export const ColumnVisibilityManagedState: Story = (args) => {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    score: false,
  });

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
