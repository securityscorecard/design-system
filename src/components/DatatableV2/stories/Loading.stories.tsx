// import React from 'react';
import { Meta } from '@storybook/react';

import Datatable from '../Datatable';
import Template, { Story } from './Template';
import argTypes from './argTypes';

export default {
  title: 'components/DatatableV2/Loading',
  component: Datatable,
  argTypes,
} as Meta<typeof Datatable>;

export const Loading: Story = Template.bind({});
Loading.args = {
  ...Template.args,
  data: [],
  enableRowSelection: false,
  state: {
    isLoading: true,
  },
};

export const LoadingWithInheritedNumberOfRows: Story = Template.bind({});
LoadingWithInheritedNumberOfRows.args = {
  ...Loading.args,
  initialState: { pagination: { pageSize: 5 } },
};

export const LoadingWithProgress: Story = Template.bind({});
LoadingWithProgress.args = {
  ...Loading.args,
  state: {
    isLoading: true,
    showProgress: true,
  },
};

export const LoadingWithSelection: Story = Template.bind({});
LoadingWithSelection.args = {
  ...Loading.args,
  enableRowSelection: true,
};

export const LoadingWithDetailPanel: Story = Template.bind({});
LoadingWithDetailPanel.args = {
  ...Loading.args,
  enableExpanding: true,
  enableExpandAll: true,
};

export const Reloading: Story = Template.bind({});
Reloading.args = {
  ...Template.args,
  state: {
    showProgress: true,
  },
};
