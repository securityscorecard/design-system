import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getColor, pxToRem } from '../../../utils/helpers';
import { PaginationProps } from './Pagination.types';
import PageButton from './PageButton';

const PaginationWrapper = styled.div`
  display: inline-block;
  position: relative;
  background-color: ${getColor('graphite3H')};
  padding: ${pxToRem(10)};
`;

const mockPages = [1, 2, 3, 4, 5];

const Pagination: React.FC<PaginationProps> = ({ defaultIsOpen = true }) => {
  // const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const [activePage, setActivePage] = useState(mockPages[0]);

  return (
    <PaginationWrapper>
      {defaultIsOpen &&
        mockPages.map((page) => {
          return (
            <PageButton
              key={page}
              isActive={activePage === page}
              onClick={() => {
                if (activePage !== page) {
                  setActivePage(page);
                }
              }}
            >
              {page}
            </PageButton>
          );
        })}
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  // actions: PropTypes.arrayOf(ActionKindsPropType).isRequired,
  defaultIsOpen: PropTypes.bool,
};

export default Pagination;
