import React from 'react';

import { Condition } from '../Filters.types';
import { Option } from '../Select/Select.types';
import { DateRange } from '../DatePicker/DatePicker.types';

interface InputComponentProps {
  value: string | DateRange;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface useFilterRowType {
  dataPoint: Option;
  conditions: Condition[];
  condition: Option;
  InputComponent: React.FC<InputComponentProps>;
}
