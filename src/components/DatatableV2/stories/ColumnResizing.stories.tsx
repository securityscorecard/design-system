import { useRef, useState } from 'react';
import { Meta } from '@storybook/react';
import { ColumnSizingState, OnChangeFn } from '@tanstack/react-table';

import Datatable from '../Datatable';
import Template, { Story, columns } from './Template';
import argTypes from './argTypes';

export default {
  title: 'components/DatatableV2/ColumnResizing',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
  argTypes,
} as Meta<typeof Datatable>;

export const ColumnResizingEnabled: Story = Template.bind({});
ColumnResizingEnabled.args = Template.args;

export const DisabledColumnResizing: Story = Template.bind({});
DisabledColumnResizing.args = { ...Template.args, enableColumnResizing: false };

export const DisabledColumnResizingForColumn: Story = Template.bind({});
DisabledColumnResizingForColumn.args = {
  ...Template.args,
  columns: [
    ...columns,
    { accessorKey: 'country', header: 'Country', enableResizing: false },
  ],
};

export const CustomDefaultColumnsWidth: Story = Template.bind({});
CustomDefaultColumnsWidth.args = {
  ...Template.args,
  defaultColumn: {
    minSize: 200,
    size: 250,
    maxSize: 350,
  },
};
CustomDefaultColumnsWidth.parameters = {
  screenshot: { skip: false },
};

export const SpecificSizingForColumn: Story = Template.bind({});
SpecificSizingForColumn.args = {
  ...Template.args,
  columns: [
    { accessorKey: 'country', header: 'Country', size: 400 },
    ...columns,
  ],
};

export const InitialColumnResizing: Story = Template.bind({});
InitialColumnResizing.args = {
  ...Template.args,
  initialState: {
    columnSizing: { 'organization.name': 300 },
  },
};
InitialColumnResizing.parameters = {
  screenshot: { skip: false },
};

export const ColumnResizingManagedState: Story = (args) => {
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({
    'organization.name': 300,
  });

  const timeout = useRef<number | null>(null);

  // We recommend to debounce the column resizing due to high performance impact
  const debouncedSetColumnSizing: OnChangeFn<ColumnSizingState> = (params) => {
    if (timeout.current) {
      window.cancelAnimationFrame(timeout.current);
    }
    timeout.current = window.requestAnimationFrame(() => {
      setColumnSizing(params);
    });
  };

  return (
    <>
      <Datatable
        state={{ columnSizing }}
        onColumnSizingChange={debouncedSetColumnSizing}
        {...args}
      />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(columnSizing, null, 2)}</pre>
      </div>
    </>
  );
};
ColumnResizingManagedState.args = Template.args;
