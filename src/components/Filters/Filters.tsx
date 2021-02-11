import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { equals } from 'ramda';
import styled from 'styled-components';

import { FlexContainer } from '../FlexContainer';
import { FilterRow } from './FilterRow';
import { BottomBar } from './BottomBar';
import { DataPointPropTypes, Filter, FiltersProps } from './Filters.types';
import { DateRangePickerPropTypes } from './inputs/DateRangePicker/DateRangePicker.types';
import { Operators } from './Filters.enums';

const generateId = ({ operator, dataPoint, condition }, index) =>
  `${operator}-${dataPoint}-${condition}-${index}`;

const getDefaultCondition = (dataPoints) =>
  dataPoints[0].conditions.find(({ isDefault }) => isDefault).value;

const getDefaultData = (dataPoints) => [
  {
    operator: Operators.and,
    dataPoint: dataPoints[0].value,
    condition: getDefaultCondition(dataPoints),
    input: undefined,
    isApplied: false,
  },
];

const FiltersContainer = styled(FlexContainer)`
  width: 100%;
`;

const Filters: React.FC<FiltersProps> = ({
  dataPoints,
  data = getDefaultData(dataPoints),
  onApply,
  onChange,
  onClose,
  onCancel,
  isLoading = false,
}) => {
  const [filtersValues, setFiltersValues] = useState<Array<Filter>>(data);
  const [isRemoveDisabled, setRemoveDisabled] = useState(false);

  useEffect(() => {
    const defaultData = getDefaultData(dataPoints);
    if (equals(filtersValues, defaultData)) {
      setRemoveDisabled(true);
    } else {
      setRemoveDisabled(false);
    }
  }, [filtersValues, dataPoints]);

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

  const handleDataPointChange = (dataPoint, condition, index) => {
    const newFilters = [...filtersValues];
    newFilters[index].dataPoint = dataPoint;
    newFilters[index].condition = condition;
    newFilters[index].input = undefined;
    newFilters[index].isApplied = false;

    setFiltersValues(newFilters);

    callOnChange();
  };

  const handleConditionChange = (condition, index, areComponentsEqual) => {
    const newFilters = [...filtersValues];
    newFilters[index].condition = condition;
    if (!areComponentsEqual) {
      newFilters[index].input = undefined;
    }
    newFilters[index].isApplied = false;

    setFiltersValues(newFilters);

    callOnChange();
  };

  const handleInputChange = (input, index) => {
    const newFilters = [...filtersValues];
    newFilters[index].input = input;
    newFilters[index].isApplied = false;

    setFiltersValues(newFilters);

    callOnChange();
  };

  const handleAddRow = () => {
    const newFilters = [...filtersValues];
    const newRow = {
      operator: newFilters[0].operator,
      dataPoint: dataPoints[0].value,
      condition: getDefaultCondition(dataPoints),
      input: undefined,
      isApplied: false,
    };

    setFiltersValues([...newFilters, newRow]);

    callOnChange();
  };

  const handleClearAll = () => {
    const newRow = getDefaultData(dataPoints);

    setFiltersValues(newRow);

    callOnChange();
  };

  const handleApply = () => {
    const newFilters = filtersValues.map((fields) => ({
      ...fields,
      isApplied: true,
    }));
    setFiltersValues(newFilters);

    onApply(filtersValues);
  };

  const handleRemoveFilter = (index) => () => {
    let newFilters;
    if (filtersValues.length > 1) {
      newFilters = [...filtersValues];
      newFilters.splice(index, 1);
    } else {
      newFilters = getDefaultData(dataPoints);
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
            dataPoints={dataPoints}
            index={index}
            isRemoveDisabled={isRemoveDisabled}
            onConditionChange={handleConditionChange}
            onDataPointChange={handleDataPointChange}
            onInputChange={handleInputChange}
            onOperatorChange={handleOperatorChange}
            onRemove={handleRemoveFilter}
            {...filtersValues[index]}
          />
        );
      })}
      <BottomBar
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
  dataPoints: PropTypes.arrayOf(DataPointPropTypes).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      operator: PropTypes.oneOf(Object.values(Operators)).isRequired,
      dataPoint: PropTypes.string.isRequired,
      condition: PropTypes.string.isRequired,
      input: PropTypes.oneOfType([PropTypes.string, DateRangePickerPropTypes]),
      isApplied: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onApply: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  onChange: PropTypes.func,
};
