import React from 'react';

import { Option } from '../../forms/Select/Select.types';
import { Condition, Field } from '../Filters.types';

export type PickOption<O extends Option> = Pick<O, 'value' | 'label'>;

export interface UseFilterRowType {
  field: PickOption<Field>;
  conditions: PickOption<Condition>[];
  condition: PickOption<Condition>;
  component: React.ReactNode;
}
