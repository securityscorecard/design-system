import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { PaginationState } from '@tanstack/react-table';

import { fetchData, useQuery } from '../mocks/externalData';
import Datatable from '../Datatable';
import Template, { Story, columns } from './Template';

export default {
  title: 'components/DatatableV2/Pagination',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
} as ComponentMeta<typeof Datatable>;

export const PaginationEnabled: Story = Template.bind({});
PaginationEnabled.args = {
  ...Template.args,
  initialState: { pagination: { pageSize: 1 } },
};

export const DisabledPagination: Story = Template.bind({});
DisabledPagination.args = { ...Template.args, hasPagination: false };

export const PaginationManagedState: Story = (args) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 3,
    pageSize: 2,
  });

  return (
    <Datatable
      state={{ pagination }}
      onPaginationChange={setPagination}
      {...args}
    />
  );
};
PaginationManagedState.args = Template.args;

export const ManualPagination: Story = (args) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 2,
  });

  const dataQuery = useQuery({
    queryKey: ['data', pagination],
    queryFn: () => fetchData(pagination),
    keepPreviousData: true,
  });

  return (
    <Datatable
      {...args}
      columns={columns}
      data={dataQuery?.data?.entries ?? []}
      pageCount={dataQuery?.data?.pageCount ?? -1}
      state={{ pagination }}
      manualPagination
      onPaginationChange={setPagination}
    />
  );
};
