import React, { useEffect, useState } from 'react';
import {
  any,
  assoc,
  defaultTo,
  equals,
  filter,
  find,
  head,
  map,
  pipe,
  propEq,
  propSatisfies,
  unless,
  update,
} from 'ramda';
import {
  isEmptyArray,
  isNotNull,
  isNotUndefined,
  isNull,
  isUndefined,
  noop,
} from 'ramda-adjunct';

import { FilterRow } from './FilterRow';
import { getDefaultComponentValue } from './FilterRow/FilterRow';
import { BottomBar } from './BottomBar';
import { FlexContainer } from '../FlexContainer';
import { Field, Filter, FiltersPropType, FiltersProps } from './Filters.types';
import { Operators } from './Filters.enums';

const generateId = ({ operator, field, condition }, index) =>
  `${operator}-${field}-${condition}-${index}`;

const getDefaultConditionAndValue = ({ conditions }: Field) => {
  const defaultCondition = find(propEq('isDefault', true), conditions);

  const {
    value: defaultConditionValue,
    component: defaultConditionComponent,
  } = defaultTo(head(conditions), defaultCondition);

  const defaultComponentValue = getDefaultComponentValue(
    defaultConditionComponent,
  );

  return { condition: defaultConditionValue, value: defaultComponentValue };
};

const getDefaultState = ([firstField]: Field[]) => {
  const { condition, value } = getDefaultConditionAndValue(firstField);
  return [
    {
      operator: Operators.and,
      field: firstField.value,
      condition,
      value,
      isApplied: false,
      isLoading: false,
      isCanceled: false,
    },
  ];
};

const Filters: React.FC<FiltersProps> = ({
  fields,
  state,
  onApply,
  onChange = noop,
  onClose = noop,
  onCancel = noop,
  isLoading = false,
  isCancelDisabled = false,
}) => {
  const [filtersValues, setFiltersValues] = useState<Array<Filter>>(null);
  const [isDefaultState, setIsDefaultState] = useState(true);
  const [hasUnappliedFilters, setHasUnappliedFilters] = useState(false);
  const [validValues, setValidValues] = useState<boolean[]>([true]);

  useEffect(() => {
    // Set default
    if ((isUndefined(state) || isEmptyArray(state)) && isNotUndefined(fields)) {
      const defaultState = getDefaultState(fields);
      setFiltersValues(defaultState);
    } else {
      setFiltersValues(state);
      setValidValues(state.map((field) => Boolean(field)));
    }
  }, [state, fields]);

  useEffect(() => {
    if (isNotUndefined(fields)) {
      const defaultState = getDefaultState(fields);

      setIsDefaultState(equals(filtersValues, defaultState));
    }
  }, [filtersValues, fields]);

  useEffect(() => {
    if (
      filtersValues &&
      !isLoading &&
      any(propEq('isLoading', true))(filtersValues)
    ) {
      setFiltersValues(
        pipe(
          filter(propSatisfies(isNotUndefined, 'value')),
          map(assoc('isLoading', false)),
          map(unless(propEq('isCanceled', true), assoc('isApplied', true))),
        )(filtersValues),
      );
    }
  }, [filtersValues, isLoading]);

  const handleError = (hasError, index) => {
    const newValidValues = [...validValues];
    newValidValues[index] = !hasError;

    setValidValues(newValidValues);
  };

  const hasInvalidValues = validValues.some((valid) => valid === false);

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
      isLoading: false,
      isCanceled: false,
    }));

    setFiltersValues(newFilters);

    callOnChange(newFilters);
  };

  const handleFieldChange = (field, condition, value, index) => {
    setFiltersValues((filters) => {
      const newFilters = update(
        index,
        {
          ...filters[index],
          field,
          condition,
          value,
          isApplied: false,
          isLoading: false,
          isCanceled: false,
        },
        filters,
      );
      callOnChange(newFilters);

      return newFilters;
    });
  };

  const handleConditionChange = (condition, value, index) => {
    setFiltersValues((filters) => {
      const newFilters = update(
        index,
        {
          ...filters[index],
          condition,
          value,
          isApplied: false,
          isLoading: false,
          isCanceled: false,
        },
        filters,
      );
      callOnChange(newFilters);

      return newFilters;
    });
  };

  const handleValueChange = (value, index) => {
    setFiltersValues((filters) => {
      const newFilters = update(
        index,
        {
          ...filters[index],
          value: value || undefined,
          isApplied: false,
          isLoading: false,
          isCanceled: false,
        },
        filters,
      );
      callOnChange(newFilters);

      return newFilters;
    });
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
      isLoading: false,
      isCanceled: false,
    };
    const filtersWithNewRow = [...newFilters, newRow];
    setFiltersValues(filtersWithNewRow);
    setValidValues([...validValues, true]);

    callOnChange(filtersWithNewRow);
  };

  const handleClearAll = (event) => {
    event.preventDefault();

    const defaultState = getDefaultState(fields);

    setFiltersValues(defaultState);
    setValidValues([true]);

    callOnChange(defaultState);
    onApply([]);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // TODO remove https://zitenote.atlassian.net/browse/FEP-1645
    if (isLoading) return;

    const newFilters = pipe(
      filter(propSatisfies(isNotUndefined, 'value')),
      map(assoc('isCanceled', false)),
      map(unless(propEq('isApplied', true), assoc('isLoading', true))),
    )(filtersValues);
    const defaultState = getDefaultState(fields);

    setFiltersValues(isEmptyArray(newFilters) ? defaultState : newFilters);

    onApply(newFilters);
  };

  const handleRemoveFilter = (index) => () => {
    let newFilters;
    let newValidValues = [...validValues];
    if (filtersValues.length > 1) {
      newFilters = [...filtersValues];
      newFilters.splice(index, 1);
      newValidValues.splice(index, 1);
    } else {
      newFilters = getDefaultState(fields);
      newValidValues = [true];
    }

    setFiltersValues(newFilters);
    setValidValues(newValidValues);

    callOnChange(newFilters);
  };

  const handleCloseFilters = (event) => {
    event.preventDefault();
    onClose();
  };

  const handleCancelLoading = (event) => {
    event.preventDefault();
    const newFilters = pipe(
      map(unless(propEq('isLoading', false), assoc('isCanceled', true))),
    )(filtersValues);

    onCancel(newFilters);

    setFiltersValues(newFilters);
  };

  if (isUndefined(fields) || isNull(filtersValues)) {
    return null;
  }

  return (
    <FlexContainer flexDirection="column" flexGrow={1}>
      {filtersValues.map((props, index) => (
        <FilterRow
          key={generateId(props, index)}
          fields={fields}
          index={index}
          isDefaultState={isDefaultState}
          isInvalid={validValues[index] === false}
          onConditionChange={handleConditionChange}
          onError={(hasError) => handleError(hasError, index)}
          onFieldChange={handleFieldChange}
          onOperatorChange={handleOperatorChange}
          onRemove={handleRemoveFilter}
          onValueChange={handleValueChange}
          {...filtersValues[index]}
        />
      ))}
      <BottomBar
        hasUnappliedFilters={hasUnappliedFilters}
        isApplyDisabled={hasInvalidValues}
        isCancelDisabled={isCancelDisabled}
        isLoading={isLoading}
        onAdd={handleAddRow}
        onCancel={handleCancelLoading}
        onClearAll={handleClearAll}
        onClose={handleCloseFilters}
        onSubmit={handleSubmitForm}
      />
    </FlexContainer>
  );
};

export default Filters;

Filters.propTypes = FiltersPropType;
