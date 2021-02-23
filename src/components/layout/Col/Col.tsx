import React from 'react';
import { Box } from 'reflexbox';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { path, pipe } from 'ramda';

import { pxToRem } from '../../../utils/helpers';
import { ColProps, Cols } from './Col.types';

const getColWidth = (cols: Cols): { flex: string } | { width: number } => {
  if (cols === 'auto') return { flex: '1 1 auto' };

  return { width: cols / 12 };
};

const getColPadding: string = pipe(
  path(['theme', 'layout', 'columnGutter']),
  (gutter) => gutter / 2,
  pxToRem,
);

const StyledCol = styled(Box)`
  padding-left: ${getColPadding};
  padding-right: ${getColPadding};
`;

const Col: React.FC<ColProps> = ({ children, cols, offset, ...props }) => (
  <StyledCol ml={`${(100 / 12) * offset}%`} {...getColWidth(cols)} {...props}>
    {children}
  </StyledCol>
);

Col.propTypes = {
  cols: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf<'auto'>(['auto']),
  ]),
  offset: PropTypes.number,
};

Col.defaultProps = {
  cols: 'auto',
  offset: 0,
};

export default Col;
