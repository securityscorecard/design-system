import React from 'react';

import { Condition } from '../Filters.types';
import { Option } from '../Select/Select.types';

interface InputComponentProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface useFilterRowType {
  dataPoint: Option;
  conditions: Condition[];
  condition: Option;
  InputComponent: React.FC<InputComponentProps>;
}
