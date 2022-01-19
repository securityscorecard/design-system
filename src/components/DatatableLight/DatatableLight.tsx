import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDeepCompareMemo } from 'use-deep-compare';

import { getBorderRadius, getColor } from '../../utils';
import { FlexContainer } from '../FlexContainer';
import { mergeTableConfig } from './defaultConfigs';
import { Table } from './Table';
import { TableConfig, TableConfigPropType } from './Table/Table.types';
import { DatatableProps } from './DatatableLight.types';

const StyledDatatable = styled(FlexContainer)`
  position: relative;
  border: 1px solid ${getColor('graphiteH')};
  border-radius: ${getBorderRadius};
  background: ${getColor('graphite3H')};
  margin-bottom: 15px;
`;

const DatatableLight = <D extends Record<string, unknown>>({
  data,
  dataSize,
  columns,
  dataPrimaryKey,
  tableConfig = {},
  isDataLoading = false,
}: DatatableProps<D>): React.ReactElement => {
  const { ...restTableConfig } = useDeepCompareMemo<TableConfig<D>>(
    () => mergeTableConfig(tableConfig),
    [tableConfig],
  );
  return (
    <StyledDatatable flexDirection="column">
      <Table<D>
        {...restTableConfig}
        columns={columns}
        data={data}
        dataPrimaryKey={dataPrimaryKey}
        dataSize={dataSize}
        isDataLoading={isDataLoading}
      />
    </StyledDatatable>
  );
};

DatatableLight.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dataSize: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dataPrimaryKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  tableConfig: PropTypes.exact(TableConfigPropType),
};

export default DatatableLight;
