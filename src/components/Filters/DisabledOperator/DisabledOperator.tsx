import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Text } from '../../typography';
import { TextSizes } from '../../typography/Text/Text.enums';
import { FlexContainer } from '../../FlexContainer';
import { getBorderRadius, getColor, pxToRem } from '../../../utils';

const Container = styled(FlexContainer)`
  background: ${getColor('graphite3H')};
  border-radius: ${getBorderRadius};
  height: ${pxToRem(32)};
  padding: ${pxToRem(8, 16)};
  text-transform: capitalize;
`;

const DisabledOperator: React.FC = ({ children }) => (
  <Container alignItems="center">
    <Text size={TextSizes.md}>{children}</Text>
  </Container>
);

export default DisabledOperator;

DisabledOperator.propTypes = {
  children: PropTypes.node.isRequired,
};
