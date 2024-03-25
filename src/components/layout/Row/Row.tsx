import React, { ReactNode } from 'react';
import { Flex } from 'reflexbox';
import styled from 'styled-components';
import { path, pipe } from 'ramda';
import cls from 'classnames';

import { pxToRem } from '../../../utils';
import { CLX_LAYOUT } from '../../../theme/constants';

const getRowMargin = pipe(
  path(['theme', 'layout', 'columnGutter']),
  (gutter) => (gutter / 2) * -1,
  pxToRem,
);

const StyledRow = styled(Flex).attrs((props) => ({
  mx: getRowMargin(props),
  className: cls(CLX_LAYOUT, props?.className),
  ...props,
}))``;

const Row = ({ children }: { children: ReactNode }) => (
  <StyledRow flexWrap="wrap">{children}</StyledRow>
);

export default Row;
