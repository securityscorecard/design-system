import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Pagination from './Pagination';
import { PaginationProps } from './Pagination.types';

export default {
  title: 'components/Datatable/internalComponents/Table/Pagination',
  component: Pagination,
  parameters: {
    viewMode: 'story',
    docs: { disable: true },
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
} as Meta;

const PaginationTemplate: Story<PaginationProps> = (args) => (
  <Pagination {...args} />
);

export const OnFirstPage = PaginationTemplate.bind({});
OnFirstPage.args = {
  pageCount: 15,
  currentPage: 1,
  onPageChange: action('onPageChange'),
};

export const InMiddle = PaginationTemplate.bind({});
InMiddle.args = {
  ...OnFirstPage.args,
  currentPage: 8,
};

export const OnLastPage = PaginationTemplate.bind({});
OnLastPage.args = {
  ...OnFirstPage.args,
  currentPage: 15,
};

export const WithCustomPageButtonsCount = PaginationTemplate.bind({});
WithCustomPageButtonsCount.args = {
  ...InMiddle.args,
  pageButtonsCount: 10,
};
