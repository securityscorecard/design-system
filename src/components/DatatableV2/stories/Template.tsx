import React from 'react';
import { ComponentStory } from '@storybook/react';
import { ColumnDef } from '@tanstack/react-table';

import Datatable from '../Datatable';
import dataSource from '../mocks/data.json';
import { DataSource } from '../mocks/data.types';

export const columns: ColumnDef<DataSource>[] = [
  { accessorKey: 'organization.name' },
  { accessorKey: 'organization.domain' },
  { accessorKey: 'organization.grade' },
];

export type Story = ComponentStory<typeof Datatable<DataSource>>;
const Template: Story = (args) => <Datatable {...args} />;
Template.args = {
  columns,
  data: dataSource as DataSource[],
};

export default Template;
