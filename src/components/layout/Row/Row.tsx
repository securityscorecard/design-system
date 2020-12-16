import React from 'react';
import { Flex } from 'reflexbox';
import styled from 'styled-components';
import { path, pipe } from 'ramda';

import { pxToRem } from '../../../utils/helpers';

const getRowMargin: string = pipe(
  path(['theme', 'layout', 'columnGutter']),
  (gutter) => (gutter / 2) * -1,
  pxToRem,
);

const StyledRow = styled(Flex)`
  margin-left: ${getRowMargin};
  margin-right: ${getRowMargin};
`;

const Row: React.FC = ({ children }) => (
  <StyledRow flexWrap="wrap">{children}</StyledRow>
);

export default Row;
