import React from 'react';
import { ComponentStory } from '@storybook/react';

import Datatable from '../Datatable';
import { DataSource, generateData } from '../mocks/data';
import { DatatableColumnDef } from '../Datatable.types';
import { Pill } from '../../Pill';
import { Cluster } from '../../layout';

export const columns: DatatableColumnDef<DataSource>[] = [
  { accessorKey: 'organization.name', header: 'Name' },
  {
    accessorKey: 'organization.domain',
    header: 'Domain',
    headerComponent: (props) => {
      return <span>🔗 {props.column.columnDef.header}</span>;
    },
  },
  {
    accessorFn: (row) => `${row.organization.grade} ${row.organization.score}`,
    header: 'Score and grade',
    id: 'score',
  },
  {
    accessorKey: 'detectionMethod',
    header: 'Detection method',
    cell: (props) => {
      return (
        <Cluster gap="xs">
          {props.cell.getValue<DataSource['detectionMethod']>().map((val) => (
            <Pill key={val} label={val} />
          ))}
        </Cluster>
      );
    },
  },
];

export type Story = ComponentStory<typeof Datatable<DataSource>>;
const Template: Story = (args) => <Datatable {...args} />;
Template.args = {
  columns,
  data: generateData(50),
};

export default Template;
