import styled, { css } from 'styled-components';

import {
  getColor,
  getFontFamily,
  getFontSize,
} from '../../../../../../utils/helpers';
import { Link as TypographyLink } from '../../../../../typography';
import { TextSizes } from '../../../../../typography/Text/Text.enums';

const TableCellLink = styled(TypographyLink)<{ isDiscrete?: boolean }>`
  font-family: ${getFontFamily('base')};
  font-size: ${getFontSize(TextSizes.md)};
  line-height: ${getFontSize(TextSizes.md)};

  ${({ $isDiscrete }) =>
    $isDiscrete &&
    css`
      &,
      &:not([href]):not([tabindex]) {
        color: ${getColor('graphite4B')};
      }
    `};
`;

TableCellLink.defaultProps = {
  $isDiscrete: false,
};

export default TableCellLink;
