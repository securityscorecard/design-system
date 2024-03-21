import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isPositive } from 'ramda-adjunct';
import styled, { useTheme } from 'styled-components';

import { Text } from '../../../typographyLegacy';
import { HeadingVariants } from '../../../typographyLegacy/Heading/Heading.enums';
import {
  abbreviateNumber,
  getColor,
  getFontSize,
  getSpace,
  pxToRem,
} from '../../../../utils';
import { DropdownMenu } from '../../../_internal/BaseDropdownMenu';
import { Icon } from '../../../Icon';
import { SSCIconNames } from '../../../../theme/icons/icons.enums';
import { DatatableStore } from '../../Datatable.store';
import { ElementCounterProps } from './ElementCounter.types';
import { Inline } from '../../../layout';
import { SpaceSizes } from '../../../../theme';

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
  color: ${getColor('neutral.800')};

  &:hover {
    color: ${getColor('primary.500')};
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

function ElementCounterWrapper({ children, ...props }) {
  return (
    <Inline align="center" gap={SpaceSizes.xs} {...props}>
      {children}
    </Inline>
  );
}
ElementCounterWrapper.displayName = 'ElementCounterWrapper';

const CounterText = styled(Text).attrs(() => ({
  size: 'md',
  margin: 'none',
  variant: HeadingVariants.secondary,
}))`
  line-height: ${pxToRem(24)};
`;

const ElementCounter = ({
  dataSize,
  hasSelection,
  hasOnlyPerPageSelection,
}: ElementCounterProps) => {
  const theme = useTheme();
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
            <Icon
              name={SSCIconNames.times}
              style={{ fontSize: getFontSize('md', { theme }) }}
            />
          </SelectionButton>
        )}
      </ElementCounterWrapper>
    );
  }

  return (
    <ElementCounterWrapper>
      <CounterText>{content}</CounterText>
      {dataSize > 0 && (
        <DropdownMenu
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
          paneWidth={140}
        >
          <SelectionButton
            aria-label="Selection options"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Icon
              data-testid="selection-dropdown"
              name={SSCIconNames.angleDown}
              style={{ fontSize: getFontSize('md', { theme }) }}
            />
          </SelectionButton>
        </DropdownMenu>
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
