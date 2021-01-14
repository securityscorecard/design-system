import React from 'react';
import styled from 'styled-components';

import { Text } from '../../typography';
import { TextSizes } from '../../typography/Text/Text.enums';
import { FlexContainer } from '../../FlexContainer';
import { getBorderRadius, getColor, pxToRem } from '../../../utils/helpers';

const Container = styled(FlexContainer)`
  background: ${getColor('graphite3H')};
  border-radius: ${getBorderRadius};
  width: '100%';
  height: ${pxToRem(32)};
  padding: ${pxToRem(8, 16)};
`;

const WhereOption: React.FC = () => (
  <Container alignItems="center">
    <Text size={TextSizes.md}>Where</Text>
  </Container>
);

export default WhereOption;
