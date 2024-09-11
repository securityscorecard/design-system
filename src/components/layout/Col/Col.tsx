import styled from 'styled-components';

import { ColProps } from './Col.types';
import { CLX_LAYOUT } from '../../../theme/constants';

const StyledCol = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  margin-inline-start: var(--sscds-col-margin-start);
  padding-inline: calc(var(--sscds-space-grid-gutter) / 2);
  flex: 1 1 auto;
  max-width: var(--sscds-col-width);
`;

const Col = ({ children, cols = 'auto', offset = 0 }: ColProps) => (
  <StyledCol
    className={CLX_LAYOUT}
    style={{
      '--sscds-col-margin-start': `calc(100% / 12 * ${offset})`,
      '--sscds-col-width':
        cols === 'auto' ? 'auto' : `calc(${cols} / 12 * 100%)`,
    }}
  >
    {children}
  </StyledCol>
);

export default Col;
