import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Pagination from './Pagination';
import { PaginationProps } from './Pagination.types';
import { Button } from '..';

export default {
  title: 'components/Pagination',
  component: Pagination,
  argTypes: {
    onPageChange: {
      control: { disable: true },
    },
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

export const WithHighPageNumber = PaginationTemplate.bind({});
WithHighPageNumber.args = {
  pageCount: 10000,
  currentPage: 10000,
};

export const WithCustomPageButtonsCount = PaginationTemplate.bind({});
WithCustomPageButtonsCount.args = {
  ...InMiddle.args,
  pageButtonsCount: 10,
};

export const WithCustomRenderItemFunction = PaginationTemplate.bind({});
WithCustomRenderItemFunction.args = {
  ...OnFirstPage.args,
  currentPage: 10,
  renderItem: (param) => <Button>{param.children}</Button>,
};
