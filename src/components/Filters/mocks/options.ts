import {
  Count,
  DateRangePicker,
  Input,
  Integer,
  Number,
  Select,
  SingleDatePicker,
  TagsInput,
} from '../components';
import { Field, Filter } from '../Filters.types';
import { Operators } from '../Filters.enums';

export const fields: Field[] = [
  {
    conditions: [
      {
        component: {
          component: Input,
          props: {
            maxLength: 15,
            pattern: '[a-zA-Z]+',
            patternMessage: 'Use only alphabets',
          },
        },

        value: 'is',
        label: 'is',
      },
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
      { component: TagsInput, value: 'is', label: 'is' },
      {
        component: TagsInput,
        value: 'is not',
        label: 'is not',
      },
      {
        component: TagsInput,
        value: 'contains',
        label: 'contains',
        isDefault: true,
      },
      {
        component: TagsInput,
        value: 'does not contain',
        label: 'does not contain',
      },
    ],
    value: 'ip',
    label: 'IP address',
  },
  {
    conditions: [
      {
        component: {
          component: Number,
          props: {
            max: 5,
            min: 2,
          },
        },

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
        component: Count,
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
        component: Integer,
        value: 'is at most',
        label: 'is at most',
      },
    ],
    value: 'issue count',
    label: 'Issue Count',
  },
  {
    conditions: [
      {
        component: {
          component: DateRangePicker,
          props: {
            minDate: new Date('2021-03-01T00:00:00Z'),
            maxDate: new Date('2021-03-28T00:00:00Z'),
          },
        },
        value: 'is',
        label: 'is',
      },
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
            isMulti: true,
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
    field: 'ip',
    condition: 'contains',
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
    field: 'issue count',
    condition: 'is less than',
    isApplied: true,
  },
  {
    operator: Operators.and,
    field: 'issue count',
    condition: 'is at most',
    isApplied: true,
  },
  {
    operator: Operators.and,
    field: 'first observed',
    condition: 'after',
    value: new Date('2021-02-16T00:00:00Z'),
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
    condition: 'is',
    value: 'any',
    isApplied: true,
  },
  {
    operator: Operators.and,
    field: 'detection method',
    condition: 'contains',
    value: 'any',
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

export const fieldsInput: Field[] = [
  {
    conditions: [
      {
        component: Input,
        value: 'is',
        label: 'is',
        isDefault: true,
      },
    ],
    value: 'domain',
    label: 'Domain',
  },
];

export const fieldsInputValidation: Field[] = [
  {
    conditions: [
      {
        component: {
          component: Input,
          props: {
            maxLength: 5,
            pattern: '[a-zA-Z]+',
            patternMessage: 'Use only alphabets',
          },
        },
        value: 'is',
        label: 'is',
        isDefault: true,
      },
    ],
    value: 'domain',
    label: 'Domain',
  },
];

export const fieldsTagsInput: Field[] = [
  {
    conditions: [
      {
        component: TagsInput,
        value: 'is',
        label: 'is',
        isDefault: true,
      },
    ],
    value: 'domain',
    label: 'Domain',
  },
];

export const fieldsNumber: Field[] = [
  {
    conditions: [
      {
        component: Number,
        value: 'is',
        label: 'is',
        isDefault: true,
      },
    ],
    value: 'issue count',
    label: 'Issue Count',
  },
];

export const fieldsNumberValidation: Field[] = [
  {
    conditions: [
      {
        component: {
          component: Number,
          props: {
            max: 5,
            min: 2,
          },
        },
        value: 'is',
        label: 'is',
        isDefault: true,
      },
    ],
    value: 'issue count',
    label: 'Issue Count',
  },
];

export const fieldsCount: Field[] = [
  {
    conditions: [
      {
        component: Count,
        value: 'is',
        label: 'is',
        isDefault: true,
      },
    ],
    value: 'issue count',
    label: 'Issue Count',
  },
];

export const fieldsInteger: Field[] = [
  {
    conditions: [
      {
        component: Integer,
        value: 'is',
        label: 'is',
        isDefault: true,
      },
    ],
    value: 'issue count',
    label: 'Issue Count',
  },
];

export const fieldsDateRange: Field[] = [
  {
    conditions: [
      {
        component: DateRangePicker,
        value: 'is',
        label: 'is',
        isDefault: true,
      },
    ],
    value: 'first observed',
    label: 'First Observed',
  },
];

export const fieldsDateRangeValidation: Field[] = [
  {
    conditions: [
      {
        component: {
          component: DateRangePicker,
          props: {
            minDate: new Date('2021-03-07T00:00:00Z'),
            maxDate: new Date('2021-03-27T00:00:00Z'),
          },
        },
        value: 'is',
        label: 'is',
        isDefault: true,
      },
    ],
    value: 'first observed',
    label: 'First Observed',
  },
];

export const fieldsSingleDate: Field[] = [
  {
    conditions: [
      {
        component: SingleDatePicker,
        value: 'is',
        label: 'is',
        isDefault: true,
      },
    ],
    value: 'first observed',
    label: 'First Observed',
  },
];

export const fieldsSelect: Field[] = [
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
          },
        },
        value: 'is',
        label: 'is',
      },
    ],
    value: 'detection method',
    label: 'Detection Method',
  },
];

export const fieldsSelectWithDefaultValue: Field[] = [
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
    ],
    value: 'detection method',
    label: 'Detection Method',
  },
];

export const fieldsSelectMultiValue: Field[] = [
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
            isMulti: true,
          },
        },
        value: 'is',
        label: 'is',
      },
    ],
    value: 'detection method',
    label: 'Detection Method',
  },
];
