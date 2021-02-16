import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { equals } from 'ramda';
import styled from 'styled-components';

import { FlexContainer } from '../FlexContainer';
import { FilterRow } from './FilterRow';
import { BottomBar } from './BottomBar';
import { FieldPropTypes, Filter, FiltersProps } from './Filters.types';
import { DateRangePickerPropTypes } from './components/DateRangePicker/DateRangePicker.types';
import { Operators } from './Filters.enums';

const generateId = ({ operator, field, condition }, index) =>
  `${operator}-${field}-${condition}-${index}`;

const getDefaultCondition = (fields) =>
  (
    fields[0].conditions.find(({ isDefault }) => isDefault) ||
    fields[0].conditions[0]
  ).value;

const getDefaultState = (fields) => [
  {
    operator: Operators.and,
    field: fields[0].value,
    condition: getDefaultCondition(fields),
    value: undefined,
    isApplied: false,
  },
];

const FiltersContainer = styled(FlexContainer)`
  width: 100%;
`;

const Filters: React.FC<FiltersProps> = ({
  fields,
  state = getDefaultState(fields),
  onApply,
  onChange,
  onClose,
  onCancel,
  isLoading = false,
}) => {
  const [filtersValues, setFiltersValues] = useState<Array<Filter>>(state);
  const [isRemoveDisabled, setRemoveDisabled] = useState(false);
  const [hasUnappliedFilters, setHasUnappliedFilters] = useState(false);

  useEffect(() => {
    const defaultState = getDefaultState(fields);
    if (equals(filtersValues, defaultState)) {
      setRemoveDisabled(true);
    } else {
      setRemoveDisabled(false);
    }
  }, [filtersValues, fields]);

  useEffect(() => {
    const someApplied = filtersValues.some(({ isApplied }) => isApplied);
    const someUnapplied = filtersValues.some(({ isApplied }) => !isApplied);

    setHasUnappliedFilters(someApplied && someUnapplied);
  }, [filtersValues]);

  const callOnChange = () => {
    if (typeof onChange === 'function') {
      onChange(filtersValues);
    }
  };

  const handleOperatorChange = ({ value }) => {
    const newFilters = filtersValues.map((row) => ({
      ...row,
      operator: value,
      isApplied: false,
    }));

    setFiltersValues(newFilters);

    callOnChange();
  };

  const handleFieldChange = (field, condition, value, index) => {
    const newFilters = [...filtersValues];
    newFilters[index].field = field;
    newFilters[index].condition = condition;
    newFilters[index].value = value;
    newFilters[index].isApplied = false;

    setFiltersValues(newFilters);

    callOnChange();
  };

  const handleConditionChange = (condition, index, areComponentsEqual) => {
    const newFilters = [...filtersValues];
    newFilters[index].condition = condition;
    if (!areComponentsEqual) {
      newFilters[index].value = undefined;
    }
    newFilters[index].isApplied = false;

    setFiltersValues(newFilters);

    callOnChange();
  };

  const handleValueChange = (value, index) => {
    const newFilters = [...filtersValues];
    newFilters[index].value = value;
    newFilters[index].isApplied = false;

    setFiltersValues(newFilters);

    callOnChange();
  };

  const handleAddRow = () => {
    const newFilters = [...filtersValues];
    const newRow = {
      operator: newFilters[0].operator,
      field: fields[0].value,
      condition: getDefaultCondition(fields),
      value: undefined,
      isApplied: false,
    };

    setFiltersValues([...newFilters, newRow]);

    callOnChange();
  };

  const handleClearAll = () => {
    const newRow = getDefaultState(fields);

    setFiltersValues(newRow);

    callOnChange();
  };

  const handleApply = () => {
    const newFilters = filtersValues.map((filter) => ({
      ...filter,
      isApplied: true,
    }));
    setFiltersValues(newFilters);

    onApply(newFilters);
  };

  const handleRemoveFilter = (index) => () => {
    let newFilters;
    if (filtersValues.length > 1) {
      newFilters = [...filtersValues];
      newFilters.splice(index, 1);
    } else {
      newFilters = getDefaultState(fields);
    }

    setFiltersValues(newFilters);

    callOnChange();
  };

  return (
    <FiltersContainer flexDirection="column">
      {filtersValues.map((props, index) => {
        const id = generateId(props, index);
        return (
          <FilterRow
            key={id}
            fields={fields}
            index={index}
            isRemoveDisabled={isRemoveDisabled}
            onConditionChange={handleConditionChange}
            onFieldChange={handleFieldChange}
            onOperatorChange={handleOperatorChange}
            onRemove={handleRemoveFilter}
            onValueChange={handleValueChange}
            {...filtersValues[index]}
          />
        );
      })}
      <BottomBar
        hasUnappliedFilters={hasUnappliedFilters}
        isLoading={isLoading}
        onAdd={handleAddRow}
        onApply={handleApply}
        onCancel={onCancel}
        onClearAll={handleClearAll}
        onClose={onClose}
      />
    </FiltersContainer>
  );
};

export default Filters;

Filters.propTypes = {
  fields: PropTypes.arrayOf(FieldPropTypes).isRequired,
  onApply: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  state: PropTypes.arrayOf(
    PropTypes.exact({
      operator: PropTypes.oneOf(Object.values(Operators)).isRequired,
      field: PropTypes.string.isRequired,
      condition: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date),
        DateRangePickerPropTypes,
      ]),
      isApplied: PropTypes.bool.isRequired,
    }),
  ),
  isLoading: PropTypes.bool,
  onChange: PropTypes.func,
};
