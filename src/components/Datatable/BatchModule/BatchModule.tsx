import React from 'react';

import { FlexContainer } from '../../FlexContainer';
import { BatchActions } from './BatchActions';
import { ElementCounter } from './ElementCounter';
import { BatchModuleProps } from './BatchModule.types';
import { useDatatable } from '../hooks/useDatatable';

const BatchModule: React.FC<BatchModuleProps> = ({ actions }) => {
  const { totalLength = 0, selectedLength } = useDatatable();

  return (
    <FlexContainer
      alignItems="center"
      justifyContent="space-between"
      padding={{ vertical: 0.8, horizontal: 0.8 }}
    >
      <ElementCounter
        selectedLength={selectedLength}
        totalLength={totalLength}
      />
      <BatchActions actions={actions} />
    </FlexContainer>
  );
};

BatchModule.propTypes = {
  ...BatchActions.propTypes,
};

export default BatchModule;
