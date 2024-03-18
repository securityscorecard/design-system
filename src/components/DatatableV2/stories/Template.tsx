import type { ComponentStory } from '@storybook/react';
import type { DataSource } from '../mocks/data';
import type { DatatableColumnDef } from '../Datatable.types';

import Datatable from '../Datatable';
import { generateData } from '../mocks/data';
import { Pill } from '../../Pill';
import { Cluster } from '../../layout';

export const columns: DatatableColumnDef<DataSource>[] = [
  { accessorKey: 'organization.name', header: 'Name', enableHiding: true },
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
  data: generateData(25),
  enablePersistentState: false,
  id: 'datatable_template',
  initialState: {
    pagination: { pageSize: 5 },
  },
  rowsPerPageOptions: [5, 10, 25, 50, 100],
};

export default Template;
