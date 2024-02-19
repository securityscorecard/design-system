import type { ComponentMeta } from '@storybook/react';
import type { Story } from './Template';

import Datatable from '../Datatable';
import Template from './Template';

export default {
  title: 'components/DatatableV2/PersistentState',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
} as ComponentMeta<typeof Datatable>;

export const PersistentStateEnabled: Story = Template.bind({});

PersistentStateEnabled.args = {
  ...Template.args,
  enablePersistentState: true,
  id: 'PersistentStateEnabled',
  enableColumnOrdering: true,
  enableColumnPinning: true,
  enableColumnResizing: true,
  enableHiding: true,
  enableSorting: true,
};

export const DisabledPersistentState: Story = Template.bind({});

DisabledPersistentState.args = {
  ...PersistentStateEnabled.args,
  enablePersistentState: false,
  id: 'DisabledPersistentState',
};

export const InitialPersistentState: Story = Template.bind({});

InitialPersistentState.args = {
  ...PersistentStateEnabled.args,
  id: 'InitialPersistentState',
  initialState: {
    sorting: [{ id: 'organization.name', desc: false }],
    columnOrder: ['score', 'detectionMethod'],
    columnSizing: { score: 100 },
  },
};
