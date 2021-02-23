import React from 'react';

import { FlexContainer } from '../../FlexContainer';
import { BatchActions } from './BatchActions';
import { ElementCounter } from './ElementCounter';
import { BatchModuleProps } from './BatchModule.types';

const BatchModule: React.FC<BatchModuleProps> = ({ actions }) => {
  return (
    <FlexContainer
      alignItems="center"
      justifyContent="space-between"
      padding={{ vertical: 0.8, left: 1.2, right: 0.8 }}
    >
      <ElementCounter />
      <BatchActions actions={actions} />
    </FlexContainer>
  );
};

BatchModule.propTypes = {
  ...BatchActions.propTypes,
};

export default BatchModule;
