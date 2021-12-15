import styled, { css } from 'styled-components';
import { gt } from 'ramda';

import { getColor, getFontSize, getLineHeight } from '../../utils';
import { PillSizes } from './Pill.enums';
import { PillLabelProps } from './Pill.types';

const PillLabelSmall = css`
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
`;
const PillLabelMedium = css`
  font-size: ${getFontSize('lg')};
  line-height: ${getLineHeight('md')};
`;

const pillLabelSizes = {
  [PillSizes.sm]: PillLabelSmall,
  [PillSizes.md]: PillLabelMedium,
};

const PillLabel = styled.div<PillLabelProps>`
  white-space: nowrap;
  color: ${getColor('graphite4B')};
  ${({ $size }) => pillLabelSizes[$size]};

  /* desired length + 2 chars for ellipsis */
  ${({ $maxLength }) =>
    gt($maxLength, 0) &&
    `
    max-width: ${$maxLength + 2}ch;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

export default PillLabel;
