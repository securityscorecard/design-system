import styled from 'styled-components';

import { abbreviateNumber, getFormStyle, getRadii } from '../../../utils';
import { Inline, Padbox } from '../../layout';
import { DatatableInstance } from '../Datatable.types';
import { useContainerQuery } from '../../../hooks/useContainerQuery';
import IconButton from '../../ButtonV2/IconButton';
import { useSafeTranslation } from '../../../hooks/useSafeTranslation';

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

  const [cqParams, containerRef] = useContainerQuery(cq);
  const isLg = !cqParams.sm && !cqParams.md;

  const { t, lng } = useSafeTranslation();

  return (
    <Padbox
      ref={containerRef}
      className="ds-table-pagination-toolbar"
      paddingSize="md"
      paddingType="squish"
    >
      <Inline align="center" gap="md" justify="space-between">
        <div className="ds-table-pagination-item-count">
          {isLg
            ? t('sscds|datatable.pagination.itemCounter.full', {
                firstRowIndex: (firstRowIndex + 1).toLocaleString(lng),
                lastRowIndex: lastRowIndex.toLocaleString(lng),
                totalRowCount: abbreviateNumber(totalRowCount, lng),
                count: totalRowCount,
              })
            : t('sscds|datatable.pagination.itemCounter.short', {
                firstRowIndex: (firstRowIndex + 1).toLocaleString(lng),
                lastRowIndex: lastRowIndex.toLocaleString(lng),
                totalRowCount: abbreviateNumber(totalRowCount, lng),
                count: totalRowCount,
              })}
        </div>
        <Inline
          align="center"
          className="ds-table-pagination-buttons-wrapper"
          gap="sm"
        >
          <IconButton
            className="ds-table-pagination-buttons-first-button ds-table-pagination-buttons-button"
            iconName="backward-step"
            isDisabled={!getCanPreviousPage()}
            label={t('sscds|datatable.pagination.goToFirstPage')}
            size="sm"
            variant="ghost"
            onClick={() => setPageIndex(0)}
          />
          <IconButton
            className="ds-table-pagination-buttons-prev-button ds-table-pagination-buttons-button"
            iconName="angle-left"
            isDisabled={!getCanPreviousPage()}
            label={t('sscds|datatable.pagination.goToPreviousPage')}
            size="sm"
            variant="ghost"
            onClick={() => previousPage()}
          />
          <span className="ds-table-pagination-buttons-current-page">
            {currentPage}
          </span>
          <IconButton
            className="ds-table-pagination-buttons-next-button ds-table-pagination-buttons-button"
            iconName="angle-right"
            isDisabled={!getCanNextPage()}
            label={t('sscds|datatable.pagination.goToNextPage')}
            size="sm"
            variant="ghost"
            onClick={() => nextPage()}
          />
          <IconButton
            className="ds-table-pagination-buttons-last-button ds-table-pagination-buttons-button"
            iconName="backward-step"
            iconRotation={180}
            isDisabled={!getCanNextPage()}
            label={t('sscds|datatable.pagination.goToLastPage')}
            size="sm"
            variant="ghost"
            onClick={() => setPageIndex(lastPage)}
          />
        </Inline>
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
              {cqParams.md
                ? t('sscds|datatable.pagination.rowsPerPage.short')
                : t('sscds|datatable.pagination.rowsPerPage')}
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
      </Inline>
    </Padbox>
  );
};

export default Pagination;
