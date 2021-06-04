import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isPositive } from 'ramda-adjunct';
import styled from 'styled-components';

import { H3, Text } from '../../../typography';
import { HeadingVariants } from '../../../typography/Heading/Heading.enums';
import { TextSizes, TextVariants } from '../../../typography/Text/Text.enums';
import { abbreviateNumber, getColor, pxToRem } from '../../../../utils';
import { Dropdown } from '../../Dropdown';
import { Icon } from '../../../Icon';
import { SSCIconNames } from '../../../../theme/icons/icons.enums';
import { DatatableStore } from '../../Datatable.store';
import { ElementCounterProps } from './ElementCounter.types';

const LightText = styled(Text).attrs(() => ({
  size: TextSizes.inherit,
  variant: TextVariants.context,
}))``;

const SelectionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  height: 100%;
  padding: ${pxToRem(6, 8)};
  font-size: ${pxToRem(16)};
  color: ${getColor('graphite3B')};

  &:hover {
    color: ${getColor('blueberryClassic')};
  }
`;

export const getCounterContent = (
  totalLength: number,
  selectedLength = 0,
): React.ReactElement => {
  if (isPositive(selectedLength) && isPositive(totalLength)) {
    return (
      <span data-testid="counter-content">
        {abbreviateNumber(selectedLength)} <LightText>of</LightText>{' '}
        {abbreviateNumber(totalLength)} <LightText>selected</LightText>
      </span>
    );
  }
  if (isPositive(totalLength)) {
    return (
      <span data-testid="counter-content">{abbreviateNumber(totalLength)}</span>
    );
  }

  return <LightText data-testid="counter-content">No data</LightText>;
};

const ElementCounterWrapper = ({ children, ...props }) => (
  <H3 margin="none" variant={HeadingVariants.secondary} {...props}>
    {children}
  </H3>
);

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
    return <ElementCounterWrapper>{content}</ElementCounterWrapper>;
  }

  if (hasOnlyPerPageSelection) {
    return (
      <ElementCounterWrapper>
        {content}
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
      {content}
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
