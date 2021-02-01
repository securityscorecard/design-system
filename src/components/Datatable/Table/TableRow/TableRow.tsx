import React from 'react';
import styled from 'styled-components';

const StyledTableRow = styled.tr``;

const TableRow: React.FC = ({ children, ...props }) => (
  <StyledTableRow {...props}>{children}</StyledTableRow>
);

export default TableRow;
