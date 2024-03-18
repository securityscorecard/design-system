import type { ComponentMeta } from '@storybook/react';
import type { SortingState } from '@tanstack/react-table';
import type { Story } from './Template';

import { useState } from 'react';

import Datatable from '../Datatable';
import Template, { columns } from './Template';

export default {
  title: 'components/DatatableV2/Sorting',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
} as ComponentMeta<typeof Datatable>;

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
