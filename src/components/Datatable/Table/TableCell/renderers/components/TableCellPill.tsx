import styled from 'styled-components';

import { getColor, pxToRem } from '../../../../../../utils/helpers';
import { FlexContainer } from '../../../../../FlexContainer';

export const TableCellPillWrapper = styled(FlexContainer)`
  margin: ${pxToRem(-2)};
`;

const TableCellPill = styled(FlexContainer)`
  align-items: center;
  padding: ${pxToRem(4, 8)};
  background: ${getColor('graphite3H')};
  border-radius: 50em;
  white-space: nowrap;
  margin: ${pxToRem(2)};
`;

export default TableCellPill;
