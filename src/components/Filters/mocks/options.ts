import {
  DateRangePicker,
  Input,
  Number,
  Select,
  SingleDatePicker,
} from '../components';
import { Field, Filter } from '../Filters.types';
import { Operators } from '../Filters.enums';

// TODO use more realistic data
export const fieldsMock: Field[] = [
  {
    conditions: [
      { component: Input, value: 'chocolate', label: 'Chocolate' },
      {
        component: Input,
        value: 'strawberry',
        label: 'Strawberry',
        isDefault: true,
      },
      { component: Input, value: 'vanilla', label: 'Vanilla' },
    ],
    value: 'pistachio',
    label: 'Pistachio',
  },
  {
    conditions: [
      {
        component: {
          component: Select,
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
      { component: Input, value: 'strawberry', label: 'Strawberry' },
      { component: Input, value: 'vanilla', label: 'Vanilla', isDefault: true },
    ],
    value: 'lemon',
    label: 'Lemon',
  },
  {
    conditions: [
      {
        component: Number,
        value: 'chocolate',
        label: 'Chocolate',
        isDefault: true,
      },
      { component: SingleDatePicker, value: 'strawberry', label: 'Strawberry' },
      { component: DateRangePicker, value: 'vanilla', label: 'Vanilla' },
    ],
    value: 'smurf',
    label: 'Smurf',
  },
];

export const stateMock: Filter[] = [
  {
    operator: Operators.and,
    field: 'pistachio',
    condition: 'chocolate',
    value: 'tasty',
    isApplied: true,
  },
  {
    operator: Operators.and,
    field: 'lemon',
    condition: 'strawberry',
    isApplied: true,
  },
  {
    operator: Operators.and,
    field: 'smurf',
    condition: 'vanilla',
    isApplied: true,
  },
  {
    operator: Operators.and,
    field: 'smurf',
    condition: 'strawberry',
    isApplied: true,
  },
  {
    operator: Operators.and,
    field: 'smurf',
    condition: 'chocolate',
    isApplied: true,
  },
  {
    operator: Operators.and,
    field: 'lemon',
    condition: 'chocolate',
    value: 'foo',
    isApplied: true,
  },
];
