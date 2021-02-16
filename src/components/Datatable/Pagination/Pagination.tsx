/* eslint-disable react/boolean-prop-naming */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getColor, pxToRem } from '../../../utils/helpers';
import { PaginationProps } from './Pagination.types';
import PageButton from './PageButton';
import NavButton from './NavButton';
import { SSCIconNames } from '../../../theme/icons/icons.enums';

const PaginationWrapper = styled.div`
  display: inline-block;
  position: relative;
  background-color: ${getColor('graphite3H')};
  padding: ${pxToRem(10)};
`;

const Pagination: React.FC<PaginationProps> = ({
  gotoPage,
  previousPage,
  nextPage,
  pageCount,
  canPreviousPage,
  canNextPage,
  pageIndex,
  pageOptions,
}) => {
  const pages = [...Array(pageCount).keys()].map((foo) => foo + 1);
  const onChangePageNumber = (e) => {
    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
    gotoPage(pageNumber + 1);
  };

  return (
    <PaginationWrapper>
      <NavButton
        iconName={SSCIconNames.longArrowLeft}
        isDisabled={!canPreviousPage}
        label="backOnePage"
        onClick={() => previousPage()}
      >
        {' '}
        back{' '}
      </NavButton>
      {pages.map((page) => {
        return (
          <PageButton
            key={page}
            isActive={pageIndex === page}
            onClick={() => {
              if (pageIndex !== page) {
                gotoPage(page);
              }
            }}
          >
            {page}
          </PageButton>
        );
      })}
      <NavButton
        iconName={SSCIconNames.longArrowRight}
        isDisabled={!canNextPage}
        label="forwardOnePage"
        onClick={() => nextPage()}
      />
      <input
        defaultValue={pageIndex + 1}
        type="number"
        onChange={(event) => {
          onChangePageNumber(event);
        }}
      />
      <br />
      <br />
      current Page: {pageIndex}
      <br /> <br /> total: {pageOptions.length}
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  canPreviousPage: PropTypes.bool.isRequired,
  canNextPage: PropTypes.bool.isRequired,
  pageIndex: PropTypes.bool.isRequired,
  pageOptions: PropTypes.shape({ length: PropTypes.number.isRequired })
    .isRequired,
  gotoPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};

export default Pagination;
