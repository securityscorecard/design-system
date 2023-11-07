import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { SortingState } from '@tanstack/react-table';

import Datatable from '../Datatable';
import Template, { Story, columns } from './Template';

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

export const DisabledMultiSorting: Story = Template.bind({});
DisabledMultiSorting.args = { ...Template.args, enableMultiSort: false };

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
  ...Template.args,
  initialState: {
    sorting: [
      { id: 'organization_grade', desc: true },
      { id: 'organization_name', desc: false },
    ],
  },
};

export const SortingManagedState: Story = (args) => {
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'organization_name', desc: true },
  ]);

  return (
    <>
      <Datatable state={{ sorting }} onSortingChange={setSorting} {...args} />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(sorting, null, 2)}</pre>
      </div>
    </>
  );
};
SortingManagedState.args = Template.args;
