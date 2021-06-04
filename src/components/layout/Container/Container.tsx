import styled from 'styled-components';

import { pxToRem } from '../../../utils';

const Container = styled.div`
  margin: 0 auto;
  width: ${({ theme }) => pxToRem(theme.layout.containerWidth)};
`;

export default Container;
