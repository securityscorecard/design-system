import styled from 'styled-components';

import { PillLabelProps } from './Pill.types';

const PillLabel = styled.div<PillLabelProps>`
  flex: 1 1 0%;
  white-space: nowrap;
  color: var(--sscds-pill-color-text, var(--sscds-color-text-pill-gray));
  font-size: var(
    --sscds-pill-font-size,
    var(--sscds-font-size-elementlabel-sm)
  );
  font-weight: var(
    --sscds-pill-font-weight,
    var(--sscds-font-weight-elementlabel-default)
  );
  line-height: var(--sscds-pill-size, var(--sscds-font-lineheight-30));

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
