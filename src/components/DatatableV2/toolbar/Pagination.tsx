import type { DatatableInstance } from '../Datatable.types';

import styled from 'styled-components';

import { abbreviateNumber, getFormStyle, getRadii } from '../../../utils';
import { Inline, Padbox } from '../../layout';
import IconButton from '../buttons/IconButton';

const PaginationRoot = styled(Padbox)`
  border-top: 1px solid var(--sscds-table-color-border);
`;
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

  return (
    <PaginationRoot className="ds-table-pagination-toolbar" paddingSize="md">
      <Inline align="center" gap="md" justify="space-between">
        {enableRowsPerPage && (
          <Inline
            align="center"
            className="ds-table-pagination-rows-per-page-wrapper"
            gap="md"
          >
            <label
              className="ds-table-pagination-rows-per-page-label"
              htmlFor="rowsPerPageSelect"
            >
              Number of rows
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
          Showing {(firstRowIndex + 1).toLocaleString('en-US')}-
          {lastRowIndex.toLocaleString('en-US')} of{' '}
          <abbr title={totalRowCount.toString()}>
            {abbreviateNumber(totalRowCount)}
          </abbr>{' '}
          total items
        </div>
        <Inline
          align="center"
          className="ds-table-pagination-buttons-wrapper"
          gap="md"
        >
          <span className="ds-table-pagination-buttons-current-page">
            Page {currentPage}
          </span>
          <IconButton
            className="ds-table-pagination-buttons-first-button ds-table-pagination-buttons-button"
            disabled={!getCanPreviousPage()}
            iconName="backward-step"
            label="Go to the first page of table"
            onClick={() => setPageIndex(0)}
          />
          <IconButton
            className="ds-table-pagination-buttons-prev-button ds-table-pagination-buttons-button"
            disabled={!getCanPreviousPage()}
            iconName="angle-left"
            label="Go to the previous page of table"
            onClick={() => previousPage()}
          />
          <IconButton
            className="ds-table-pagination-buttons-next-button ds-table-pagination-buttons-button"
            disabled={!getCanNextPage()}
            iconName="angle-right"
            label="Go to the next page of table"
            onClick={() => nextPage()}
          />
          <IconButton
            className="ds-table-pagination-buttons-last-button ds-table-pagination-buttons-button"
            disabled={!getCanNextPage()}
            iconName="backward-step"
            iconProps={{ rotation: 180 }}
            label="Go to the last page of table"
            onClick={() => setPageIndex(lastPage)}
          />
        </Inline>
      </Inline>
    </PaginationRoot>
  );
};

export default Pagination;
