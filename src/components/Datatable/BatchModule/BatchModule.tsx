import React from 'react';
import { isNonEmptyArray } from 'ramda-adjunct';

import { FlexContainer } from '../../FlexContainer';
import { BatchActions } from './BatchActions';
import { ElementCounter } from './ElementCounter';
import { BatchModuleProps } from './BatchModule.types';

const BatchModule: React.FC<BatchModuleProps> = ({
  actions,
  shouldShowSelectionDropdown,
  dataSize,
}) => {
  return (
    <FlexContainer
      alignItems="center"
      justifyContent="space-between"
      padding={{ vertical: 0.8, left: 1.2, right: 0.8 }}
    >
      <ElementCounter
        dataSize={dataSize}
        shouldShowSelectionDropdown={shouldShowSelectionDropdown}
      />
      {isNonEmptyArray(actions) && <BatchActions actions={actions} />}
    </FlexContainer>
  );
};

BatchModule.propTypes = {
  ...BatchActions.propTypes,
  ...ElementCounter.propTypes,
};

export default BatchModule;
