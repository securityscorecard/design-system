import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { equals } from 'ramda';

import { FlexContainer } from '../../FlexContainer';
import { StateButton } from '../StateButton';
import { Select } from '../Select';
import { DisabledOperator } from '../DisabledOperator';
import { FilterRowProps, SplitFieldProps } from './FilterRow.types';
import { DataPointPropTypes } from '../Filters.types';
import { Operators } from '../Filters.enums';
import operatorOptions from '../data/operator-options.json';
import { pxToRem } from '../../../utils/helpers';
import { normalizeOptions, useFilterRow } from '../hooks/useFilterRow';

const Container = styled(FlexContainer)`
  margin-bottom: ${pxToRem(8)};
  &:last-of-type {
    margin-bottom: ${pxToRem(16)};
  }
`;

const SplitField = styled.div<SplitFieldProps>`
  width: ${({ width }) => pxToRem(width)};
  margin-right: ${pxToRem(6)};
  &:first-of-type {
    margin-left: ${pxToRem(6)};
  }
  &:last-of-type {
    margin-right: ${pxToRem(0)};
  }
`;

const getDefaultCondition = (dataPoints, dataPointValue) =>
  dataPoints
    .find(({ value }) => value === dataPointValue)
    .conditions.find(({ isDefault }) => isDefault).value;

const getConditionInput = (
  selectedConditionValue,
  dataPoints,
  dataPointValue,
) =>
  dataPoints
    .find(({ value }) => value === dataPointValue)
    .conditions.find(({ value }) => value === selectedConditionValue).input;

const getOperatorOptions = (operatorValue) =>
  operatorOptions.find(({ value }) => value === operatorValue);

const getDataPointOptions = (dataPoints) => dataPoints.map(normalizeOptions);

const FilterRow: React.FC<FilterRowProps> = ({
  dataPoints,
  index,
  onOperatorChange,
  onDataPointChange,
  onConditionChange,
  onInputChange,
  onRemove,
  isRemoveDisabled,
  operator: operatorValue,
  dataPoint: dataPointValue,
  condition: conditionValue,
  input: inputValue,
  isApplied,
}) => {
  const { dataPoint, conditions, condition, InputComponent } = useFilterRow(
    dataPoints,
    dataPointValue,
    conditionValue,
  );

  const operatorOption = getOperatorOptions(operatorValue);

  const dataPointOptions = getDataPointOptions(dataPoints);

  const handleDataPointChange = ({ value: selectedDataPointValue }) => {
    const defaultConditionValue = getDefaultCondition(
      dataPoints,
      selectedDataPointValue,
    );

    onDataPointChange(selectedDataPointValue, defaultConditionValue, index);
  };

  const handleConditionChange = ({ value: selectedConditionValue }) => {
    const NewInputComponent = getConditionInput(
      selectedConditionValue,
      dataPoints,
      dataPoint.value,
    );
    const areComponentsEqual = equals(InputComponent, NewInputComponent);

    onConditionChange(selectedConditionValue, index, areComponentsEqual);
  };

  const handleInputChange = (event) => {
    onInputChange(event.target.value, index);
  };

  return (
    <Container>
      <StateButton
        index={index}
        isApplied={isApplied}
        isDisabled={isRemoveDisabled}
        onClick={onRemove}
      />
      <SplitField width={72}>
        {index === 1 ? (
          <Select
            defaultValue={operatorOption}
            options={operatorOptions}
            onChange={onOperatorChange}
          />
        ) : (
          <DisabledOperator>
            {/* First row always includes Where operator */}
            {index === 0 ? 'where' : operatorValue}
          </DisabledOperator>
        )}
      </SplitField>
      <SplitField width={200}>
        <Select
          options={dataPointOptions}
          value={dataPoint}
          onChange={handleDataPointChange}
        />
      </SplitField>
      <SplitField width={144}>
        <Select
          options={conditions}
          value={condition}
          onChange={handleConditionChange}
        />
      </SplitField>
      <SplitField width={266}>
        {InputComponent && (
          <InputComponent value={inputValue} onChange={handleInputChange} />
        )}
      </SplitField>
    </Container>
  );
};

export default FilterRow;

FilterRow.propTypes = {
  dataPoints: PropTypes.arrayOf(DataPointPropTypes).isRequired,
  index: PropTypes.number.isRequired,
  dataPoint: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  operator: PropTypes.oneOf(Object.values(Operators)).isRequired,
  input: PropTypes.string.isRequired,
  isApplied: PropTypes.bool.isRequired,
  isRemoveDisabled: PropTypes.bool.isRequired,
  onOperatorChange: PropTypes.func.isRequired,
  onDataPointChange: PropTypes.func.isRequired,
  onConditionChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
