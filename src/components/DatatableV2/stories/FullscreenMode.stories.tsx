import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import Datatable from '../Datatable';
import Template, { Story } from './Template';

export default {
  title: 'components/DatatableV2/FullscreenMode',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
} as Meta<typeof Datatable>;

export const FullscreenModeEnabled: Story = Template.bind({});
FullscreenModeEnabled.args = Template.args;

export const FullscreenModeDisabled: Story = Template.bind({});
FullscreenModeDisabled.args = { ...Template.args, enableFullScreenMode: false };

export const InitialFullscreenMode: Story = Template.bind({});
InitialFullscreenMode.args = {
  ...Template.args,
  initialState: {
    isFullscreenMode: true,
  },
};
InitialFullscreenMode.parameters = {
  screenshot: { skip: false },
};

export const FullscreenModeManagedState: Story = (args) => {
  const [isFullscreenMode, setIsFullscreenMode] = useState(false);

  return (
    <>
      <Datatable
        state={{ isFullscreenMode }}
        manualSorting
        onFullscreenModeChange={setIsFullscreenMode}
        {...args}
      />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(isFullscreenMode, null, 2)}</pre>
      </div>
    </>
  );
};
FullscreenModeManagedState.args = Template.args;
