import React, { useState } from 'react';
import { isNonEmptyArray } from 'ramda-adjunct';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { pxToRem } from '../../../utils';
import { SpaceSizes } from '../../../theme';
import { SSCIconNames } from '../../../theme/icons/icons.enums';
import { Inline, Padbox } from '../../layout';
import { ColumnsControls } from '../components/ColumnsControls';
import { ControlButton } from '../components/ControlButton';
import { BatchActions } from './BatchActions';
import { ElementCounter } from './ElementCounter';
import { BatchModuleProps } from './BatchModule.types';

const BatchModuleWrapper = styled(Padbox)`
  min-height: ${pxToRem(64)};
`;

const BatchModule: React.FC<BatchModuleProps> = ({
  actions,
  hasSelection,
  hasOnlyPerPageSelection,
  dataSize,
  columns: {
    isButtonDisplayed,
    defaultIsColumnOrderingOpen = false,
    defaultIsColumnOrderingApplied = false,
  },
}) => {
  const [isColumnsActive, setIsColumnsActive] = useState(
    defaultIsColumnOrderingOpen,
  );
  const [isColumnsApplied, setIsColumnsApplied] = useState(
    defaultIsColumnOrderingApplied,
  );

  return (
    <BatchModuleWrapper paddingSize={SpaceSizes.md}>
      <Inline align="center" justify="space-between">
        <Inline align="center">
          {isButtonDisplayed && (
            <ColumnsControls
              isOpen={isColumnsActive}
              onApply={(shouldApply) => {
                setIsColumnsApplied(shouldApply);
                setIsColumnsActive((prev) => !prev);
              }}
              onClose={() => {
                setIsColumnsActive((prev) => !prev);
              }}
              onOpen={() => {
                setIsColumnsActive((prev) => !prev);
              }}
            >
              <ControlButton
                iconName={SSCIconNames.reorder}
                isActive={isColumnsActive}
                isApplied={isColumnsApplied}
                label="Columns"
                onClick={() => {
                  setIsColumnsActive((prev) => !prev);
                }}
              />
            </ColumnsControls>
          )}
          <ElementCounter
            dataSize={dataSize}
            hasOnlyPerPageSelection={hasOnlyPerPageSelection}
            hasSelection={hasSelection}
          />
        </Inline>
        {isNonEmptyArray(actions) && <BatchActions actions={actions} />}
      </Inline>
    </BatchModuleWrapper>
  );
};

BatchModule.propTypes = {
  ...BatchActions.propTypes,
  ...ElementCounter.propTypes,
  columns: PropTypes.exact({
    isButtonDisplayed: PropTypes.bool,
    defaultIsColumnOrderingOpen: PropTypes.bool,
    defaultIsColumnOrderingApplied: PropTypes.bool,
  }),
};

export default BatchModule;
