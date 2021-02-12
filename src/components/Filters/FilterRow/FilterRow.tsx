import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  curry,
  defaultTo,
  equals,
  find,
  has,
  hasPath,
  head,
  identity,
  map,
  memoizeWith,
  pipe,
  prop,
  propEq,
} from 'ramda';
import { isNotUndefined, isUndefined } from 'ramda-adjunct';

import { FlexContainer } from '../../FlexContainer';
import { StateButton } from '../StateButton';
import { Select } from '../components';
import { DisabledOperator } from '../DisabledOperator';
import { FilterRowProps, SplitFieldProps } from './FilterRow.types';
import { FieldPropTypes } from '../Filters.types';
import { DateRangePickerPropTypes } from '../components/DateRangePicker/DateRangePicker.types';
import { Operators } from '../Filters.enums';
import operatorOptions from '../data/operator-options.json';
import { pxToRem } from '../../../utils/helpers';
import { normalizeOptions, useFilterRow } from '../hooks/useFilterRow';

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

const getFieldConditions = memoizeWith(identity, (fieldValue, fields) =>
  pipe(find(propEq('value', fieldValue)), prop('conditions'))(fields),
);

const getDefaultCondition = (fieldValue, fields) => {
  const fieldConditions = getFieldConditions(fieldValue, fields);
  return pipe(
    find(propEq('isDefault', true)),
    defaultTo(head(fieldConditions)),
    prop('value'),
  )(fieldConditions);
};

const getConditionComponent = curry(
  (selectedConditionValue, fieldValue, fields) =>
    pipe(
      getFieldConditions,
      find(propEq('value', selectedConditionValue)),
      prop('component'),
    )(fieldValue, fields),
);

const getOperatorOptions = curry((operatorValue) =>
  find(propEq('value', operatorValue))(operatorOptions),
);

const getFieldOptions = map(normalizeOptions);

const renderComponent = (Component, value, onChange) => {
  if (isUndefined(Component)) return null;

  // Select
  if (
    typeof Component === 'object' &&
    hasPath(['props', 'options'], Component)
  ) {
    const {
      component: SelectComponent,
      props: { options, defaultValue },
    } = Component;

    // Update filters state by default value on initial load
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
  fields,
  index,
  onOperatorChange,
  onFieldChange,
  onConditionChange,
  onValueChange,
  onRemove,
  isRemoveDisabled,
  operator: operatorValue,
  field: fieldValue,
  condition: conditionValue,
  value: componentValue,
  isApplied,
}) => {
  const { field, conditions, condition, component } = useFilterRow(
    fields,
    fieldValue,
    conditionValue,
  );

  const operatorOption = getOperatorOptions(operatorValue);

  const fieldOptions = getFieldOptions(fields);

  const handleFieldChange = ({ value: selectedFieldValue }) => {
    const defaultConditionValue = getDefaultCondition(
      selectedFieldValue,
      fields,
    );

    onFieldChange(selectedFieldValue, defaultConditionValue, index);
  };

  const handleConditionChange = ({ value: selectedConditionValue }) => {
    const newComponent = getConditionComponent(
      selectedConditionValue,
      field.value,
      fields,
    );
    const areComponentsEqual = equals(component, newComponent);

    onConditionChange(selectedConditionValue, index, areComponentsEqual);
  };

  const handleValueChange = (value) => {
    if (has('target', value)) {
      onValueChange(value.target.value, index);
    } else if (has('value', value)) {
      onValueChange(value.value, index);
    } else {
      onValueChange(value, index);
    }
  };

  return (
    <FlexContainer margin={{ bottom: 0.5 }}>
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
          options={fieldOptions}
          value={field}
          onChange={handleFieldChange}
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
        {renderComponent(component, componentValue, handleValueChange)}
      </SplitField>
    </FlexContainer>
  );
};

export default FilterRow;

FilterRow.propTypes = {
  fields: PropTypes.arrayOf(FieldPropTypes).isRequired,
  index: PropTypes.number.isRequired,
  field: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  operator: PropTypes.oneOf(Object.values(Operators)).isRequired,
  isApplied: PropTypes.bool.isRequired,
  isRemoveDisabled: PropTypes.bool.isRequired,
  onOperatorChange: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onConditionChange: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, DateRangePickerPropTypes]),
};
