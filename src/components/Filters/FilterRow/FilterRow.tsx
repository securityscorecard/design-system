import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  __,
  both,
  curry,
  defaultTo,
  equals,
  filter,
  find,
  has,
  hasPath,
  head,
  identity,
  includes,
  map,
  memoizeWith,
  path,
  pipe,
  pluck,
  prop,
  propEq,
  propOr,
} from 'ramda';
import { isArray, isNotUndefined, isNull, isUndefined } from 'ramda-adjunct';

import { FlexContainer } from '../../FlexContainer';
import { StateButton } from '../StateButton';
import { SelectFilter } from '../components';
import { DisabledOperator } from '../DisabledOperator';
import { FilterRowProps, SplitFieldProps } from './FilterRow.types';
import {
  ComponentWithProps as ComponentWithPropsTypes,
  FieldPropTypes,
} from '../Filters.types';
import { DateRangePickerPropTypes } from '../components/DateRangePicker/DateRangePicker.types';
import { Operators } from '../Filters.enums';
import { operatorOptions } from '../data/operatorOptions';
import { getFormStyle, pxToRem } from '../../../utils/helpers';
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

const Units = styled.span`
  flex-shrink: 0;
  color: ${getFormStyle('color')};
  font-size: ${pxToRem(13)};
  line-height: ${pxToRem(15)};
  margin-left: ${pxToRem(8)};
  min-width: ${pxToRem(64)};
`;

export const getDefaultComponentValue = (
  defaultConditionComponent: React.ReactNode | ComponentWithPropsTypes,
): string | undefined => {
  const componentDefaultValue = path(
    ['props', 'defaultValue'],
    defaultConditionComponent,
  );

  return propOr(componentDefaultValue, 'value', componentDefaultValue);
};

const getFieldConditions = memoizeWith(identity, (fieldValue, fields) =>
  pipe(find(propEq('value', fieldValue)), prop('conditions'))(fields),
);

const getDefaultCondition = (fieldValue, fields) => {
  const fieldConditions = getFieldConditions(fieldValue, fields);

  const {
    value: defaultConditionValue,
    component: defaultConditionComponent,
  } = pipe(
    find(propEq('isDefault', true)),
    defaultTo(head(fieldConditions)),
  )(fieldConditions);

  const defaultComponentValue = getDefaultComponentValue(
    defaultConditionComponent,
  );

  return {
    defaultConditionValue,
    defaultComponentValue,
  };
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

const isArrayOfOptionObjects = both(isArray, pipe(head, has('value')));

const renderComponentWithProps = (Component, value, onChange) => {
  const { component: ComponentWithProps, props } = Component;
  const { units } = props;

  return units ? (
    <FlexContainer alignItems="center">
      <ComponentWithProps value={value} onChange={onChange} {...props} />
      <Units>{units}</Units>
    </FlexContainer>
  ) : (
    <ComponentWithProps value={value} onChange={onChange} {...props} />
  );
};

const renderSelectComponent = (Component, value, onChange) => {
  const {
    component: SelectComponent,
    props: { options, isMulti, placeholder = 'Category' },
  } = Component;

  const valueOptions = isArray(value)
    ? filter(pipe(prop('value'), includes(__, value)))(options)
    : find(propEq('value', value))(options);

  return (
    <SelectComponent
      isMulti={isMulti}
      options={options}
      placeholder={placeholder}
      value={valueOptions}
      onChange={onChange}
    />
  );
};

const renderComponent = (Component, value, onChange) => {
  if (isUndefined(Component)) return null;

  // Select
  if (
    typeof Component === 'object' &&
    hasPath(['props', 'options'], Component)
  ) {
    return renderSelectComponent(Component, value, onChange);
  }
  // Component with props
  if (typeof Component === 'object' && has('props', Component)) {
    return renderComponentWithProps(Component, value, onChange);
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
  isDefaultState,
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
    const {
      defaultConditionValue,
      defaultComponentValue,
    } = getDefaultCondition(selectedFieldValue, fields);

    onFieldChange(
      selectedFieldValue,
      defaultConditionValue,
      defaultComponentValue,
      index,
    );
  };

  const handleConditionChange = ({ value: selectedConditionValue }) => {
    const newComponent = getConditionComponent(
      selectedConditionValue,
      field.value,
      fields,
    );

    const defaultNewComponentValue = path(
      ['props', 'defaultValue', 'value'],
      newComponent,
    );

    const areComponentsEqual = equals(component, newComponent);

    const newComponentValue =
      defaultNewComponentValue ||
      (areComponentsEqual ? componentValue : undefined);

    onConditionChange(selectedConditionValue, newComponentValue, index);
  };

  const handleValueChange = (value) => {
    // default value
    if (isNull(value) && hasPath(['props', 'defaultValue'], component)) {
      const defaultValue = path(['props', 'defaultValue', 'value'], component);
      onValueChange(defaultValue, index);
      // Input, Number, Integer, Count
    } else if (has('target', value)) {
      onValueChange(value.target.value, index);
      // Select
    } else if (has('value', value)) {
      onValueChange(value.value, index);
      // MultiSelect
    } else if (isArrayOfOptionObjects(value)) {
      const arrayOfValues = pluck('value', value);
      onValueChange(arrayOfValues, index);
      // DataRangePicker, SingleDatePicker, TagsInput
    } else {
      onValueChange(value, index);
    }
  };

  return (
    <FlexContainer margin={{ bottom: 0.5 }}>
      {!isDefaultState && (
        <StateButton index={index} isApplied={isApplied} onClick={onRemove} />
      )}
      <SplitField $width={72}>
        {index === 1 ? (
          <SelectFilter
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
        <SelectFilter
          options={fieldOptions}
          value={field}
          onChange={handleFieldChange}
        />
      </SplitField>
      <SplitField $width={144}>
        <SelectFilter
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
  isDefaultState: PropTypes.bool.isRequired,
  onOperatorChange: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onConditionChange: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.instanceOf(Date),
    DateRangePickerPropTypes,
  ]),
};
