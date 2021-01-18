import React from 'react';
import PropTypes from 'prop-types';

import { FlexContainer } from '../FlexContainer';
import { FilterRow } from './FilterRow';
import { FilterProps } from './Filters.types';
import { OptionPropType } from './Select/Select.types';
import { InputTypes } from './Filters.enums';

const Filters: React.FC<FilterProps> = ({ dataOptions, rows }) => (
  <FlexContainer flexDirection="column">
    {rows.map(({ id, ...rest }, index) => (
      <FilterRow
        key={id}
        dataOptions={dataOptions}
        id={id}
        isFirstRow={index === 0}
        {...rest}
      />
    ))}
  </FlexContainer>
);

export default Filters;

Filters.propTypes = {
  dataOptions: PropTypes.arrayOf(OptionPropType).isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      conditionOptions: PropTypes.arrayOf(OptionPropType).isRequired,
      onRemove: PropTypes.func.isRequired,
      inputType: PropTypes.oneOf(Object.values(InputTypes)).isRequired,
      defaultCondition: OptionPropType,
      enumOptions: PropTypes.arrayOf(OptionPropType),
      isFilterApplied: PropTypes.bool,
      onAdd: PropTypes.func,
    }),
  ).isRequired,
};
