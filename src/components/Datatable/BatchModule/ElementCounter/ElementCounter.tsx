import React, { useCallback } from 'react';
import { isPositive } from 'ramda-adjunct';
import styled from 'styled-components';

import { H3, Text } from '../../../typography';
import { HeadingVariants } from '../../../typography/Heading/Heading.enums';
import { TextSizes, TextVariants } from '../../../typography/Text/Text.enums';
import { abbreviateNumber, getColor, pxToRem } from '../../../../utils/helpers';
import { useDatatable } from '../../hooks/useDatatable';
import { Dropdown } from '../../Dropdown';
import { Icon } from '../../../Icon';
import { SSCIconNames } from '../../../../theme/icons/icons.enums';

const LightText: React.FC = ({ children }) => (
  <Text size={TextSizes.inherit} variant={TextVariants.context}>
    {children}
  </Text>
);

const SelectDropdownArrow = styled(Icon)`
  font-size: ${pxToRem(16)};
  margin: ${pxToRem(3, 8)};
`;

const SelectDropdown = styled(Dropdown)`
  &:hover ${SelectDropdownArrow} {
    color: ${getColor('blueberryClassic')};
  }
`;

const getCounterContent = (totalLength, selectedLength = 0) => {
  if (isPositive(selectedLength)) {
    return (
      <>
        {abbreviateNumber(selectedLength)} <LightText>of</LightText>{' '}
        {abbreviateNumber(totalLength)} <LightText>selected</LightText>
      </>
    );
  }
  if (isPositive(totalLength)) {
    return <>{abbreviateNumber(totalLength)}</>;
  }

  return <LightText>No data</LightText>;
};

const ElementCounter: React.FC = () => {
  const {
    totalLength = 0,
    selectedLength,
    hasExclusionLogic,
    setHasExclusionLogic,
    hasSelection,
  } = useDatatable();
  const computedSelectedLength = hasExclusionLogic
    ? totalLength - selectedLength
    : selectedLength;

  const content = getCounterContent(totalLength, computedSelectedLength);
  const handleSelectClick = useCallback(
    (state) => {
      setHasExclusionLogic(state);
    },
    [setHasExclusionLogic],
  );

  return (
    <H3 margin="none" variant={HeadingVariants.secondary}>
      {content}
      {hasSelection && (
        <SelectDropdown
          actions={[
            {
              name: 'select-all',
              label: 'Select All',
              onClick: () => handleSelectClick(true),
            },
            {
              name: 'select-none',
              label: 'Select None',
              onClick: () => handleSelectClick(false),
            },
          ]}
        >
          <SelectDropdownArrow name={SSCIconNames.caretDown} />
        </SelectDropdown>
      )}
    </H3>
  );
};

export default ElementCounter;
