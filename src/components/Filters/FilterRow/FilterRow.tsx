import type { ReactNode } from 'react';
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
  includes,
  map,
  path,
  pipe,
  pluck,
  prop,
  propEq,
  propOr,
} from 'ramda';
import { isArray, isNotUndefined, isNull, isUndefined } from 'ramda-adjunct';

import { Inline } from '../../layout';
import { Text } from '../../Text';
import { TextSizes } from '../../Text/Text.enums';
import { StateButton } from '../StateButton';
import { SelectFilter } from '../components';
import { DisabledOperator } from '../DisabledOperator';
import { FilterRowProps, SplitFieldProps } from './FilterRow.types';
import { ComponentWithProps as ComponentWithPropsTypes } from '../Filters.types';
import { pxToRem } from '../../../utils';
import { normalizeOptions, useFilterRow } from '../hooks/useFilterRow';
import { SpaceSizes } from '../../../theme';
import { useSafeTranslation } from '../../../hooks/useSafeTranslation';

const SplitField = styled.div<SplitFieldProps>`
  ${({ $width }) =>
    isNotUndefined($width)
      ? css`
          flex: 0 0 ${pxToRem($width)};
        `
      : css`
          width: 100%;
        `};
`;

const Units = styled(Text)`
  flex-shrink: 0;
  min-width: ${pxToRem(64)};
`;

export const getDefaultComponentValue = (
  defaultConditionComponent: ReactNode | ComponentWithPropsTypes,
): string | undefined => {
  const componentDefaultValue = path(
    ['props', 'defaultValue'],
    defaultConditionComponent,
  );

  return propOr(componentDefaultValue, 'value', componentDefaultValue);
};

const getFieldConditions = (fieldValue, fields) =>
  pipe(find(propEq('value', fieldValue)), prop('conditions'))(fields);

const getDefaultCondition = (fieldValue, fields) => {
  const fieldConditions = getFieldConditions(fieldValue, fields);

  const { value: defaultConditionValue, component: defaultConditionComponent } =
    pipe(
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

export const getOperatorOptions = (
  operatorValue: string,
  operatorOptions: { value: string; label: string }[],
) => find(propEq('value', operatorValue.toLowerCase()), operatorOptions);

const getFieldOptions = map(normalizeOptions);

const isArrayOfOptionObjects = both(isArray, pipe(head, has('value')));

const renderComponentWithProps = (
  Component,
  value,
  onChange,
  onError,
  isInvalid,
) => {
  const { component: ComponentWithProps, props } = Component;
  const { units } = props;
  return units ? (
    <Inline align="center" gap={SpaceSizes.sm} stretch="start">
      <ComponentWithProps
        isInvalid={isInvalid}
        value={value}
        onChange={onChange}
        onError={onError}
        {...props}
      />
      <Units size={TextSizes.md}>{units}</Units>
    </Inline>
  ) : (
    <ComponentWithProps
      isInvalid={isInvalid}
      value={value}
      onChange={onChange}
      onError={onError}
      {...props}
    />
  );
};

const renderSelectComponent = (Component, value, onChange) => {
  const {
    component: SelectComponent,
    props: { options, isMulti, placeholder = 'Please select…' },
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

const renderComponent = (Component, value, onChange, onError, isInvalid) => {
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
    return renderComponentWithProps(
      Component,
      value,
      onChange,
      onError,
      isInvalid,
    );
  }
  return (
    <Component
      isInvalid={isInvalid}
      value={value}
      onChange={onChange}
      onError={onError}
    />
  );
};

const FilterRow = ({
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
  isLoading,
  isInvalid,
  onError,
  isOperatorFieldEnabled,
  defaultOperator,
  hasApplyButton,
}: FilterRowProps) => {
  const { t } = useSafeTranslation();
  const { field, conditions, condition, component } = useFilterRow(
    fields,
    fieldValue,
    conditionValue,
  );
  const operatorOptions = [
    { value: 'and', label: t('sscds|filters.andOperator') },
    { value: 'or', label: t('sscds|filters.orOperator') },
  ];
  const operatorOption = getOperatorOptions(operatorValue, operatorOptions);

  const fieldOptions = getFieldOptions(fields);

  const handleFieldChange = ({ value: selectedFieldValue }) => {
    const { defaultConditionValue, defaultComponentValue } =
      getDefaultCondition(selectedFieldValue, fields);

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
    <Inline gap={SpaceSizes.sm}>
      {!isDefaultState ? (
        <StateButton
          index={index}
          isApplied={hasApplyButton ? isApplied : false}
          isLoading={isLoading}
          onClick={onRemove}
        />
      ) : null}
      <SplitField $width={96}>
        {!isOperatorFieldEnabled ? (
          <DisabledOperator>
            {/* First row starts by Where operator */}
            {index === 0 ? t('sscds|filters.whereOperator') : defaultOperator}
          </DisabledOperator>
        ) : index !== 1 ? (
          <DisabledOperator>
            {/* First row starts by Where operator */}
            {index === 0
              ? t('sscds|filters.whereOperator')
              : operatorOption.label}
          </DisabledOperator>
        ) : (
          <SelectFilter
            defaultValue={operatorOption}
            options={operatorOptions}
            onChange={onOperatorChange}
          />
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
        {renderComponent(
          component,
          componentValue,
          handleValueChange,
          onError,
          isInvalid,
        )}
      </SplitField>
    </Inline>
  );
};

export default FilterRow;
