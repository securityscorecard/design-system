import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Datatable from './Datatable';
import dataSource from './mocks/data.json';
import { DataSource } from './mocks/data.types';

export default {
  title: 'components/DatatableV2',
  component: Datatable,
} as ComponentMeta<typeof Datatable>;

type Story = ComponentStory<typeof Datatable<DataSource>>;
const Template: Story = (args) => <Datatable {...args} />;

export const Default: Story = Template.bind({});
Default.args = {
  columns: [{ accessorKey: 'id' }, { accessorKey: 'ipAddress' }],
  data: dataSource as DataSource[],
};
