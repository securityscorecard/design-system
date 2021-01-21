import { Input } from '../Input';
import { DataPoint, Filter } from '../Filters.types';
import { Operators } from '../Filters.enums';

export const dataPointsMock: DataPoint[] = [
  {
    conditions: [
      { input: Input, value: 'chocolate', label: 'Chocolate' },
      {
        input: Input,
        value: 'strawberry',
        label: 'Strawberry',
        isDefault: true,
      },
      { input: Input, value: 'vanilla', label: 'Vanilla' },
    ],
    value: 'pistachio',
    label: 'Pistachio',
  },
  {
    conditions: [
      { input: Input, value: 'chocolate', label: 'Chocolate' },
      { input: Input, value: 'strawberry', label: 'Strawberry' },
      { input: Input, value: 'vanilla', label: 'Vanilla', isDefault: true },
    ],
    value: 'lemon',
    label: 'Lemon',
  },
  {
    conditions: [
      { input: Input, value: 'chocolate', label: 'Chocolate', isDefault: true },
      { input: Input, value: 'strawberry', label: 'Strawberry' },
      { input: Input, value: 'vanilla', label: 'Vanilla' },
    ],
    value: 'smurf',
    label: 'Smurf',
  },
];

export const dataMock: Filter[] = [
  {
    operator: Operators.where,
    dataPoint: 'pistachio',
    condition: 'chocolate',
    input: 'tasty',
  },
  {
    operator: Operators.and,
    dataPoint: 'lemon',
    condition: 'strawberry',
    input: 'fruity',
  },
];
