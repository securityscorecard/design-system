import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Footer from './Footer';
import { FooterProps } from './Footer.types';

export default {
  title: 'components/DatatableV2/internalComponents/Table/Footer',
  component: Footer,
  parameters: {
    viewMode: 'story',

    docs: { disable: true },
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
  argTypes: {
    hasPagination: {
      control: { type: 'boolean' },
    },
    isDataLoading: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const FooterTemplate: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = FooterTemplate.bind({});
Default.args = {
  pageCount: 15,
  pageIndex: 0,
  onGotoPage: action('onGotoPage'),
};

export const WithoutPagination = FooterTemplate.bind({});
WithoutPagination.args = {
  ...Default.args,
  hasPagination: false,
  isDataLoading: true,
};

export const DataIsLoading = FooterTemplate.bind({});
DataIsLoading.args = {
  ...Default.args,
  isDataLoading: true,
};
