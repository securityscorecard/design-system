import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isPositive } from 'ramda-adjunct';
import styled from 'styled-components';

import { H4 } from '../../../typography';
import { HeadingVariants } from '../../../typography/Heading/Heading.enums';
import {
  abbreviateNumber,
  getColor,
  getFontSize,
  getSpace,
  pxToRem,
} from '../../../../utils';
import { Dropdown } from '../../Dropdown';
import { Icon } from '../../../Icon';
import { SSCIconNames } from '../../../../theme/icons/icons.enums';
import { DatatableStore } from '../../Datatable.store';
import { ElementCounterProps } from './ElementCounter.types';
import { Inline, Padbox } from '../../../layout';
import { SpaceSizes } from '../../../../theme';
import { PaddingTypes } from '../../../layout/Padbox/Padbox.enums';

const SelectionButton = styled.button`
  display: inline-flex;
  align-self: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  height: 100%;
  padding: ${getSpace(SpaceSizes.xs)};
  font-size: ${getFontSize('lg')};
  color: ${getColor('graphite3B')};

  &:hover {
    color: ${getColor('blueberryClassic')};
  }
`;

export const getCounterContent = (
  totalLength: number,
  selectedLength = 0,
): React.ReactElement => (
  <span data-testid="counter-content">
    {isPositive(selectedLength) && isPositive(totalLength)
      ? `${abbreviateNumber(selectedLength)} of ${abbreviateNumber(
          totalLength,
        )} selected`
      : isPositive(totalLength)
      ? abbreviateNumber(totalLength)
      : 'No data'}
  </span>
);

const ElementCounterWrapper = ({ children, ...props }) => (
  <Padbox paddingSize={SpaceSizes.sm} paddingType={PaddingTypes.squish}>
    <Inline align="center" gap={SpaceSizes.xs} {...props}>
      {children}
    </Inline>
  </Padbox>
);

const CounterText = styled(H4).attrs(() => ({
  margin: 'none',
  variant: HeadingVariants.secondary,
}))`
  line-height: ${pxToRem(24)};
`;

const ElementCounter: React.FC<ElementCounterProps> = ({
  dataSize,
  hasSelection,
  hasOnlyPerPageSelection,
}) => {
  const { selectedIds, hasExclusiveSelection } = DatatableStore.useState(
    (s) => ({
      selectedIds: s.selectedIds,
      hasExclusiveSelection: s.hasExclusiveSelection,
    }),
  );

  const [localSelectedLength, setLocalSelectedLength] = useState(
    selectedIds.length || 0,
  );

  useEffect(() => {
    setLocalSelectedLength(selectedIds.length);
  }, [selectedIds]);

  const computedSelectedLength = hasExclusiveSelection
    ? dataSize - localSelectedLength
    : localSelectedLength;

  const content = getCounterContent(dataSize, computedSelectedLength);

  const handleSelectAllClick = () => {
    setLocalSelectedLength(0);
    DatatableStore.update((s) => {
      s.hasExclusiveSelection = true;
      s.shouldResetSelectedRows = true;
    });
  };

  const handleSelectNoneClick = () => {
    setLocalSelectedLength(0);
    DatatableStore.update((s) => {
      s.hasExclusiveSelection = false;
      s.shouldResetSelectedRows = true;
    });
  };

  if (!hasSelection) {
    return (
      <ElementCounterWrapper>
        <CounterText>{content}</CounterText>
      </ElementCounterWrapper>
    );
  }

  if (hasOnlyPerPageSelection) {
    return (
      <ElementCounterWrapper>
        <CounterText>{content}</CounterText>
        {localSelectedLength > 0 && (
          <SelectionButton
            aria-label="Select None"
            title="Select None"
            type="button"
            onClick={handleSelectNoneClick}
          >
            <Icon name={SSCIconNames.timesSolid} />
          </SelectionButton>
        )}
      </ElementCounterWrapper>
    );
  }

  return (
    <ElementCounterWrapper>
      <CounterText>{content}</CounterText>
      {dataSize > 0 && (
        <Dropdown
          actions={[
            {
              name: 'select-all',
              label: 'Select All',
              onClick: handleSelectAllClick,
            },
            {
              name: 'select-none',
              label: 'Select None',
              onClick: handleSelectNoneClick,
            },
          ]}
        >
          <SelectionButton
            aria-label="Selection options"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Icon
              data-testid="selection-dropdown"
              name={SSCIconNames.caretDown}
            />
          </SelectionButton>
        </Dropdown>
      )}
    </ElementCounterWrapper>
  );
};

ElementCounter.propTypes = {
  dataSize: PropTypes.number.isRequired,
  hasSelection: PropTypes.bool.isRequired,
  hasOnlyPerPageSelection: PropTypes.bool.isRequired,
};

export default ElementCounter;
