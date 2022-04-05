import { find, map, pick, pipe, prop, propEq } from 'ramda';
import { isUndefined } from 'ramda-adjunct';

import { Condition, Field } from '../Filters.types';
import { PickOption, UseFilterRowType } from './useFilterRow.types';
import { Option } from '../components/Select/Select.types';

export const normalizeOptions: <O extends Option>(options: O) => PickOption<O> =
  pick(['value', 'label']);

export const useFilterRow = (
  fields: Field[],
  fieldValue: string,
  conditionValue: string,
): UseFilterRowType => {
  const field = find(propEq('value', fieldValue), fields);
  if (isUndefined(field))
    throw new Error(
      `Field value "${fieldValue}" was not found in the fields array`,
    );

  if (isUndefined(field.conditions))
    throw new Error(`Field item does not contain any conditions`);
  const conditions = pipe(prop('conditions'), map(normalizeOptions))(field);

  const condition = pipe(
    prop('conditions'),
    find(propEq('value', conditionValue)),
  )(field);
  if (isUndefined(condition))
    throw new Error(
      `For field value "${fieldValue}" was not found condition matching condition value "${conditionValue}"`,
    );

  return {
    field: normalizeOptions<Field>(field),
    conditions,
    condition: normalizeOptions<Condition>(condition),
    component: prop('component', condition),
  };
};
