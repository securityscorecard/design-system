import React from 'react';
import PropTypes from 'prop-types';

import { FlexContainer } from '../FlexContainer';
import { FilterRow } from './FilterRow';
import { FilterProps } from './Filters.types';
import { OptionPropType } from './Select/Select.types';

const Filters: React.FC<FilterProps> = ({ options }) => (
  <FlexContainer flexDirection="column">
    {options.map(({ id, ...rest }, index) => (
      <FilterRow key={id} id={id} isFirstRow={index === 0} {...rest} />
    ))}
  </FlexContainer>
);

export default Filters;

Filters.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      conditionOptions: PropTypes.arrayOf(OptionPropType).isRequired,
      dataOptions: PropTypes.arrayOf(OptionPropType).isRequired,
      onRemove: PropTypes.func.isRequired,
      isFilterApplied: PropTypes.bool,
    }),
  ).isRequired,
};
