import React from 'react';

import { FlexContainer } from '../FlexContainer';
import { FlexContainerProps } from '../FlexContainer/FlexContainer.types';

const Nav: React.FC<FlexContainerProps> = (props) => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(`<Nav> and <NavItem> components are deprecated and will be removed soon.

Instead please use <Tabs> component (variant: \`text\`, size: \`large\`).

https://securityscorecard.github.io/design-system/alpha/?path=/docs/components-tabs--playground#text-tabs
`);
  }
  return <FlexContainer as="nav" {...props} />;
};

Nav.propTypes = FlexContainer.propTypes;

export default Nav;
