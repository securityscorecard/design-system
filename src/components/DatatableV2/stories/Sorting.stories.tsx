import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ColumnDef, SortingState } from '@tanstack/react-table';

import Datatable from '../Datatable';
import dataSource from '../mocks/data.json';
import { DataSource } from '../mocks/data.types';

export default {
  title: 'components/DatatableV2/Sorting',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
} as ComponentMeta<typeof Datatable>;

const columns: ColumnDef<DataSource>[] = [
  { accessorKey: 'organization.name' },
  { accessorKey: 'organization.domain' },
  { accessorKey: 'organization.grade' },
];

type Story = ComponentStory<typeof Datatable<DataSource>>;
const Template: Story = (args) => <Datatable {...args} />;
Template.args = {
  columns,
  data: dataSource as DataSource[],
};

export const SortingEnabled: Story = Template.bind({});
SortingEnabled.args = Template.args;

export const DisabledSorting: Story = Template.bind({});
DisabledSorting.args = { ...Template.args, hasSorting: false };

export const DisabledMultiSorting: Story = Template.bind({});
DisabledMultiSorting.args = { ...Template.args, hasMultiSort: false };

export const DisabledSortingForColumn: Story = Template.bind({});
DisabledSortingForColumn.args = {
  ...Template.args,
  columns: [...columns, { accessorKey: 'country', enableSorting: false }],
};

export const DisabledSortingRemoval: Story = Template.bind({});
DisabledSortingRemoval.args = {
  ...Template.args,
  hasSortingRemoval: false,
};

export const SortingManagedState: Story = (args) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  return (
    <Datatable state={{ sorting }} onSortingChange={setSorting} {...args} />
  );
};
SortingManagedState.args = Template.args;
