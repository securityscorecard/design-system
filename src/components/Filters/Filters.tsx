import React from 'react';
import PropTypes from 'prop-types';

import { FlexContainer } from '../FlexContainer';
import { FilterRow } from './FilterRow';
import { FilterProps } from './Filters.types';
import { OptionPropType } from './Select/Select.types';
import { InputTypes } from './Filters.enums';

const Filters: React.FC<FilterProps> = ({ dataPoints, rows }) => (
  <FlexContainer flexDirection="column">
    {rows.map(({ id, ...rest }, index) => (
      <FilterRow
        key={id}
        dataPoints={dataPoints}
        id={id}
        isFirstRow={index === 0}
        {...rest}
      />
    ))}
  </FlexContainer>
);

export default Filters;

Filters.propTypes = {
  dataPoints: PropTypes.arrayOf(
    PropTypes.exact({
      option: OptionPropType.isRequired,
      defaultCondition: OptionPropType,
    }),
  ).isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      conditions: PropTypes.arrayOf(
        PropTypes.exact({
          option: OptionPropType.isRequired,
          inputType: PropTypes.oneOf(Object.values(InputTypes)).isRequired,
          enumOptions: PropTypes.arrayOf(OptionPropType),
        }),
      ).isRequired,
      onRemove: PropTypes.func.isRequired,
      onAdd: PropTypes.func,
      isFilterApplied: PropTypes.bool,
    }),
  ).isRequired,
};
