import React from 'react';
import styled from 'styled-components';
import { useContainerQuery } from 'react-container-query';

import { abbreviateNumber, getFormStyle, getRadii } from '../../../utils';
import { Inline, Padbox } from '../../layout';
import IconButton from '../buttons/IconButton';
import { DatatableInstance } from '../Datatable.types';

const cq = {
  sm: {
    maxWidth: 512,
  },
  md: {
    minWidth: 513,
    maxWidth: 720,
  },
};

const Select = styled.select`
  border: 1px solid ${getFormStyle('borderColor')};
  border-radius: ${getRadii('default')};
  color: ${getFormStyle('color')};
  height: ${getFormStyle('fieldHeight')};
`;

const Pagination = <D,>({ table }: { table: DatatableInstance<D> }) => {
  const {
    getCanNextPage,
    getCanPreviousPage,
    getPageCount,
    getPrePaginationRowModel,
    getState,
    nextPage,
    options: { enableRowsPerPage, rowCount, rowsPerPageOptions },
    previousPage,
    setPageIndex,
    setPageSize,
  } = table;
  const { pagination } = getState();
  const { pageIndex, pageSize } = pagination;

  const currentPage = pageIndex + 1;
  const lastPage = getPageCount() - 1;
  const totalRowCount = rowCount ?? getPrePaginationRowModel().rows.length;
  const firstRowIndex = pageIndex * pageSize;
  const lastRowIndex = Math.min(pageIndex * pageSize + pageSize, totalRowCount);

  const [cqParams, containerRef] = useContainerQuery(cq, { width: 1200 });
  const isLg = !cqParams.sm && !cqParams.md;

  return (
    <Padbox
      ref={containerRef}
      className="ds-table-pagination-toolbar"
      paddingSize="md"
    >
      <Inline align="center" gap="md" justify="space-between">
        {enableRowsPerPage && !cqParams.sm && (
          <Inline
            align="center"
            className="ds-table-pagination-rows-per-page-wrapper"
            gap="md"
          >
            <label
              className="ds-table-pagination-rows-per-page-label"
              htmlFor="rowsPerPageSelect"
            >
              {cqParams.md ? 'Rows' : 'Number of rows'}
            </label>
            <Select
              className="ds-table-pagination-rows-per-page-select"
              id="rowsPerPageSelect"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {rowsPerPageOptions.map((size) => (
                <option
                  key={size}
                  className="ds-table-pagination-rows-per-page-option"
                  value={size}
                >
                  {size}
                </option>
              ))}
            </Select>
          </Inline>
        )}
        <div className="ds-table-pagination-item-count">
          {(firstRowIndex + 1).toLocaleString('en-US')}-
          {lastRowIndex.toLocaleString('en-US')} of{' '}
          <abbr title={totalRowCount.toString()}>
            {abbreviateNumber(totalRowCount)}
          </abbr>
          {isLg && ' total items'}
        </div>
        <Inline
          align="center"
          className="ds-table-pagination-buttons-wrapper"
          gap="sm"
        >
          <span className="ds-table-pagination-buttons-current-page">
            {!isLg ? 'Pg.' : 'Page'} {currentPage}
          </span>
          <IconButton
            className="ds-table-pagination-buttons-first-button ds-table-pagination-buttons-button"
            iconName="backward-step"
            isDisabled={!getCanPreviousPage()}
            label="Go to the first page of table"
            onClick={() => setPageIndex(0)}
          />
          <IconButton
            className="ds-table-pagination-buttons-prev-button ds-table-pagination-buttons-button"
            iconName="angle-left"
            isDisabled={!getCanPreviousPage()}
            label="Go to the previous page of table"
            onClick={() => previousPage()}
          />
          <IconButton
            className="ds-table-pagination-buttons-next-button ds-table-pagination-buttons-button"
            iconName="angle-right"
            isDisabled={!getCanNextPage()}
            label="Go to the next page of table"
            onClick={() => nextPage()}
          />
          <IconButton
            className="ds-table-pagination-buttons-last-button ds-table-pagination-buttons-button"
            iconName="backward-step"
            iconProps={{ rotation: 180 }}
            isDisabled={!getCanNextPage()}
            label="Go to the last page of table"
            onClick={() => setPageIndex(lastPage)}
          />
        </Inline>
      </Inline>
    </Padbox>
  );
};

export default Pagination;
