import type { FlexContainerProps } from './FlexContainer.types';

import styled from 'styled-components';
import { prop } from 'ramda';

import { createSpacings } from '../../utils';

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  align-items: ${prop('alignItems')};
  justify-content: ${prop('justifyContent')};
  flex-flow: ${prop('flexDirection')} ${prop('flexWrap')};
  flex-grow: ${prop('flexGrow')};
  flex-shrink: ${prop('flexShrink')};
  ${createSpacings};
`;

export default FlexContainer;
