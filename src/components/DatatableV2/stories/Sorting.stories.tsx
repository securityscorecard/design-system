import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { SortingState } from '@tanstack/react-table';

import Datatable from '../Datatable';
import Template, { Story, columns } from './Template';

export default {
  title: 'components/DatatableV2/Sorting',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
} as Meta<typeof Datatable>;

export const SortingEnabled: Story = Template.bind({});
SortingEnabled.args = Template.args;

export const DisabledSorting: Story = Template.bind({});
DisabledSorting.args = { ...Template.args, enableSorting: false };

export const EnabledMultiSorting: Story = Template.bind({});
EnabledMultiSorting.args = { ...Template.args, enableMultiSort: true };

export const DisabledSortingForColumn: Story = Template.bind({});
DisabledSortingForColumn.args = {
  ...Template.args,
  columns: [
    ...columns,
    { accessorKey: 'country', header: 'Country', enableSorting: false },
  ],
};

export const DisabledSortingRemoval: Story = Template.bind({});
DisabledSortingRemoval.args = {
  ...Template.args,
  enableSortingRemoval: false,
};

export const InitialSorting: Story = Template.bind({});
InitialSorting.args = {
  ...EnabledMultiSorting.args,
  initialState: {
    sorting: [
      { id: 'score', desc: true },
      { id: 'organization.name', desc: false },
    ],
  },
};
InitialSorting.parameters = {
  screenshot: { skip: false },
};

export const SortingManagedState: Story = (args) => {
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'organization.name', desc: true },
  ]);

  return (
    <>
      <Datatable
        state={{ sorting }}
        manualSorting
        onSortingChange={setSorting}
        {...args}
      />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(sorting, null, 2)}</pre>
      </div>
    </>
  );
};
SortingManagedState.args = Template.args;
