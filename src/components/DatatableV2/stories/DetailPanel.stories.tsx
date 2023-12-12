import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { ExpandedState } from '@tanstack/react-table';

import Datatable from '../Datatable';
import Template, { Story } from './Template';
import { Code } from '../../typographyLegacy';
import { Padbox } from '../../layout';

export default {
  title: 'components/DatatableV2/DetailPanel',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
} as ComponentMeta<typeof Datatable>;

const Panel = ({ row }) => (
  <Padbox paddingSize="md">
    <pre>
      <Code size="sm">{JSON.stringify(row.original, null, 2)}</Code>
    </pre>
  </Padbox>
);

export const DetailPanelEnabled: Story = Template.bind({});
DetailPanelEnabled.args = {
  ...Template.args,
  enableExpanding: true,
  enableExpandAll: true,
  renderDetailPanel: Panel,
};

export const DisableExpandAll: Story = Template.bind({});
DisableExpandAll.args = {
  ...DetailPanelEnabled.args,
  enableExpandAll: false,
};

export const InitialExpandedAllDetailPanels: Story = Template.bind({});
InitialExpandedAllDetailPanels.args = {
  ...DetailPanelEnabled.args,
  initialState: {
    expanded: true,
  },
};

export const InitialExpandedSomeDetailPanels: Story = Template.bind({});
InitialExpandedSomeDetailPanels.args = {
  ...DetailPanelEnabled.args,
  initialState: {
    expanded: { 2: true, 4: true },
  },
};

export const DetailPanelManagedState: Story = (args) => {
  const [expanded, setExpanded] = useState<ExpandedState>({ 1: true });

  return (
    <>
      <Datatable
        state={{ expanded }}
        manualExpanding
        onExpandedChange={setExpanded}
        {...args}
      />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(expanded, null, 2)}</pre>
      </div>
    </>
  );
};
DetailPanelManagedState.args = DetailPanelEnabled.args;
