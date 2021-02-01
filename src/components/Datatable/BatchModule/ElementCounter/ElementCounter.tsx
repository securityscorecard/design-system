import React from 'react';
import PropTypes from 'prop-types';
import { isPositive } from 'ramda-adjunct';

import { H3, Text } from '../../../typography';
import { HeadingVariants } from '../../../typography/Heading/Heading.enums';
import { TextSizes, TextVariants } from '../../../typography/Text/Text.enums';
import { ElementCounterProps } from './ElementCounter.types';
import { abbreviateNumber } from '../../../../utils/helpers';

const LightText: React.FC = ({ children }) => (
  <Text size={TextSizes.inherit} variant={TextVariants.context}>
    {children}
  </Text>
);

const getCounterContent = (
  totalLength,
  filteredLength = 0,
  selectedLength = 0,
) => {
  if (isPositive(selectedLength)) {
    return (
      <>
        {abbreviateNumber(selectedLength)} <LightText>of</LightText>{' '}
        {abbreviateNumber(
          isPositive(filteredLength) ? filteredLength : totalLength,
        )}{' '}
        <LightText>selected</LightText>
      </>
    );
  }
  if (isPositive(filteredLength)) {
    return (
      <>
        {abbreviateNumber(filteredLength)} <LightText>of</LightText>{' '}
        {abbreviateNumber(totalLength)} <LightText>total</LightText>
      </>
    );
  }

  return (
    <>
      {abbreviateNumber(totalLength)} <LightText>total</LightText>
    </>
  );
};

const ElementCounter: React.FC<ElementCounterProps> = ({
  totalLength,
  filteredLength = 0,
  selectedLength = 0,
}) => {
  const content = getCounterContent(
    totalLength,
    filteredLength,
    selectedLength,
  );

  return (
    <H3 margin="none" variant={HeadingVariants.secondary}>
      {content}
    </H3>
  );
};

ElementCounter.propTypes = {
  totalLength: PropTypes.number.isRequired,
  filteredLength: PropTypes.number,
  selectedLength: PropTypes.number,
};

export default ElementCounter;
