import { useEffect, useState } from 'react';
import { prop } from 'ramda';
import { isNotNull } from 'ramda-adjunct';

import { Condition, Field } from '../Filters.types';
import { useFilterRowType } from './useFilterRow.types';
import { Option } from '../components/Select/Select.types';

export const normalizeOptions = <O extends Option>({
  value,
  label,
}: O): Option => ({
  value,
  label,
});

const getValuesOnChange = (fields, fieldValue, conditionValue) => {
  const field = fields.find(({ value }) => value === fieldValue);

  const conditions = field.conditions.map(normalizeOptions);

  const condition = field.conditions.find(
    ({ value }) => value === conditionValue,
  );

  return {
    field,
    conditions,
    condition,
  };
};

export const useFilterRow = (
  fields: Field[],
  fieldValue: string,
  conditionValue: string,
): useFilterRowType => {
  const [field, setField] = useState(null);
  const [conditions, setConditions] = useState(null);
  const [condition, setCondition] = useState(null);

  useEffect(() => {
    const {
      field: fieldOptions,
      conditions: conditionsOptions,
      condition: conditionOptions,
    } = getValuesOnChange(fields, fieldValue, conditionValue);

    setField(fieldOptions);
    setConditions(conditionsOptions);
    setCondition(conditionOptions);
  }, [fields, fieldValue, conditionValue]);

  const normalizedField = isNotNull(field) && normalizeOptions<Field>(field);
  const normalizedCondition =
    isNotNull(condition) && normalizeOptions<Condition>(condition);

  return {
    field: normalizedField,
    conditions,
    condition: normalizedCondition,
    component: prop('component', condition),
  };
};
