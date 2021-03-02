import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  assoc,
  defaultTo,
  equals,
  filter,
  find,
  head,
  map,
  path,
  pipe,
  propEq,
  propOr,
  propSatisfies,
} from 'ramda';
import {
  isEmptyArray,
  isNotNull,
  isNotUndefined,
  isNull,
  isUndefined,
} from 'ramda-adjunct';

import { FilterRow } from './FilterRow';
import { BottomBar } from './BottomBar';
import { FieldPropTypes, Filter, FiltersProps } from './Filters.types';
import { DateRangePickerPropTypes } from './components/DateRangePicker/DateRangePicker.types';
import { Operators } from './Filters.enums';

const generateId = ({ operator, field, condition }, index) =>
  `${operator}-${field}-${condition}-${index}`;

const getDefaultConditionAndValue = ({ conditions }) => {
  const defaultCondition = find(propEq('isDefault', true), conditions);

  const {
    value: defaultConditionValue,
    component: defaultConditionComponent,
  } = defaultTo(head(conditions), defaultCondition);

  const componentDefaultValue = path(
    ['props', 'defaultValue'],
    defaultConditionComponent,
  );
  const defaultValue = propOr(
    componentDefaultValue,
    'value',
    componentDefaultValue,
  );

  return { condition: defaultConditionValue, value: defaultValue };
};

const getDefaultState = ([firstField]) => {
  const { condition, value } = getDefaultConditionAndValue(firstField);
  return [
    {
      operator: Operators.and,
      field: firstField.value,
      condition,
      value,
      isApplied: false,
    },
  ];
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Filters: React.FC<FiltersProps> = ({
  fields,
  state,
  onApply,
  onChange,
  onClose,
  onCancel,
  isLoading = false,
}) => {
  const [filtersValues, setFiltersValues] = useState<Array<Filter>>(null);
  const [isDefaultState, setIsDefaultState] = useState(true);
  const [hasUnappliedFilters, setHasUnappliedFilters] = useState(false);

  useEffect(() => {
    // Set default
    if ((isUndefined(state) || isEmptyArray(state)) && isNotUndefined(fields)) {
      const defaultState = getDefaultState(fields);
      setFiltersValues(defaultState);
    } else {
      setFiltersValues(state);
    }
  }, [state, fields]);

  useEffect(() => {
    if (isNotUndefined(fields)) {
      const defaultState = getDefaultState(fields);

      setIsDefaultState(equals(filtersValues, defaultState));
    }
  }, [filtersValues, fields]);

  useEffect(() => {
    if (isNotNull(filtersValues)) {
      const someApplied = filtersValues.some(({ isApplied }) => isApplied);
      const someUnapplied = filtersValues.some(({ isApplied }) => !isApplied);

      setHasUnappliedFilters(someApplied && someUnapplied);
    }
  }, [filtersValues]);

  const callOnChange = (newFilters) => {
    if (typeof onChange === 'function') {
      onChange(newFilters);
    }
  };

  const handleOperatorChange = ({ value }) => {
    const newFilters = filtersValues.map((row) => ({
      ...row,
      operator: value,
      isApplied: false,
    }));

    setFiltersValues(newFilters);

    callOnChange(newFilters);
  };

  const handleFieldChange = (field, condition, value, index) => {
    const newFilters = [...filtersValues];
    newFilters[index].field = field;
    newFilters[index].condition = condition;
    newFilters[index].value = value;
    newFilters[index].isApplied = false;

    setFiltersValues(newFilters);

    callOnChange(newFilters);
  };

  const handleConditionChange = (condition, index, areComponentsEqual) => {
    const newFilters = [...filtersValues];
    newFilters[index].condition = condition;
    if (!areComponentsEqual) {
      newFilters[index].value = undefined;
    }
    newFilters[index].isApplied = false;

    setFiltersValues(newFilters);

    callOnChange(newFilters);
  };

  const handleValueChange = (value, index) => {
    const newFilters = [...filtersValues];
    newFilters[index].value = value || undefined;
    newFilters[index].isApplied = false;

    setFiltersValues(newFilters);

    callOnChange(newFilters);
  };

  const handleAddRow = (event) => {
    event.preventDefault();

    const newFilters = [...filtersValues];
    const { condition, value } = getDefaultConditionAndValue(fields[0]);
    const newRow = {
      operator: newFilters[0].operator,
      field: fields[0].value,
      condition,
      value,
      isApplied: false,
    };
    const filtersWithNewRow = [...newFilters, newRow];
    setFiltersValues(filtersWithNewRow);

    callOnChange(filtersWithNewRow);
  };

  const handleClearAll = (event) => {
    event.preventDefault();

    const defaultState = getDefaultState(fields);

    setFiltersValues(defaultState);

    callOnChange(defaultState);
    onApply([]);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // TODO remove https://zitenote.atlassian.net/browse/FEP-1645
    if (isLoading) return;

    const newFilters = pipe(
      filter(propSatisfies(isNotUndefined, 'value')),
      map(assoc('isApplied', true)),
    )(filtersValues);
    const defaultState = getDefaultState(fields);

    setFiltersValues(isEmptyArray(newFilters) ? defaultState : newFilters);

    // Don't apply empty filters
    if (!isEmptyArray(newFilters)) {
      onApply(newFilters);
    }
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

    callOnChange(newFilters);
  };

  if (isUndefined(fields) || isNull(filtersValues)) {
    return null;
  }

  const handleCloseFilters = (event) => {
    event.preventDefault();

    onClose();
  };

  const handleCancelFetch = (event) => {
    event.preventDefault();

    onCancel();
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      {filtersValues.map((props, index) => {
        const id = generateId(props, index);
        return (
          <FilterRow
            key={id}
            fields={fields}
            index={index}
            isDefaultState={isDefaultState}
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
        onCancel={handleCancelFetch}
        onClearAll={handleClearAll}
        onClose={handleCloseFilters}
      />
    </Form>
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
