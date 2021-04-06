import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isPositive } from 'ramda-adjunct';
import styled from 'styled-components';

import { H3, Text } from '../../../typography';
import { HeadingVariants } from '../../../typography/Heading/Heading.enums';
import { TextSizes, TextVariants } from '../../../typography/Text/Text.enums';
import { abbreviateNumber, getColor, pxToRem } from '../../../../utils/helpers';
import { Dropdown } from '../../Dropdown';
import { Icon } from '../../../Icon';
import { SSCIconNames } from '../../../../theme/icons/icons.enums';
import { DatatableStore } from '../../Datatable.store';
import { ElementCounterProps } from './ElementCounter.types';

const LightText = styled(Text).attrs(() => ({
  size: TextSizes.inherit,
  variant: TextVariants.context,
}))``;

const SelectDropdownArrow = styled(Icon)`
  font-size: ${pxToRem(16)};
  margin: ${pxToRem(3, 8)};
`;

const SelectDropdown = styled(Dropdown)`
  &:hover ${SelectDropdownArrow} {
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

const ElementCounter: React.FC<ElementCounterProps> = ({
  dataSize,
  shouldShowSelectionDropdown,
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

  return (
    <H3 margin="none" variant={HeadingVariants.secondary}>
      {content}
      {shouldShowSelectionDropdown && dataSize > 0 && (
        <SelectDropdown
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
          <SelectDropdownArrow
            aria-label="Selection options"
            data-testid="selection-dropdown"
            name={SSCIconNames.caretDown}
          />
        </SelectDropdown>
      )}
    </H3>
  );
};

ElementCounter.propTypes = {
  dataSize: PropTypes.number.isRequired,
  shouldShowSelectionDropdown: PropTypes.bool.isRequired,
};

export default ElementCounter;
