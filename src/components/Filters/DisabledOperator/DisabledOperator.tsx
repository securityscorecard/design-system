import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Text } from '../../typography';
import { TextSizes } from '../../typography/Text/Text.enums';
import { Padbox } from '../../layout';
import { getColor, getRadii, pxToRem } from '../../../utils';
import { SpaceSizes } from '../../../theme';
import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';

const Container = styled(Padbox)`
  display: flex;
  border-radius: ${getRadii('default')};
  background: ${getColor('neutral.200')};
  height: ${pxToRem(32)};
  text-transform: capitalize;
`;

const DisabledOperator: React.FC = ({ children }) => (
  <Container paddingSize={SpaceSizes.md} paddingType={PaddingTypes.squish}>
    <Text size={TextSizes.md}>{children}</Text>
  </Container>
);

export default DisabledOperator;

DisabledOperator.propTypes = {
  children: PropTypes.node.isRequired,
};
