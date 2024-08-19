import styled from 'styled-components';

import { PillLabelProps } from './Pill.types';

const PillLabel = styled.div<PillLabelProps>`
  flex: 1 1 0%;
  white-space: nowrap;
  color: var(--sscds-color-text-default);
  font-size: var(--sscds-font-size-body-md);
  line-height: 1rem;

  /* desired length + 2 chars for ellipsis */
  ${({ $maxLength }) =>
    $maxLength > 0 &&
    `
    max-width: ${$maxLength + 2}ch;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

export default PillLabel;
