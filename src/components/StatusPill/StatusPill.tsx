import type { StatusPillProps } from './StatusPill.types';

import React from 'react';
import Styled from 'styled-components';

import { StatusDot } from '../StatusDot/index';
import PillLabel from '../Pill/PillLabel';
import { SpaceSizes } from '../../theme';
import { Inline, Padbox } from '../layout';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { getColor, getRadii, pxToRem } from '../../utils';

const StyledPillWrapper = Styled(Padbox)`
  display: inline-block;
  height: ${pxToRem(24)};
  min-width: 0;
  border-radius: ${getRadii('round')};
  border: 1px solid ${getColor('neutral.200')};
  background-color: ${getColor('neutral.0')};
  padding-right: ${pxToRem(6)};
  padding-top: ${pxToRem(3)};
`;

const StatusPill: React.FC<StatusPillProps> = ({
  color = 'inactive',
  label,
}) => (
  <StyledPillWrapper
    paddingSize={SpaceSizes.xs}
    paddingType={PaddingTypes.squish}
  >
    <Inline align="center" gap="sm">
      <StatusDot color={color} />
      <PillLabel>{label}</PillLabel>
    </Inline>
  </StyledPillWrapper>
);

export default StatusPill;
