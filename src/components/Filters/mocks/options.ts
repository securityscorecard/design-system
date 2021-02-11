import {
  DateRangePicker,
  Input,
  Number,
  Select,
  SingleDatePicker,
} from '../inputs';
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
      {
        input: {
          Component: Select,
          props: {
            options: [
              { value: 'foo', label: 'Foo' },
              { value: 'bar', label: 'Bar' },
            ],
            defaultValue: { value: 'foo', label: 'Foo' },
          },
        },
        value: 'chocolate',
        label: 'Chocolate',
      },
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
  {
    operator: Operators.and,
    dataPoint: 'lemon',
    condition: 'chocolate',
    input: 'foo',
    isApplied: true,
  },
];
