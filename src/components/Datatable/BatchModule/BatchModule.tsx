import React from 'react';
import PropTypes from 'prop-types';

import { FlexContainer } from '../../FlexContainer';
import { BatchActions } from './BatchActions';
import { ElementCounter } from './ElementCounter';
import { BatchModuleProps } from './BatchModule.types';
import { useDatatable } from '../hooks/useDatatable';

const BatchModule: React.FC<BatchModuleProps> = ({
  actions,
  filteredLength,
}) => {
  const { totalLength = 0, selectedLength } = useDatatable();

  return (
    <FlexContainer
      alignItems="center"
      justifyContent="space-between"
      padding={{ vertical: 0.8, horizontal: 1.2 }}
    >
      <ElementCounter
        filteredLength={filteredLength}
        selectedLength={selectedLength}
        totalLength={totalLength}
      />
      <BatchActions actions={actions} />
    </FlexContainer>
  );
};

BatchModule.propTypes = {
  filteredLength: PropTypes.number,
  ...BatchActions.propTypes,
};

export default BatchModule;
