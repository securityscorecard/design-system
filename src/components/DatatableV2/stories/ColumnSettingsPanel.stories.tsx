import type { ComponentMeta } from '@storybook/react';
import type { Story } from './Template';

import { useState } from 'react';

import Datatable from '../Datatable';
import Template from './Template';

export default {
  title: 'components/DatatableV2/ColumnSettingsPanel',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
} as ComponentMeta<typeof Datatable>;

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
