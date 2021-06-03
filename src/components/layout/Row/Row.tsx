import React from 'react';
import { Flex } from 'reflexbox';
import styled from 'styled-components';
import { path, pipe } from 'ramda';

import { pxToRem } from '../../../utils';

const getRowMargin = pipe(
  path(['theme', 'layout', 'columnGutter']),
  (gutter) => (gutter / 2) * -1,
  pxToRem,
);

const StyledRow = styled(Flex).attrs((props) => ({
  mx: getRowMargin(props),
  ...props,
}))``;

const Row: React.FC = ({ children }) => (
  <StyledRow flexWrap="wrap">{children}</StyledRow>
);

export default Row;
