import React from 'react';
import styled from 'styled-components';

const StyledTableHeadCell = styled.th`
  font-weight: normal;
  text-align: left;
  padding: 5px;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #dadada;
  border-right: 1px solid #dadada;

  :nth-last-child(2) {
    border-right: 0;
  }

  &[data-sticky-td] {
    position: sticky;
  }

  &[data-sticky-last-left-td] {
    box-shadow: 10px 0 10px 0 rgba(0, 0, 0, 0.05);
  }

  &[data-sticky-first-right-td] {
    box-shadow: -10px 0 10px 0 rgba(0, 0, 0, 0.05);
    border-left: 1px solid #dadada;
  }
`;

const TableHeadCell: React.FC = ({ children, ...props }) => (
  <StyledTableHeadCell {...props}>{children}</StyledTableHeadCell>
);

export default TableHeadCell;
