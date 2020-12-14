import React from 'react';
import styled from 'styled-components';

import { pxToRem } from '../../../utils/helpers';
import { FlexContainer } from '../../FlexContainer';

const BaseSidebar = styled(FlexContainer)`
  flex: 0 0 ${pxToRem(400)};
  padding-right: ${pxToRem(130)};
`;

const Sidebar: React.FC = ({ children }) => (
  <BaseSidebar flexDirection="column">{children}</BaseSidebar>
);

export default Sidebar;
