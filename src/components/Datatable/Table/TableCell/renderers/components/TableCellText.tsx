import styled from 'styled-components';

import { Text as TypographyText } from '../../../../../typography';
import { TextSizes } from '../../../../../typography/Text/Text.enums';

const TableCellText = styled(TypographyText).attrs((props) => ({
  ...props,
  size: TextSizes.md,
}))``;

export default TableCellText;
