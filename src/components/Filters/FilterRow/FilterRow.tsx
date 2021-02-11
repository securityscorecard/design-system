import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  curry,
  defaultTo,
  equals,
  find,
  hasPath,
  identity,
  map,
  memoizeWith,
  pipe,
  prop,
  propEq,
} from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';

import { FlexContainer } from '../../FlexContainer';
import { StateButton } from '../StateButton';
import { Select } from '../inputs';
import { DisabledOperator } from '../DisabledOperator';
import { FilterRowProps, SplitFieldProps } from './FilterRow.types';
import { DataPointPropTypes } from '../Filters.types';
import { DateRangePickerPropTypes } from '../inputs/DateRangePicker/DateRangePicker.types';
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
  ${({ $width }) =>
    isNotUndefined($width)
      ? css`
          flex: 0 0 ${pxToRem($width)};
        `
      : css`
          width: 100%;
        `};
  margin-right: ${pxToRem(6)};
  &:first-of-type {
    margin-left: ${pxToRem(6)};
  }
  &:last-of-type {
    margin-right: ${pxToRem(0)};
  }
`;

const getDataPointConditions = memoizeWith(
  identity,
  (dataPointValue, dataPoints) =>
    pipe(find(propEq('value', dataPointValue)), prop('conditions'))(dataPoints),
);

const getDefaultCondition = pipe(
  getDataPointConditions,
  find(propEq('isDefault', true)),
  prop('value'),
);

const getConditionInput = curry(
  (selectedConditionValue, dataPointValue, dataPoints) =>
    pipe(
      getDataPointConditions,
      find(propEq('value', selectedConditionValue)),
      prop('input'),
    )(dataPointValue, dataPoints),
);

const getOperatorOptions = curry((operatorValue) =>
  find(propEq('value', operatorValue))(operatorOptions),
);

const getDataPointOptions = map(normalizeOptions);

const renderComponent = (Component, value, onChange) => {
  if (!Component) {
    return null;
  }

  /* Select */
  if (
    typeof Component === 'object' &&
    hasPath(['props', 'options'], Component)
  ) {
    const {
      Component: SelectComponent,
      props: { options, defaultValue },
    } = Component;

    /* Update filters state by default value on initial load */
    if (defaultValue && !value) {
      onChange(defaultValue.value);
    }

    const valueOptions = pipe(
      find(propEq('value', value)),
      defaultTo(defaultValue),
    )(options);

    return (
      <SelectComponent
        options={options}
        placeholder="Category"
        value={valueOptions}
        onChange={onChange}
      />
    );
  }

  return <Component value={value} onChange={onChange} />;
};

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
      selectedDataPointValue,
      dataPoints,
    );

    onDataPointChange(selectedDataPointValue, defaultConditionValue, index);
  };

  const handleConditionChange = ({ value: selectedConditionValue }) => {
    const NewInputComponent = getConditionInput(
      selectedConditionValue,
      dataPoint.value,
      dataPoints,
    );
    const areComponentsEqual = equals(InputComponent, NewInputComponent);

    onConditionChange(selectedConditionValue, index, areComponentsEqual);
  };

  const handleInputChange = (value) => {
    if (value.target) {
      onInputChange(value.target.value, index);
    } else if (value.value) {
      onInputChange(value.value, index);
    } else {
      onInputChange(value, index);
    }
  };

  return (
    <Container>
      <StateButton
        index={index}
        isApplied={isApplied}
        isDisabled={isRemoveDisabled}
        onClick={onRemove}
      />
      <SplitField $width={72}>
        {index === 1 ? (
          <Select
            defaultValue={operatorOption}
            options={operatorOptions}
            onChange={onOperatorChange}
          />
        ) : (
          <DisabledOperator>
            {/* First row starts by Where operator */}
            {index === 0 ? 'where' : operatorValue}
          </DisabledOperator>
        )}
      </SplitField>
      <SplitField $width={200}>
        <Select
          options={dataPointOptions}
          value={dataPoint}
          onChange={handleDataPointChange}
        />
      </SplitField>
      <SplitField $width={144}>
        <Select
          options={conditions}
          value={condition}
          onChange={handleConditionChange}
        />
      </SplitField>
      <SplitField>
        {renderComponent(InputComponent, inputValue, handleInputChange)}
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
  isApplied: PropTypes.bool.isRequired,
  isRemoveDisabled: PropTypes.bool.isRequired,
  onOperatorChange: PropTypes.func.isRequired,
  onDataPointChange: PropTypes.func.isRequired,
  onConditionChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  input: PropTypes.oneOfType([PropTypes.string, DateRangePickerPropTypes]),
};
