import React, { useCallback, useEffect, useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';

import * as Grid from '../layout';
import assets from '../Datatable/mocks/ipAssets.json';
import Datatable from './Datatable';
import { Data } from './mocks/types';
import { simpleColumns } from './mocks/columns';
import { datatableBatchActions, datatableRowActions } from './mocks/actions';
import { controlsConfig } from './mocks/controls';

export default {
  title: 'components/DatatableV2',
  component: Datatable,
} as Meta;

export const Playground: Story = () => {
  const [tableData, setTableData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalLength, setTotalLength] = useState(0);

  const dispatchFetchData = useCallback(
    ({ pageSize, pageIndex, sortBy, filters, query }) => {
      action('onDataFetch')({
        pageSize,
        pageIndex,
        sortBy,
        filters,
        query,
      });
      setIsLoading(true);
      setTimeout(() => {
        const startRow = pageSize * pageIndex;
        const endRow = startRow + pageSize;
        const fetchedData: Data[] = assets.slice(startRow, endRow);
        setTableData(fetchedData);
        setTotalLength(assets.length);
        setIsLoading(false);
      }, 500);
    },
    [setIsLoading, setTableData],
  );

  useEffect(() => {
    dispatchFetchData({ pageSize: 50, pageIndex: 0 });
  }, [dispatchFetchData]);

  return (
    <MemoryRouter>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col>
            <Datatable<Data>
              batchActions={datatableBatchActions}
              columns={simpleColumns}
              controlsConfig={controlsConfig}
              data={tableData}
              dataPrimaryKey="ipAddress"
              dataSize={totalLength}
              isDataLoading={isLoading}
              tableConfig={{
                rowActions: datatableRowActions,
                onSelect: action('onRowSelect'),
              }}
              onDataFetch={dispatchFetchData}
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </MemoryRouter>
  );
};
