import React, { useState } from 'react';
import { Meta } from '@storybook/react';
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
} as Meta<typeof Datatable>;

export const PaginationEnabled: Story = Template.bind({});
PaginationEnabled.args = Template.args;
PaginationEnabled.parameters = {
  screenshot: { skip: false },
};

export const DisabledPagination: Story = Template.bind({});
DisabledPagination.args = { ...Template.args, enablePagination: false };
DisabledPagination.parameters = {
  screenshot: { skip: false },
};

export const EnabledRowsPerPage: Story = Template.bind({});
EnabledRowsPerPage.args = { ...Template.args, enableRowsPerPage: true };
EnabledRowsPerPage.parameters = {
  screenshot: { skip: false },
};

export const CustomRowsPerPageOptions: Story = Template.bind({});
CustomRowsPerPageOptions.args = {
  ...Template.args,
  rowsPerPageOptions: [5, 10, 15],
  enableRowsPerPage: true,
};
CustomRowsPerPageOptions.parameters = {
  screenshot: { skip: false },
};

export const InitialPagination: Story = Template.bind({});
InitialPagination.args = {
  ...Template.args,
  initialState: {
    pagination: { pageSize: 10, pageIndex: 1 },
  },
};
InitialPagination.parameters = {
  screenshot: { skip: false },
};

export const PaginationManagedState: Story = (args) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });

  return (
    <>
      <Datatable
        state={{ pagination }}
        onPaginationChange={setPagination}
        {...args}
      />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(pagination, null, 2)}</pre>
      </div>
    </>
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
    <>
      <Datatable
        {...args}
        columns={columns}
        data={dataQuery?.data?.entries ?? []}
        pageCount={dataQuery?.data?.pageCount ?? -1}
        rowCount={dataQuery?.data?.rowCount}
        state={{ pagination }}
        manualPagination
        onPaginationChange={setPagination}
      />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(pagination, null, 2)}</pre>
      </div>
    </>
  );
};
