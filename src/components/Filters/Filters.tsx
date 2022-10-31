import React, { useEffect, useMemo, useState } from 'react';
import {
  allPass,
  any,
  assoc,
  defaultTo,
  equals,
  filter,
  find,
  head,
  map,
  none,
  pipe,
  propEq,
  propSatisfies,
  unless,
  update,
  when,
} from 'ramda';
import {
  isEmptyArray,
  isNotNull,
  isNotUndefined,
  isNull,
  isUndefined,
  noop,
} from 'ramda-adjunct';
import styled from 'styled-components';

import { Padbox, Stack } from '../layout';
import { FilterRow } from './FilterRow';
import { getDefaultComponentValue } from './FilterRow/FilterRow';
import { BottomBar } from './BottomBar';
import { Field, Filter, FiltersPropType, FiltersProps } from './Filters.types';
import { Operators } from './Filters.enums';
import { SpaceSizes } from '../../theme';
import { CLX_COMPONENT } from '../../theme/constants';

const generateId = ({ operator, field, condition }, index) =>
  `${operator}-${field}-${condition}-${index}`;

const getDefaultConditionAndValue = ({ conditions }: Field) => {
  const defaultCondition = find(propEq('isDefault', true), conditions);

  const { value: defaultConditionValue, component: defaultConditionComponent } =
    defaultTo(head(conditions), defaultCondition);

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

const FiltersBase = styled(Padbox)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Filters: React.FC<FiltersProps> = ({
  fields,
  state: stateFromProps,
  onApply,
  onChange = noop,
  onClose,
  onCancel = noop,
  onError,
  isLoading = false,
  isCancelEnabled = true,
  isOperatorFieldEnabled = true,
  defaultOperator = Operators.and,
}) => {
  const state = useMemo(
    () =>
      isOperatorFieldEnabled
        ? stateFromProps
        : map(assoc('operator', defaultOperator), stateFromProps),
    [stateFromProps, isOperatorFieldEnabled, defaultOperator],
  );
  const [filtersValues, setFiltersValues] = useState<Array<Filter>>(null);
  const [isDefaultState, setIsDefaultState] = useState(true);
  const [hasUnappliedFilters, setHasUnappliedFilters] = useState(false);
  const [validValues, setValidValues] = useState([true]);
  const hasCloseButton = isNotUndefined(onClose);
  const hasApplyButton = isNotUndefined(onApply);

  useEffect(() => {
    // Set default
    if ((isUndefined(state) || isEmptyArray(state)) && isNotUndefined(fields)) {
      const defaultState = getDefaultState(fields);
      setFiltersValues(defaultState);
    } else {
      setFiltersValues(state);
      setValidValues(state.map((field) => Boolean(field)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, fields]);

  useEffect(() => {
    if (isNotUndefined(fields)) {
      const defaultState = getDefaultState(fields);

      setIsDefaultState(equals(filtersValues, defaultState));
    }
  }, [filtersValues, fields]);

  useEffect(() => {
    // checks whether loading has stopped, or has been canceled and applies flags accordingly
    if (
      filtersValues &&
      !isLoading &&
      any(propEq('isLoading', true))(filtersValues) &&
      (!state || none(propEq('isCanceled', true))(state))
    ) {
      setFiltersValues(
        pipe(
          filter(propSatisfies(isNotUndefined, 'value')),
          map(
            when(
              allPass([propEq('isCanceled', false), propEq('isLoading', true)]),
              assoc('isApplied', true),
            ),
          ),
          map(assoc('isLoading', false)),
        )(filtersValues),
      );
    }
  }, [state, filtersValues, isLoading]);

  const handleError = (hasError, index) => {
    const newValidValues = [...validValues];
    newValidValues[index] = !hasError;

    setValidValues(newValidValues);

    onError?.(hasError);
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
    onApply?.([]);
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

    onApply?.(newFilters);
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

  if (isUndefined(fields) || isNull(filtersValues)) {
    return null;
  }

  return (
    <FiltersBase className={CLX_COMPONENT} data-testid="filters">
      <Stack gap={SpaceSizes.md}>
        <Stack gap={SpaceSizes.sm}>
          {filtersValues.map((props, index) => (
            <FilterRow
              key={generateId(props, index)}
              defaultOperator={defaultOperator}
              fields={fields}
              hasApplyButton={hasApplyButton}
              index={index}
              isDefaultState={isDefaultState}
              isInvalid={validValues[index] === false}
              isOperatorFieldEnabled={isOperatorFieldEnabled}
              onConditionChange={handleConditionChange}
              onError={(hasError) => handleError(hasError, index)}
              onFieldChange={handleFieldChange}
              onOperatorChange={handleOperatorChange}
              onRemove={handleRemoveFilter}
              onValueChange={handleValueChange}
              {...filtersValues[index]}
            />
          ))}
        </Stack>
        <BottomBar
          hasApplyButton={hasApplyButton}
          hasCloseButton={hasCloseButton}
          hasUnappliedFilters={hasUnappliedFilters}
          isApplyDisabled={hasInvalidValues}
          isCancelEnabled={isCancelEnabled}
          isLoading={isLoading}
          onAdd={handleAddRow}
          onCancel={onCancel}
          onClearAll={handleClearAll}
          onClose={handleCloseFilters}
          onSubmit={handleSubmitForm}
        />
      </Stack>
    </FiltersBase>
  );
};

export default Filters;

Filters.propTypes = FiltersPropType;
