import React from 'react';

import { Condition } from '../Filters.types';
import { Option } from '../components/Select/Select.types';
import { DateRange } from '../components/DateRangePicker/DateRangePicker.types';

interface ComponentProps {
  value: string | Date | DateRange;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface useFilterRowType {
  field: Option;
  conditions: Condition[];
  condition: Option;
  component: React.FC<ComponentProps>;
}
