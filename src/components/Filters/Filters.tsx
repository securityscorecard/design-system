import React from 'react';
import PropTypes from 'prop-types';

import { FlexContainer } from '../FlexContainer';
import { FilterRow } from './FilterRow';
import { DataPointPropTypes, FiltersProps } from './Filters.types';
import { Operators } from './Filters.enums';

const generateId = ({ operator, dataPoint, condition, input }, index) =>
  `${operator}-${dataPoint}-${condition}-${input}-${index}`;

const Filters: React.FC<FiltersProps> = ({
  dataPoints,
  value,
  // TODO implement logic
  /* eslint-disable @typescript-eslint/no-unused-vars */
  onApply,
  onChange,
  /* eslint-enable */
}) => (
  <FlexContainer flexDirection="column">
    {value.map((props, index) => {
      const id = generateId(props, index);
      return <FilterRow key={id} dataPoints={dataPoints} id={id} {...props} />;
    })}
  </FlexContainer>
);

export default Filters;

Filters.propTypes = {
  dataPoints: PropTypes.arrayOf(DataPointPropTypes).isRequired,
  value: PropTypes.arrayOf(
    PropTypes.exact({
      operator: PropTypes.oneOf(Object.values(Operators)).isRequired,
      dataPoint: PropTypes.string.isRequired,
      condition: PropTypes.string.isRequired,
      input: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onApply: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};
