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
};

export const DisabledPagination: Story = Template.bind({});
DisabledPagination.args = { ...Template.args, hasPagination: false };

export const DisabledRowsPerPage: Story = Template.bind({});
DisabledRowsPerPage.args = { ...Template.args, hasRowsPerPage: false };

export const CustomRowsPerPageOptions: Story = Template.bind({});
CustomRowsPerPageOptions.args = {
  ...Template.args,
  rowsPerPageOptions: [5, 10, 15],
};

export const InitialPagination: Story = Template.bind({});
InitialPagination.args = {
  ...Template.args,
  initialState: {
    pagination: { pageSize: 25, pageIndex: 1 },
  },
};

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
    pageSize: 10,
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
      rowsCount={dataQuery?.data?.rowsCount}
      state={{ pagination }}
      manualPagination
      onPaginationChange={setPagination}
    />
  );
};
