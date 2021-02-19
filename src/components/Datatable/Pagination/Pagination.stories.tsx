import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Pagination from './Pagination';
import { PaginationProps } from './Pagination.types';

export default {
  title: 'components/Datatable/components/Pagination',
  component: Pagination,
} as Meta;

export const Default: Story<PaginationProps> = ({ ...args }) => {
  const [mockPageIndex, setMockPageIndex] = useState(0);
  const [mockPageCount, setMockPageCount] = useState(args.pageCount);
  const [isLoading, setIsLoading] = useState(args.isLoading);

  const onGoToPage = (page) => {
    setMockPageIndex(page);
  };
  const onPreviousPage = () => {
    setMockPageIndex(mockPageIndex - 1);
  };
  const onNextPage = () => {
    setMockPageIndex(mockPageIndex + 1);
  };

  const canPreviousPage = mockPageIndex > 0;
  const canNextPage = mockPageIndex < mockPageCount - 1;

  useEffect(() => {
    setMockPageCount(args.pageCount);
    setIsLoading(args.isLoading);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [args]);

  return (
    <Pagination
      canNextPage={canNextPage}
      canPreviousPage={canPreviousPage}
      isLoading={isLoading}
      pageCount={mockPageCount}
      pageIndex={mockPageIndex}
      onGoToPage={onGoToPage}
      onNextPage={onNextPage}
      onPreviousPage={onPreviousPage}
    />
  );
};

Default.args = {
  isLoading: false,
  pageCount: 20,
};

Default.argTypes = {
  isLoading: { control: 'boolean' },
  pageCount: { type: 'number' },
};
