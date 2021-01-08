import React from 'react';
import PropTypes from 'prop-types';
import { isPositive } from 'ramda-adjunct';
import numeral from 'numeral';

import { H3, Text } from '../../typography';
import { ElementCounterProps } from './ElementCounter.types';
import { HeadingVariants } from '../../typography/Heading/Heading.enums';
import { TextSizes, TextVariants } from '../../typography/Text/Text.enums';

const LightText: React.FC = ({ children }) => (
  <Text size={TextSizes.inherit} variant={TextVariants.context}>
    {children}
  </Text>
);

const formatNumber = (value: number): string =>
  numeral(value).format('0.[00]a').toUpperCase();

const getCounterContent = (
  totalLength,
  filteredLength = 0,
  selectedLength = 0,
) => {
  if (isPositive(selectedLength)) {
    return (
      <>
        {formatNumber(selectedLength)} <LightText>of</LightText>{' '}
        {formatNumber(
          isPositive(filteredLength) ? filteredLength : totalLength,
        )}{' '}
        <LightText>selected</LightText>
      </>
    );
  }
  if (isPositive(filteredLength)) {
    return (
      <>
        {formatNumber(filteredLength)} <LightText>of</LightText>{' '}
        {formatNumber(totalLength)} <LightText>total</LightText>
      </>
    );
  }

  return (
    <>
      {formatNumber(totalLength)} <LightText>total</LightText>
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
