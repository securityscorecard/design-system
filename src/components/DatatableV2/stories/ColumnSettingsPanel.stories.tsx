import React, { Meta } from '@storybook/react';
import { useState } from 'react';
import { times } from 'ramda';

import Datatable from '../Datatable';
import Template, { Story } from './Template';
import argTypes from './argTypes';

export default {
  title: 'components/DatatableV2/ColumnSettingsPanel',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
  argTypes,
} as Meta<typeof Datatable>;

export const ColumnSettingsPanelEnabled: Story = Template.bind({});
ColumnSettingsPanelEnabled.args = Template.args;

export const DisabledColumnSettingsPanel: Story = Template.bind({});
DisabledColumnSettingsPanel.args = {
  ...Template.args,
  enableHiding: false,
  enableColumnPinning: false,
};

export const DisabledColumnHidingInSettingsPanel: Story = Template.bind({});
DisabledColumnHidingInSettingsPanel.args = {
  ...Template.args,
  enableHiding: false,
  initialState: {
    showColumnSettings: true,
  },
};
DisabledColumnHidingInSettingsPanel.parameters = {
  screenshot: { skip: false },
};

export const DisabledColumnPinningInSettingsPanel: Story = Template.bind({});
DisabledColumnPinningInSettingsPanel.args = {
  ...Template.args,
  enableColumnPinning: false,
  initialState: {
    showColumnSettings: true,
  },
};
DisabledColumnPinningInSettingsPanel.parameters = {
  screenshot: { skip: false },
};

export const InitialColumnSettingsPanel: Story = Template.bind({});
InitialColumnSettingsPanel.args = {
  ...Template.args,
  initialState: {
    showColumnSettings: true,
  },
};
InitialColumnSettingsPanel.parameters = {
  screenshot: { skip: false },
};

export const ColumnSettingsPanelManagedState: Story = (args) => {
  const [showColumnSettings, setShowColumnSettings] = useState<boolean>(true);

  return (
    <>
      <Datatable
        state={{ showColumnSettings }}
        onShowColumnSettings={setShowColumnSettings}
        {...args}
      />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(showColumnSettings, null, 2)}</pre>
      </div>
    </>
  );
};
ColumnSettingsPanelManagedState.args = Template.args;

export const ColumnSettingsPanelWithManyColumns: Story = Template.bind({});

const columns = times(
  (columnIndex) => ({
    accessorKey: `column${columnIndex + 1}`,
    header: `Column ${columnIndex + 1}`,
  }),
  10,
);

const createRow = (rowIndex) => {
  return columns.reduce(
    (row, column) => ({
      ...row,
      [column.accessorKey]: `${column.header} value ${rowIndex + 1}`,
    }),
    {},
  );
};

const dataForLargeColumns = times((rowIndex) => createRow(rowIndex), 5);

ColumnSettingsPanelWithManyColumns.args = {
  ...Template.args,
  columns,
  data: dataForLargeColumns,
  initialState: {
    showColumnSettings: true,
  },
};
ColumnSettingsPanelWithManyColumns.parameters = {
  screenshot: { skip: false },
};
