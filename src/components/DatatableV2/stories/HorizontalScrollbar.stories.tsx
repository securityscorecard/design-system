import type { Meta, StoryObj } from '@storybook/react';

import Datatable from '../Datatable';

const meta: Meta<typeof Datatable> = {
  title: 'DatatableV2/HorizontalScrollbar',
  component: Datatable,
  parameters: {
    docs: {
      description: {
        component:
          'Demonstrates the keyboard-accessible horizontal scrollbar functionality.',
      },
    },
  },
  argTypes: {
    id: { control: 'text' },
    enableRowSelection: { control: 'boolean' },
    enableSorting: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Datatable>;

// Create columns that will definitely cause horizontal scrolling
const wideColumns = [
  { accessorKey: 'name', header: 'Name', size: 300 },
  { accessorKey: 'surname', header: 'Surname', size: 300 },
  { accessorKey: 'color', header: 'Color', size: 300 },
  { accessorKey: 'extra1', header: 'Extra Column 1', size: 300 },
  { accessorKey: 'extra2', header: 'Extra Column 2', size: 300 },
  { accessorKey: 'extra3', header: 'Extra Column 3', size: 300 },
  { accessorKey: 'extra4', header: 'Extra Column 4', size: 300 },
  { accessorKey: 'extra5', header: 'Extra Column 5', size: 300 },
];

const wideData = [
  {
    name: 'John',
    surname: 'Doe',
    color: 'red',
    extra1: 'data1',
    extra2: 'data2',
    extra3: 'data3',
    extra4: 'data4',
    extra5: 'data5',
  },
  {
    name: 'Jane',
    surname: 'Smith',
    color: 'blue',
    extra1: 'data6',
    extra2: 'data7',
    extra3: 'data8',
    extra4: 'data9',
    extra5: 'data10',
  },
  {
    name: 'Bob',
    surname: 'Johnson',
    color: 'green',
    extra1: 'data11',
    extra2: 'data12',
    extra3: 'data13',
    extra4: 'data14',
    extra5: 'data15',
  },
  {
    name: 'Alice',
    surname: 'Brown',
    color: 'yellow',
    extra1: 'data16',
    extra2: 'data17',
    extra3: 'data18',
    extra4: 'data19',
    extra5: 'data20',
  },
  {
    name: 'Charlie',
    surname: 'Wilson',
    color: 'purple',
    extra1: 'data21',
    extra2: 'data22',
    extra3: 'data23',
    extra4: 'data24',
    extra5: 'data25',
  },
];

export const WithHorizontalScrollbar: Story = {
  args: {
    id: 'horizontal-scrollbar-demo',
    data: wideData,
    columns: wideColumns,
    enableRowSelection: false,
    enableSorting: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'This table has wide columns that require horizontal scrolling. Use Tab to navigate to the horizontal scrollbar, then use arrow keys to scroll left/right, Home to scroll to start, End to scroll to end, and Page Up/Down for larger scroll increments.',
      },
    },
  },
};

export const WithoutHorizontalScrollbar: Story = {
  args: {
    id: 'no-horizontal-scrollbar-demo',
    data: [
      { name: 'John', surname: 'Doe', color: 'red' },
      { name: 'Jane', surname: 'Smith', color: 'blue' },
      { name: 'Bob', surname: 'Johnson', color: 'green' },
    ],
    columns: [
      { accessorKey: 'name', header: 'Name' },
      { accessorKey: 'surname', header: 'Surname' },
      { accessorKey: 'color', header: 'Color' },
    ],
    enableRowSelection: false,
    enableSorting: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'This table has narrow columns that fit within the viewport, so no horizontal scrollbar is needed.',
      },
    },
  },
};
