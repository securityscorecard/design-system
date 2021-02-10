import { DateRangePicker, Input, Number, SingleDatePicker } from '../inputs';
import { DataPoint, Filter } from '../Filters.types';
import { Operators } from '../Filters.enums';

// TODO use more realistic data
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
      {
        input: Number,
        value: 'chocolate',
        label: 'Chocolate',
        isDefault: true,
      },
      { input: SingleDatePicker, value: 'strawberry', label: 'Strawberry' },
      { input: DateRangePicker, value: 'vanilla', label: 'Vanilla' },
    ],
    value: 'smurf',
    label: 'Smurf',
  },
];

export const dataMock: Filter[] = [
  {
    operator: Operators.and,
    dataPoint: 'pistachio',
    condition: 'chocolate',
    input: 'tasty',
    isApplied: true,
  },
  {
    operator: Operators.and,
    dataPoint: 'lemon',
    condition: 'strawberry',
    isApplied: true,
  },
  {
    operator: Operators.and,
    dataPoint: 'smurf',
    condition: 'vanilla',
    isApplied: true,
  },
  {
    operator: Operators.and,
    dataPoint: 'smurf',
    condition: 'strawberry',
    isApplied: true,
  },
  {
    operator: Operators.and,
    dataPoint: 'smurf',
    condition: 'chocolate',
    isApplied: true,
  },
];
