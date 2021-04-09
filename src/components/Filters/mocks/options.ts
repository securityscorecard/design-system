import {
  CountFilter,
  DateRangePickerFilter,
  InputFilter,
  IntegerFilter,
  NumberFilter,
  SelectFilter,
  SingleDatePickerFilter,
  TagsInputFilter,
} from '../components';
import { Field, Filter } from '../Filters.types';
import { Operators } from '../Filters.enums';

export const fields: Field[] = [
  {
    conditions: [
      {
        component: {
          component: InputFilter,
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
        component: InputFilter,
        value: 'is not',
        label: 'is not',
      },
      {
        component: InputFilter,
        value: 'contains',
        label: 'contains',
        isDefault: true,
      },
      {
        component: InputFilter,
        value: 'does not contain',
        label: 'does not contain',
      },
    ],
    value: 'domain',
    label: 'Domain',
  },
  {
    conditions: [
      { component: TagsInputFilter, value: 'is', label: 'is' },
      {
        component: TagsInputFilter,
        value: 'is not',
        label: 'is not',
      },
      {
        component: TagsInputFilter,
        value: 'contains',
        label: 'contains',
        isDefault: true,
      },
      {
        component: TagsInputFilter,
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
          component: NumberFilter,
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
        component: NumberFilter,
        value: 'is not',
        label: 'is not',
      },
      {
        component: CountFilter,
        value: 'is less than',
        label: 'is less than',
      },
      {
        component: NumberFilter,
        value: 'is greater than',
        label: 'is greater than',
      },
      {
        component: NumberFilter,
        value: 'is at least',
        label: 'is at least',
      },
      {
        component: IntegerFilter,
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
          component: DateRangePickerFilter,
          props: {
            minDate: new Date('2021-03-01T00:00:00Z'),
            maxDate: new Date('2021-03-28T00:00:00Z'),
          },
        },
        value: 'is',
        label: 'is',
      },
      { component: SingleDatePickerFilter, value: 'before', label: 'before' },
      {
        component: SingleDatePickerFilter,
        value: 'after',
        label: 'after',
        isDefault: true,
      },
      {
        component: SingleDatePickerFilter,
        value: 'within last',
        label: 'within last',
      },
      {
        component: SingleDatePickerFilter,
        value: 'not within last',
        label: 'not within last',
      },
      {
        component: DateRangePickerFilter,
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
          component: SelectFilter,
          props: {
            options: [
              { value: 'any', label: 'Any' },
              { value: 'none', label: 'None' },
              { value: 'cloud', label: 'Cloud' },
              { value: 'ssc res', label: 'SSC Res.' },
              { value: '3rd party', label: '3rd party' },
            ],
            defaultValue: { value: 'none', label: 'None' },
          },
        },
        value: 'is',
        label: 'is',
      },
      {
        component: {
          component: SelectFilter,
          props: {
            options: [
              { value: 'any', label: 'Any' },
              { value: 'none', label: 'None' },
              { value: 'cloud', label: 'Cloud' },
              { value: 'ssc res', label: 'SSC Res.' },
              { value: '3rd party', label: '3rd party' },
              { value: 'pub data', label: 'Pubb Data' },
              { value: 'whois', label: 'WHOIS' },
              { value: 'dns', label: 'DNS' },
              { value: 'ssl', label: 'SSL' },
            ],
            defaultValue: { value: 'any', label: 'Any' },
          },
        },
        value: 'is not',
        label: 'is not',
      },
      {
        component: {
          component: SelectFilter,
          props: {
            options: [
              { value: 'any', label: 'Any' },
              { value: 'none', label: 'None' },
              { value: 'cloud', label: 'Cloud' },
              { value: 'ssc res', label: 'SSC Res.' },
              { value: '3rd party', label: '3rd party' },
              { value: 'pub data', label: 'Pubb Data' },
              { value: 'whois', label: 'WHOIS' },
              { value: 'dns', label: 'DNS' },
              { value: 'ssl', label: 'SSL' },
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
          component: SelectFilter,
          props: {
            options: [
              { value: 'any', label: 'Any' },
              { value: 'none', label: 'None' },
              { value: 'cloud', label: 'Cloud' },
              { value: 'ssc res', label: 'SSC Res.' },
              { value: '3rd party', label: '3rd party' },
              { value: 'pub data', label: 'Pubb Data' },
              { value: 'whois', label: 'WHOIS' },
              { value: 'dns', label: 'DNS' },
              { value: 'ssl', label: 'SSL' },
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
        component: InputFilter,
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
          component: InputFilter,
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

export const fieldsInputPlaceholderUnits: Field[] = [
  {
    conditions: [
      {
        component: {
          component: InputFilter,
          props: {
            placeholder: 'Placeholder',
            units: 'Units',
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
        component: TagsInputFilter,
        value: 'is',
        label: 'is',
        isDefault: true,
      },
    ],
    value: 'domain',
    label: 'Domain',
  },
];

export const fieldsTagsInputValidation: Field[] = [
  {
    conditions: [
      {
        component: {
          component: TagsInputFilter,
          props: {
            maxLength: 15,
            pattern: '[a-zA-Z;]+',
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

export const fieldsTagsInputPlaceholderUnits: Field[] = [
  {
    conditions: [
      {
        component: {
          component: TagsInputFilter,
          props: {
            placeholder: 'Placeholder',
            units: 'Units',
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

export const fieldsNumber: Field[] = [
  {
    conditions: [
      {
        component: NumberFilter,
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
          component: NumberFilter,
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

export const fieldsNumberPlaceholderUnits: Field[] = [
  {
    conditions: [
      {
        component: {
          component: NumberFilter,
          props: {
            placeholder: 'Placeholder',
            units: 'Units',
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
        component: CountFilter,
        value: 'is',
        label: 'is',
        isDefault: true,
      },
    ],
    value: 'issue count',
    label: 'Issue Count',
  },
];

export const fieldsCountPlaceholderUnits: Field[] = [
  {
    conditions: [
      {
        component: {
          component: CountFilter,
          props: {
            placeholder: 'Placeholder',
            units: 'Units',
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

export const fieldsCountValidation: Field[] = [
  {
    conditions: [
      {
        component: {
          component: CountFilter,
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

export const fieldsInteger: Field[] = [
  {
    conditions: [
      {
        component: IntegerFilter,
        value: 'is',
        label: 'is',
        isDefault: true,
      },
    ],
    value: 'issue count',
    label: 'Issue Count',
  },
];

export const fieldsIntegerValidation: Field[] = [
  {
    conditions: [
      {
        component: {
          component: IntegerFilter,
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

export const fieldsIntegerPlaceholderUnits: Field[] = [
  {
    conditions: [
      {
        component: {
          component: IntegerFilter,
          props: {
            placeholder: 'Placeholder',
            units: 'Units',
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

export const fieldsDateRange: Field[] = [
  {
    conditions: [
      {
        component: DateRangePickerFilter,
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
          component: DateRangePickerFilter,
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

export const fieldsDateRangePlaceholderUnits: Field[] = [
  {
    conditions: [
      {
        component: {
          component: DateRangePickerFilter,
          props: {
            placeholder: {
              startDate: 'Start date placeholder',
              endDate: 'End date placeholder',
            },
            units: 'Units',
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
        component: SingleDatePickerFilter,
        value: 'is',
        label: 'is',
        isDefault: true,
      },
    ],
    value: 'first observed',
    label: 'First Observed',
  },
];

export const fieldsSingleDatePlaceholderUnits: Field[] = [
  {
    conditions: [
      {
        component: {
          component: SingleDatePickerFilter,
          props: {
            placeholder: 'Placeholder',
            units: 'Units',
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

export const fieldsSelect: Field[] = [
  {
    conditions: [
      {
        component: {
          component: SelectFilter,
          props: {
            options: [
              { value: 'any', label: 'Any' },
              { value: 'none', label: 'None' },
              { value: 'cloud', label: 'Cloud' },
              { value: 'ssc res', label: 'SSC Res.' },
              { value: '3rd party', label: '3rd party' },
              { value: 'pub data', label: 'Pubb Data' },
              { value: 'whois', label: 'WHOIS' },
              { value: 'dns', label: 'DNS' },
              { value: 'ssl', label: 'SSL' },
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
          component: SelectFilter,
          props: {
            options: [
              { value: 'any', label: 'Any' },
              { value: 'none', label: 'None' },
              { value: 'cloud', label: 'Cloud' },
              { value: 'ssc res', label: 'SSC Res.' },
              { value: '3rd party', label: '3rd party' },
              { value: 'pub data', label: 'Pubb Data' },
              { value: 'whois', label: 'WHOIS' },
              { value: 'dns', label: 'DNS' },
              { value: 'ssl', label: 'SSL' },
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

export const fieldsSelectPlaceholder: Field[] = [
  {
    conditions: [
      {
        component: {
          component: SelectFilter,
          props: {
            options: [
              { value: 'any', label: 'Any' },
              { value: 'none', label: 'None' },
              { value: 'cloud', label: 'Cloud' },
              { value: 'ssc res', label: 'SSC Res.' },
              { value: '3rd party', label: '3rd party' },
              { value: 'pub data', label: 'Pubb Data' },
              { value: 'whois', label: 'WHOIS' },
              { value: 'dns', label: 'DNS' },
              { value: 'ssl', label: 'SSL' },
            ],
            placeholder: 'Placeholder',
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
          component: SelectFilter,
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
