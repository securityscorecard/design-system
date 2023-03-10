import type { Option } from '../../forms/Select/Select.types';
import type { Condition, Field } from '../Filters.types';
import type { ReactNode } from 'react';

export type PickOption<O extends Option> = Pick<O, 'value' | 'label'>;

export interface UseFilterRowType {
  field: PickOption<Field>;
  conditions: PickOption<Condition>[];
  condition: PickOption<Condition>;
  component: ReactNode;
}
