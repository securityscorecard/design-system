import React from 'react';
import { isNonEmptyArray } from 'ramda-adjunct';
import styled from 'styled-components';

import { BatchActions } from './BatchActions';
import { ElementCounter } from './ElementCounter';
import { BatchModuleProps } from './BatchModule.types';
import { Inline, Padbox } from '../../layout';
import { pxToRem } from '../../../utils';
import { SpaceSizes } from '../../../theme';

const BatchModuleWrapper = styled(Padbox)`
  min-height: ${pxToRem(64)};
`;

const BatchModule: React.FC<BatchModuleProps> = ({
  actions,
  hasSelection,
  hasOnlyPerPageSelection,
  dataSize,
}) => {
  return (
    <BatchModuleWrapper paddingSize={SpaceSizes.md}>
      <Inline align="center" justify="space-between">
        <ElementCounter
          dataSize={dataSize}
          hasOnlyPerPageSelection={hasOnlyPerPageSelection}
          hasSelection={hasSelection}
        />
        {isNonEmptyArray(actions) && <BatchActions actions={actions} />}
      </Inline>
    </BatchModuleWrapper>
  );
};

BatchModule.propTypes = {
  ...BatchActions.propTypes,
  ...ElementCounter.propTypes,
};

export default BatchModule;
