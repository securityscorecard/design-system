import React from 'react';
import { ComponentStory } from '@storybook/react';

import Datatable from '../Datatable';
import { DataSource, generateData } from '../mocks/data';
import { DatatableColumnDef } from '../Datatable.types';

export const columns: DatatableColumnDef<DataSource>[] = [
  { accessorKey: 'organization.name' },
  { accessorKey: 'organization.domain' },
  { accessorKey: 'organization.grade' },
];

export type Story = ComponentStory<typeof Datatable<DataSource>>;
const Template: Story = (args) => <Datatable {...args} />;
Template.args = {
  columns,
  data: generateData(50),
};

export default Template;
