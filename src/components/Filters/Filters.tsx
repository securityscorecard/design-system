import React, { useEffect, useState } from 'react';
import {
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
  isCancelDisabled = false, // TODO remove https://zitenote.atlassian.net/browse/FEP-1648
}) => {
  const [filtersValues, setFiltersValues] = useState<Array<Filter>>(null);
  const [isDefaultState, setIsDefaultState] = useState(true);
  const [hasUnappliedFilters, setHasUnappliedFilters] = useState(false);
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);
  const [validsValues, setValidsValues] = useState<boolean[]>([true]);

  useEffect(() => {
    // Set default
    if ((isUndefined(state) || isEmptyArray(state)) && isNotUndefined(fields)) {
      const defaultState = getDefaultState(fields);
      setFiltersValues(defaultState);
    } else {
      setFiltersValues(state);
      setValidsValues(state.map((field) => Boolean(field)));
    }
  }, [state, fields]);

  useEffect(() => {
    if (isNotUndefined(fields)) {
      const defaultState = getDefaultState(fields);

      setIsDefaultState(equals(filtersValues, defaultState));
    }
  }, [filtersValues, fields]);

  const handleError = (value) => {
    const newValidsValues = validsValues;
    newValidsValues[currentFieldIndex] = !value;
    setValidsValues(newValidsValues);
  };

  const hasInvalidValues = validsValues.some((valid) => valid === false);

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

  const handleConditionChange = (condition, value, index) => {
    const newFilters = [...filtersValues];
    newFilters[index].condition = condition;
    newFilters[index].value = value;
    newFilters[index].isApplied = false;

    setFiltersValues(newFilters);

    callOnChange(newFilters);
  };

  const handleValueChange = (value, index) => {
    const newFilters = [...filtersValues];
    newFilters[index].value = value || undefined;
    newFilters[index].isApplied = false;

    setFiltersValues(newFilters);
    setCurrentFieldIndex(index);

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

  const handleCloseFilters = (event) => {
    event.preventDefault();
    onClose();
  };

  const handleCancelFetch = (event) => {
    event.preventDefault();
    onCancel();
  };

  if (isUndefined(fields) || isNull(filtersValues)) {
    return null;
  }

  return (
    <FlexContainer flexDirection="column" flexGrow={1}>
      {filtersValues.map((props, index) => {
        const id = generateId(props, index);
        return (
          <FilterRow
            key={id}
            fields={fields}
            index={index}
            isDefaultState={isDefaultState}
            onConditionChange={handleConditionChange}
            onError={handleError}
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
        isApplyDisabled={hasInvalidValues}
        isCancelDisabled={isCancelDisabled}
        isLoading={isLoading}
        onAdd={handleAddRow}
        onCancel={handleCancelFetch}
        onClearAll={handleClearAll}
        onClose={handleCloseFilters}
        onSubmit={handleSubmitForm}
      />
    </FlexContainer>
  );
};

export default Filters;

Filters.propTypes = FiltersPropType;
