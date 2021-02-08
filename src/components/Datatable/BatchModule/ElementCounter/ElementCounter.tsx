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

const ElementCounter: React.FC<ElementCounterProps> = ({
  totalLength,
  selectedLength = 0,
}) => {
  const content = getCounterContent(totalLength, selectedLength);

  return (
    <H3
      margin="none"
      padding={{ horizontal: 0.4 }}
      variant={HeadingVariants.secondary}
    >
      {content}
    </H3>
  );
};

ElementCounter.propTypes = {
  totalLength: PropTypes.number.isRequired,
  selectedLength: PropTypes.number,
};

export default ElementCounter;
