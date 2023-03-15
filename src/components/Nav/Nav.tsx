import React from 'react';

import { useLogger } from '../../hooks/useLogger';
import { Inline } from '../layout';
import { InlineProps } from '../layout/Inline/Inline';

const Nav: React.FC<InlineProps> = (props) => {
  const { warn } = useLogger('Nav');
  warn(`<Nav> and <NavItem> components are deprecated and will be removed soon.

Instead please use <Tabs> component (variant: \`text\`, size: \`large\`).

https://securityscorecard.github.io/design-system/alpha/?path=/docs/components-tabs--playground#text-tabs
`);

  return <Inline as="nav" {...props} />;
};

Nav.propTypes = Inline.propTypes;

export default Nav;
