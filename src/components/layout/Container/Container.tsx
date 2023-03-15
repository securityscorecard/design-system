import styled from 'styled-components';

import { pxToRem } from '../../../utils';
import { CLX_LAYOUT } from '../../../theme/constants';

const Container = styled.div.attrs({ className: CLX_LAYOUT })`
  margin: 0 auto;
  width: ${({ theme }) => pxToRem(theme.layout.containerWidth)};
`;

export default Container;
