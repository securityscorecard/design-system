import { ReactNode } from 'react';
import styled from 'styled-components';

import { CLX_LAYOUT } from '../../../theme/constants';

const StyledRow = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  flex-wrap: wrap;
  margin-inline: calc(var(--sscds-space-grid-gutter) / -2);
  display: flex;
`;

const Row = ({ children }: { children: ReactNode }) => (
  <StyledRow className={CLX_LAYOUT}>{children}</StyledRow>
);

export default Row;
