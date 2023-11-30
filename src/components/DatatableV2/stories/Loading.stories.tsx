// import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Datatable from '../Datatable';
import Template, { Story } from './Template';

export default {
  title: 'components/DatatableV2/Loading',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
} as ComponentMeta<typeof Datatable>;

export const Loading: Story = Template.bind({});
Loading.args = {
  ...Template.args,
  data: [],
  state: {
    isLoading: true,
  },
};

export const LoadingWithInheritedNumberOfRows: Story = Template.bind({});
LoadingWithInheritedNumberOfRows.args = {
  ...Template.args,
  data: [],
  initialState: { pagination: { pageSize: 5 } },
  state: {
    isLoading: true,
  },
};

export const LoadingWithProgress: Story = Template.bind({});
LoadingWithProgress.args = {
  ...Template.args,
  data: [],
  state: {
    isLoading: true,
  },
};

export const LoadingWithSelection: Story = Template.bind({});
LoadingWithSelection.args = {
  ...Template.args,
  data: [],
  enableRowSelection: true,
  state: {
    isLoading: true,
  },
};

export const Reloading: Story = Template.bind({});
Reloading.args = {
  ...Template.args,
  state: {
    showProgress: true,
  },
};
