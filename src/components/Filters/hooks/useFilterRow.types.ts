import React from 'react';

import { Condition, Field } from '../Filters.types';
import { Option } from '../components/Select/Select.types';

export type PickOption<O extends Option> = Pick<O, 'value' | 'label'>;

export interface UseFilterRowType {
  field: PickOption<Field>;
  conditions: PickOption<Condition>[];
  condition: PickOption<Condition>;
  component: React.ReactNode;
}
