import type { BatchModuleProps } from './BatchModule.types';

import { useEffect, useState } from 'react';
import { all, isEmpty } from 'ramda';
import { isNonEmptyArray } from 'ramda-adjunct';
import styled from 'styled-components';

import { pxToRem } from '../../../utils';
import { SpaceSizes } from '../../../theme';
import { SSCIconNames } from '../../../theme/icons/icons.enums';
import { Inline, Padbox } from '../../layout';
import { ColumnsControls } from '../components/ColumnsControls';
import { ControlButton } from '../components/ControlButton';
import { BatchActions } from './BatchActions';
import { ElementCounter } from './ElementCounter';
import { DatatableStore } from '../Datatable.store';

const BatchModuleWrapper = styled(Padbox)`
  min-height: ${pxToRem(64)};
`;

const BatchModule = ({
  actions,
  hasSelection,
  hasOnlyPerPageSelection,
  dataSize,

  columns: {
    isButtonDisplayed,
    defaultIsColumnsControlsOpen = false,
    defaultIsColumnsControlsApplied = false,
  },
}: BatchModuleProps) => {
  const [isColumnsActive, setIsColumnsActive] = useState(
    defaultIsColumnsControlsOpen,
  );
  const [, setIsColumnsApplied] = useState(defaultIsColumnsControlsApplied);
  useEffect(() => {
    const unsubscribe = DatatableStore.subscribe(
      (s) => ({ columnOrder: s.columnOrder, hiddenColumns: s.hiddenColumns }),
      ({ columnOrder, hiddenColumns }) => {
        if (all(isEmpty, [columnOrder, hiddenColumns])) {
          setIsColumnsApplied(false);
        }
      },
    );
    return () => {
      unsubscribe();
    };
  }, []);

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

export default BatchModule;
