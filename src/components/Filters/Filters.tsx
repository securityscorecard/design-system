import React from 'react';
import PropTypes from 'prop-types';

import { FlexContainer } from '../FlexContainer';
import { FilterRow } from './FilterRow';
import { FilterProps } from './Filters.types';
import { OptionPropType } from './Select/Select.types';

const Filters: React.FC<FilterProps> = ({ options }) => (
  <FlexContainer flexDirection="column">
    {options.map(({ uuid, ...rest }, index) => (
      <FilterRow key={uuid} isFirstRow={index === 0} uuid={uuid} {...rest} />
    ))}
  </FlexContainer>
);

export default Filters;

const RowPropType = PropTypes.exact({
  uuid: PropTypes.string.isRequired,
  conditionOptions: PropTypes.arrayOf(OptionPropType).isRequired,
  dataOptions: PropTypes.arrayOf(OptionPropType).isRequired,
  onRemove: PropTypes.func.isRequired,
  isFilterApplied: PropTypes.bool,
});

Filters.propTypes = {
  options: PropTypes.arrayOf(RowPropType).isRequired,
};
