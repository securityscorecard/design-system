import styled from 'styled-components';
import { prop } from 'ramda';

import { createSpacings } from '../../utils';
import { FlexContainerProps } from './FlexContainer.types';

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  align-items: ${prop('alignItems')};
  justify-content: ${prop('justifyContent')};
  flex-direction: ${prop('flexDirection')};
  flex-grow: ${prop('flexGrow')};
  flex-shrink: ${prop('flexShrink')};
  flex-wrap: ${prop('flexWrap')};
  ${createSpacings};
`;

export default FlexContainer;
