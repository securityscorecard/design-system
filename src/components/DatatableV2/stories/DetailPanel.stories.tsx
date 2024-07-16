import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { ExpandedState } from '@tanstack/react-table';
import { action } from '@storybook/addon-actions';

import Datatable from '../Datatable';
import Template, { Story } from './Template';
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
  enableRowActions: true,
  rowActions: [
    {
      iconName: 'eye-slash',
      label: 'Make private',
      onClick:
        ({ row, table }) =>
        (event) =>
          action('row action')({ row, table, event }),
    },
  ],
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
    expanded: {
      'dc7f6ee9-be51-4938-90f5-d6b48d95f498': true,
      'e23968c3-3f19-44b2-aee9-c4a1d7c326ee': true,
    },
  },
};
InitialExpandedSomeDetailPanels.parameters = {
  screenshot: { skip: false },
};

export const DetailPanelManagedState: Story = (args) => {
  const [expanded, setExpanded] = useState<ExpandedState>({
    'dc7f6ee9-be51-4938-90f5-d6b48d95f498': true,
  });

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
