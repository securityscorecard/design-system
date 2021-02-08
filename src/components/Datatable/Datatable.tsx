import React, { useCallback } from 'react';
import styled from 'styled-components';

import { FlexContainer } from '../FlexContainer';
import { Data, props } from './Table/temp/config';
import Table from './Table/Table';
import { actionsMock } from './mocks/actions';
import { BatchModule } from './BatchModule';
import DatatableContext from './DatatableContext';
import { getColor } from '../../utils/helpers';

const StyledDatatable = styled(FlexContainer)`
  border: 1px solid ${getColor('graphiteHB')};
  background: ${getColor('graphite3H')};
`;

const Datatable: React.FC = () => {
  // We'll start our table without any data
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
  const fetchIdRef = React.useRef(0);

  const fetchData = useCallback(({ pageSize, pageIndex }) => {
    // This will get called when the table needs new data
    // You could fetch your data from literally anywhere,
    // even a server. But for this example, we'll just fake it.

    // Give this fetch an ID
    fetchIdRef.current += 1;
    const fetchId = fetchIdRef.current;

    // Set the loading state
    setLoading(true);

    // We'll even set a delay to simulate a server here
    setTimeout(() => {
      // Only update the data if this is the latest fetch
      if (fetchId === fetchIdRef.current) {
        const startRow = pageSize * pageIndex;
        const endRow = startRow + pageSize;
        setData(props.data.slice(startRow, endRow));

        // Your server could send back total page count.
        // For now we'll just fake it, too
        setPageCount(Math.ceil(props.data.length / pageSize));

        setLoading(false);
      }
    }, 500);
  }, []);

  const { columns, primaryKey, data: propsData, rowActions } = props;
  return (
    <DatatableContext.Provider
      value={{
        totalLength: propsData.length,
        selectedIds,
        setSelectedIds,
        selectedLength: selectedIds.length,
      }}
    >
      <StyledDatatable flexDirection="column">
        <FlexContainer>ToolbarModule</FlexContainer>
        <FlexContainer>Filters</FlexContainer>
        <BatchModule actions={actionsMock} />
        <Table<Data>
          columns={columns}
          data={data}
          fetchData={fetchData}
          isLoading={loading}
          pageCount={pageCount}
          primaryKey={primaryKey}
          rowActions={rowActions}
        />
      </StyledDatatable>
    </DatatableContext.Provider>
  );
};

export default Datatable;
