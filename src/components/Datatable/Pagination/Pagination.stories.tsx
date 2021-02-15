import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta, Story } from '@storybook/react/types-6-0';

import Pagination from './Pagination';
import { PaginationProps } from './Pagination.types';

export default {
  title: 'components/Datatable/components/Pagination',
  component: Pagination,
  decorators: [
    (storyFn) => (
      <MemoryRouter>
        <div style={{ margin: '20 auto' }}>{storyFn()}</div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 150,
    },
  },
} as Meta;

export const Default: Story<PaginationProps> = (args) => (
  <Pagination {...args}>Pagination handler</Pagination>
);
Default.args = {
  defaultIsOpen: true,
};
Default.argTypes = {
  defaultIsOpen: { control: 'boolean' },
};
