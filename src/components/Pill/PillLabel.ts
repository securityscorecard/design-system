import styled from 'styled-components';
import { gt } from 'ramda';

import { getColor, getFontSize } from '../../utils';
import { PillLabelProps } from './Pill.types';

const PillLabel = styled.div<PillLabelProps>`
  flex: 1 1 0%;
  white-space: nowrap;
  color: ${getColor('neutral.900')};
  font-size: ${getFontSize('md')};
  line-height: 1rem;

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
