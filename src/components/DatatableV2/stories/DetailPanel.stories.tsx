import type { ComponentMeta } from '@storybook/react';
import type { ExpandedState } from '@tanstack/react-table';
import type { Story } from './Template';

import { useState } from 'react';

import Datatable from '../Datatable';
import Template from './Template';
import Snippet from '../../Snippet/Snippet';
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
    <Snippet shouldDedent={false} isExpanded>
      {JSON.stringify(row.original, null, 2)}
    </Snippet>
  </Padbox>
);

export const DetailPanelEnabled: Story = Template.bind({});
DetailPanelEnabled.args = {
  ...Template.args,
  enableExpanding: true,
  enableExpandAll: true,
  renderDetailPanel: Panel,
};
DetailPanelEnabled.parameters = {
  screenshot: { skip: false },
};

export const DisableExpandAll: Story = Template.bind({});
DisableExpandAll.args = {
  ...DetailPanelEnabled.args,
  enableExpandAll: false,
};
DisableExpandAll.parameters = {
  screenshot: { skip: false },
};

export const InitialExpandedAllDetailPanels: Story = Template.bind({});
InitialExpandedAllDetailPanels.args = {
  ...DetailPanelEnabled.args,
  initialState: {
    expanded: true,
  },
};
InitialExpandedAllDetailPanels.parameters = {
  screenshot: { skip: false },
};

export const InitialExpandedSomeDetailPanels: Story = Template.bind({});
InitialExpandedSomeDetailPanels.args = {
  ...DetailPanelEnabled.args,
  initialState: {
    expanded: { 2: true, 4: true },
  },
};
InitialExpandedSomeDetailPanels.parameters = {
  screenshot: { skip: false },
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
