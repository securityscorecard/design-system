import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Pagination from './Pagination';
import { PaginationProps } from './Pagination.types';
import ButtonV2 from '../ButtonV2/Button';

export default {
  title: 'components/Pagination',
  component: Pagination,
  argTypes: {
    onPageChange: {
      control: { disable: true },
    },
  },
} as Meta;

const PaginationTemplate: StoryFn<PaginationProps> = (args) => (
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
  renderItem: (args) => <ButtonV2 {...args} />,
};

export const OnlyCurrentPage = PaginationTemplate.bind({});
OnlyCurrentPage.args = {
  ...OnFirstPage.args,
  pageButtonsCount: 1,
  currentPage: 10,
};

export const OnlyArrows = PaginationTemplate.bind({});
OnlyArrows.args = {
  ...OnFirstPage.args,
  pageButtonsCount: 0,
  currentPage: 10,
};
