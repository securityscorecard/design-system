import React from 'react';
import styled from 'styled-components';

const StyledTableCell = styled.td`
  padding: 5px;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dadada;
  border-right: 1px solid transparent;

  &:last-child {
    border-right: 0;
  }

  &[data-sticky-td] {
    position: sticky;
  }
`;

const TableCell: React.FC = ({ children, ...props }) => (
  <StyledTableCell {...props}>{children}</StyledTableCell>
);

export default TableCell;
