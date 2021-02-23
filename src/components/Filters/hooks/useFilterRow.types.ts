import React from 'react';

import { Condition } from '../Filters.types';
import { Option } from '../components/Select/Select.types';

export interface useFilterRowType {
  field: Option;
  conditions: Condition[];
  condition: Option;
  component: React.ReactNode;
}
