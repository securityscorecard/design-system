import { ReactNode } from 'react';
import styled from 'styled-components';

import { Text as BaseText } from '../../Text';
import { TextSizes } from '../../Text/Text.enums';
import { Padbox } from '../../layout';
import { getColor, getFormStyle } from '../../../utils';
import { SpaceSizes } from '../../../theme';
import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';

const Container = styled(Padbox)`
  display: flex;
  border-radius: var(--sscds-radii-input);
  background: ${getColor('neutral.200')};
  text-transform: capitalize;
  height: ${getFormStyle('fieldHeight')};
  align-items: center;
`;

const Text = styled(BaseText)`
  line-height: unset;
`;

const DisabledOperator = ({ children }: { children: ReactNode }) => (
  <Container paddingSize={SpaceSizes.md} paddingType={PaddingTypes.squish}>
    <Text size={TextSizes.md}>{children}</Text>
  </Container>
);

export default DisabledOperator;
