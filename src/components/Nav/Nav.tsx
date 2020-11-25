import React from 'react';

import { FlexContainer } from '../FlexContainer';
import { FlexContainerProps } from '../FlexContainer/FlexContainer.types';

const Nav: React.FC<FlexContainerProps> = (props) => (
  <FlexContainer as="nav" {...props} />
);

Nav.propTypes = FlexContainer.propTypes;

export default Nav;
