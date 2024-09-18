import Styled from 'styled-components';

import { StatusDot } from '../StatusDot/index';
import { StatusPillProps } from './StatusPill.types';
import { SpaceSizes } from '../../theme';
import { Inline, Padbox } from '../layout';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { getColor, getRadii, pxToRem } from '../../utils';
import { Text } from '../Text';

const StyledPillWrapper = Styled(Padbox)`
  display: inline-block;
  height: ${pxToRem(24)};
  min-width: 0;
  border-radius: ${getRadii('round')};
  border: 1px solid ${getColor('neutral.300')};
  background-color: ${getColor('neutral.0')};
  padding-right: ${pxToRem(6)};
  padding-top: ${pxToRem(1)};
`;

const StatusPill = ({ color = 'inactive', label }: StatusPillProps) => (
  <StyledPillWrapper
    paddingSize={SpaceSizes.xs}
    paddingType={PaddingTypes.squish}
  >
    <Inline align="center" gap="sm">
      <StatusDot color={color} />
      <Text>{label}</Text>
    </Inline>
  </StyledPillWrapper>
);

export default StatusPill;
