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

const Row = styled.div.attrs((props) => ({
  className: cls(CLX_LAYOUT, props?.className),
  ...props,
}))`
  margin-inline: ${(props) => getRowMargin(props)};
  box-sizing: border-box;
  min-width: 0;
  flex-wrap: wrap;
  display: flex;
`;

export default Row;
