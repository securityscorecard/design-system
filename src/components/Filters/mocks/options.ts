import {
  DateRangePicker,
  Input,
  Number,
  Select,
  SingleDatePicker,
} from '../components';
import { Field, Filter } from '../Filters.types';
import { Operators } from '../Filters.enums';

export const fields: Field[] = [
  {
    conditions: [
      { component: Input, value: 'is', label: 'is' },
      {
        component: Input,
        value: 'is not',
        label: 'is not',
      },
      {
        component: Input,
        value: 'contains',
        label: 'contains',
        isDefault: true,
      },
      {
        component: Input,
        value: 'does not contain',
        label: 'does not contain',
      },
    ],
    value: 'domain',
    label: 'Domain',
  },
  {
    conditions: [
      {
        component: Number,
        value: 'is',
        label: 'is',
        isDefault: true,
      },
      {
        component: Number,
        value: 'is not',
        label: 'is not',
      },
      {
        component: Number,
        value: 'is less than',
        label: 'is less than',
      },
      {
        component: Number,
        value: 'is greater than',
        label: 'is greater than',
      },
      {
        component: Number,
        value: 'is at least',
        label: 'is at least',
      },
      {
        component: Number,
        value: 'is at most',
        label: 'is at most',
      },
    ],
    value: 'issue count',
    label: 'Issue Count',
  },
  {
    conditions: [
      { component: SingleDatePicker, value: 'is', label: 'is' },
      { component: SingleDatePicker, value: 'before', label: 'before' },
      {
        component: SingleDatePicker,
        value: 'after',
        label: 'after',
        isDefault: true,
      },
      {
        component: SingleDatePicker,
        value: 'within last',
        label: 'within last',
      },
      {
        component: SingleDatePicker,
        value: 'not within last',
        label: 'not within last',
      },
      {
        component: DateRangePicker,
        value: 'between',
        label: 'between',
      },
    ],
    value: 'first observed',
    label: 'First Observed',
  },
  {
    conditions: [
      {
        component: {
          component: Select,
          props: {
            options: [
              { value: 'any', label: 'Any' },
              { value: 'none', label: 'None' },
              { value: 'cloud', label: 'Cloud' },
              { value: 'ssc res', label: 'SSC Res.' },
              { value: '3rd party', label: '3rd party' },
            ],
            defaultValue: { value: 'any', label: 'Any' },
          },
        },
        value: 'is',
        label: 'is',
      },
      {
        component: {
          component: Select,
          props: {
            options: [
              { value: 'any', label: 'Any' },
              { value: 'none', label: 'None' },
              { value: 'cloud', label: 'Cloud' },
              { value: 'ssc res', label: 'SSC Res.' },
              { value: '3rd party', label: '3rd party' },
            ],
            defaultValue: { value: 'any', label: 'Any' },
          },
        },
        value: 'is not',
        label: 'is not',
      },
      {
        component: {
          component: Select,
          props: {
            options: [
              { value: 'any', label: 'Any' },
              { value: 'none', label: 'None' },
              { value: 'cloud', label: 'Cloud' },
              { value: 'ssc res', label: 'SSC Res.' },
              { value: '3rd party', label: '3rd party' },
            ],
            defaultValue: { value: 'any', label: 'Any' },
          },
        },
        value: 'contains',
        label: 'contains',
        isDefault: true,
      },
      {
        component: {
          component: Select,
          props: {
            options: [
              { value: 'any', label: 'Any' },
              { value: 'none', label: 'None' },
              { value: 'cloud', label: 'Cloud' },
              { value: 'ssc res', label: 'SSC Res.' },
              { value: '3rd party', label: '3rd party' },
            ],
            defaultValue: { value: 'any', label: 'Any' },
          },
        },
        value: 'does not contain',
        label: 'does not contain',
      },
    ],
    value: 'detection method',
    label: 'Detection Method',
  },
];

export const state: Filter[] = [
  {
    operator: Operators.and,
    field: 'domain',
    condition: 'is not',
    value: 'securityscorecard.io',
    isApplied: true,
  },
  {
    operator: Operators.and,
    field: 'issue count',
    condition: 'is greater than',
    value: '2',
    isApplied: true,
  },
  {
    operator: Operators.and,
    field: 'first observed',
    condition: 'after',
    value: new Date(),
    isApplied: true,
  },
  {
    operator: Operators.and,
    field: 'first observed',
    condition: 'between',
    isApplied: true,
  },
  {
    operator: Operators.and,
    field: 'detection method',
    condition: 'is not',
    value: 'ssc res',
    isApplied: true,
  },
];

export const stateWithUnappliedFilters: Filter[] = [
  ...state,
  {
    operator: Operators.and,
    field: 'domain',
    condition: 'contains',
    value: '.io',
    isApplied: false,
  },
  {
    operator: Operators.and,
    field: 'domain',
    condition: 'contains',
    value: 'example',
    isApplied: false,
  },
];
